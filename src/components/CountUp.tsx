import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** 최종 숫자 */
  to: number;
  /** 앞뒤에 붙일 문자 (예: '총 ', '세대') */
  prefix?: string;
  suffix?: string;
  /** 소수점 자리수 */
  decimals?: number;
  /** 천 단위 쉼표 */
  comma?: boolean;
  durationMs?: number;
  className?: string;
}

/** 화면에 들어오면 0 에서 목표 숫자까지 올라가는 숫자 */
export const CountUp: React.FC<CountUpProps> = ({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  comma = true,
  durationMs = 1400,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || done.current) return;
        done.current = true;
        io.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / durationMs, 1);
          // 빠르게 올라가다 부드럽게 멈춘다
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(to * eased);
          if (p < 1) requestAnimationFrame(tick);
          else setValue(to);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, durationMs]);

  const text = value.toLocaleString('ko-KR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: comma,
  });

  return (
    <span ref={ref} className={`tabular ${className}`}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
};
