/**
 * 스크롤 등장 효과
 *
 * [data-reveal] 이 붙은 요소가 화면에 들어오면 .is-revealed 를 붙인다.
 * 관찰자는 하나만 두고, 탭을 바꿔 새로 그려지는 요소도 자동으로 잡는다.
 *
 * 숨김 상태(opacity:0)는 CSS 에서 .reveal-ready 가 붙은 뒤에만 적용되므로,
 * 이 코드가 돌지 않으면 내용이 그냥 보인다. (내용이 사라지는 사고 방지)
 */
export function initReveal(): () => void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return () => {};
  }

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  root.classList.add('reveal-ready');

  // 애니메이션을 원치 않는 사용자에게는 전부 바로 보여준다
  if (reduceMotion) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
    return () => root.classList.remove('reveal-ready');
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // 화면 안에 들어왔거나, 이미 위로 지나간 요소는 보여준다.
        // 위로 지나간 경우까지 챙기지 않으면 메뉴로 아래 섹션에 바로 이동했을 때
        // 건너뛴 구간이 투명한 채로 남는다.
        const passed = entry.boundingClientRect.bottom < 0;
        if (!entry.isIntersecting && !passed) continue;
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target); // 한 번 나타나면 되돌리지 않는다
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
  );

  const observe = (node: ParentNode) => {
    if (node instanceof Element && node.matches('[data-reveal]')) io.observe(node);
    node.querySelectorAll?.('[data-reveal]:not(.is-revealed)').forEach((el) => io.observe(el));
  };

  observe(document);

  /**
   * 스크롤이 멈춘 뒤 한 번 훑는다.
   *
   * 메뉴를 눌러 아래 섹션으로 한 번에 이동하면 중간 요소들이 화면 아래에서
   * 화면 위로 '건너뛰어' 버린다. 이때 IntersectionObserver 는 임계값을
   * 넘지 않으므로 콜백 자체가 오지 않아 그 구간이 투명한 채로 남는다.
   * 그래서 스크롤이 끝나면 이미 지나친 요소를 직접 찾아 보여준다.
   */
  const sweep = () => {
    const fold = window.innerHeight * 0.94;
    document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => {
      if (el.getBoundingClientRect().top < fold) {
        el.classList.add('is-revealed');
        io.unobserve(el);
      }
    });
  };

  let sweepTimer: number | undefined;
  const onScroll = () => {
    window.clearTimeout(sweepTimer);
    sweepTimer = window.setTimeout(sweep, 140);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // 탭 전환처럼 나중에 그려지는 요소도 잡는다
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) observe(n as Element);
      });
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });

  return () => {
    io.disconnect();
    mo.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.clearTimeout(sweepTimer);
    root.classList.remove('reveal-ready');
  };
}
