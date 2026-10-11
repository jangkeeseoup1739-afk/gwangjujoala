/**
 * 중앙공원 롯데캐슬 시그니처 — 이미지 단일 진입점
 *
 * 사진을 바꾸려면 코드를 건드릴 필요가 없습니다.
 * 프로젝트 맨 위 `photos/` 폴더에 아래 "슬롯 이름"으로 사진을 넣으면 자동으로 교체됩니다.
 *   예) photos/hero.jpg  →  히어로 대표 배경이 그 사진으로 바뀝니다.
 * 파일이 없으면 아래 기본 사진이 그대로 쓰입니다.
 * 자세한 안내는 photos/README.md 를 보세요.
 */

// ── 기본 사진 (photos/ 폴더에 같은 이름의 사진이 없을 때 쓰임) ──────────────
import heroDefault from './hero.webp';
import brightDefault from './bright.webp';
import birdeyeDefault from './birdeye.webp';
import elevationDefault from './elevation.webp';
import elevationDetailDefault from './elevation-detail.webp';

import livingDefault from './living.webp';
import kitchenDefault from './kitchen.webp';
import bedroomRenderDefault from './bedroom-render.webp';
import dressroomRenderDefault from './dressroom-render.webp';
import bathroomDefault from './bathroom.webp';
import parkDefault from './park.webp';
import semiconductorDefault from './semiconductor.webp';
import loungeDefault from './lounge.webp';

// 실제 모델하우스 촬영 사진
import bedroomDefault from './bedroom.webp';
import dressroomDefault from './dressroom.webp';
import entranceDefault from './entrance.webp';
import terraceDefault from './terrace.webp';

// 공식 배치도 · 동호수 · 입면도
import bl1Default from './bl1.webp';
import bl1UnitsDefault from './bl1-units.webp';
import bl1UnitsDetailDefault from './bl1-units-detail.webp';
import bl21Default from './bl2-1.webp';
import bl21UnitsDefault from './bl2-1-units.webp';
import bl21UnitsDetailDefault from './bl2-1-units-detail.webp';
import bl22Default from './bl2-2.webp';
import bl22DetailDefault from './bl2-2-detail.webp';
import bl22UnitsDefault from './bl2-2-units.webp';
import bl22UnitsDetailDefault from './bl2-2-units-detail.webp';

// ── photos/ 폴더 사진 수집 ────────────────────────────────────────────────
// 빌드 시점에 photos/ 폴더를 훑습니다. 폴더가 비어 있으면 빈 객체가 되어
// 아래 기본 사진이 그대로 쓰입니다. (public/ 을 쓰지 않는 이유: 없는 파일이
// 404를 내면서 기본 사진으로 되돌아가는 깜빡임이 생깁니다.)
const dropped = import.meta.glob(
  '/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

/** 파일명(확장자 제외, 소문자)으로 색인 — hero.jpg / HERO.JPG / hero.png 모두 'hero' */
const bySlot = new Map<string, string>(
  Object.entries(dropped).map(([filePath, url]) => [
    filePath
      .split('/')
      .pop()!
      .replace(/\.[^.]+$/, '')
      .toLowerCase(),
    url,
  ]),
);

/** photos/<slot>.* 가 있으면 그것을, 없으면 기본 사진을 쓴다 */
const pick = (slot: string, fallback: string): string =>
  bySlot.get(slot) ?? fallback;

/** photos/ 폴더에서 실제로 교체된 슬롯 목록 (개발 중 확인용) */
export const OVERRIDDEN_SLOTS: string[] = [...bySlot.keys()].sort();

// ── 앱 전체가 쓰는 이미지 맵 ──────────────────────────────────────────────
export const APP_IMAGES = {
  // 히어로 · 조감도 · 입면
  heroLotteCastle: pick('hero', heroDefault),
  luxuryBrightHeroBg: pick('bright', brightDefault),
  mainBirdEyeView: pick('birdeye', birdeyeDefault),
  elevationFacade: pick('elevation', elevationDefault),
  elevationFacadeDetail: pick('elevation-detail', elevationDetailDefault),

  // 인테리어 · 단지 · 호재
  interiorLivingRoom: pick('living', livingDefault),
  kitchenInteriorView: pick('kitchen', kitchenDefault),
  interiorMasterBedroom: pick('bedroom-render', bedroomRenderDefault),
  interiorDressroom: pick('dressroom-render', dressroomRenderDefault),
  bathroomLuxuryView: pick('bathroom', bathroomDefault),
  centralParkLake: pick('park', parkDefault),
  semiconductorVision: pick('semiconductor', semiconductorDefault),
  modelHouseLounge: pick('lounge', loungeDefault),

  // 실제 모델하우스 촬영 사진
  userPhotoBedroom: pick('bedroom', bedroomDefault),
  userPhotoDressroom: pick('dressroom', dressroomDefault),
  userPhotoEntrance: pick('entrance', entranceDefault),
  userPhotoMasterTerrace: pick('terrace', terraceDefault),

  // 배치도 · 동호수
  bl1Layout: pick('bl1', bl1Default),
  bl1Units: pick('bl1-units', bl1UnitsDefault),
  bl1UnitsDetail: pick('bl1-units-detail', bl1UnitsDetailDefault),
  bl2_1Layout: pick('bl2-1', bl21Default),
  bl2_1Units: pick('bl2-1-units', bl21UnitsDefault),
  bl2_1UnitsDetail: pick('bl2-1-units-detail', bl21UnitsDetailDefault),
  bl2_2Layout: pick('bl2-2', bl22Default),
  bl2_2LayoutDetail: pick('bl2-2-detail', bl22DetailDefault),
  bl2_2Units: pick('bl2-2-units', bl22UnitsDefault),
  bl2_2UnitsDetail: pick('bl2-2-units-detail', bl22UnitsDetailDefault),
};

export default APP_IMAGES;
