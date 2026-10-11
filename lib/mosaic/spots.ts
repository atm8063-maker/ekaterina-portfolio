/** Portrait silhouette mosaic grid in source coordinates (846×1398 design space). */

export type MosaicSpotType = 'img' | 'video' | 'face';

export interface SilhouetteSpot {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: MosaicSpotType;
  src?: string;
  isPolygon?: boolean;
  clipPath?: string;
  label?: string;
}

export const SILHOUETTE_SPOTS: SilhouetteSpot[] = [
  { id: 'A1', x: 0, y: 0, w: 190, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-20 (5).webp' },
  { id: 'A2', x: 196, y: 0, w: 144, h: 210, type: 'img', src: 'photo_3329@04-08-2026_21-08-45.webp' },
  { id: 'A3', x: 346, y: 0, w: 180, h: 180, type: 'img', src: 'photo_2026-08-27_17-30-20 (5).webp' },
  { id: 'A4', x: 532, y: 0, w: 150, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-20 (7).webp' },
  { id: 'A5', x: 688, y: 0, w: 158, h: 172, type: 'img', src: 'photo_2026-08-27_17-30-21 (8).webp' },

  { id: 'B1', x: 0, y: 178, w: 190, h: 130, type: 'img', src: 'photo_2026-08-27_17-30-19.webp' },
  { id: 'B2', x: 196, y: 216, w: 144, h: 182, type: 'video', src: 'video_2026-08-04_22-43-39 (4).mp4' },
  { id: 'B3', x: 346, y: 186, w: 180, h: 148, type: 'face' },
  { id: 'B4', x: 532, y: 178, w: 150, h: 156, type: 'img', src: 'photo_2026-08-27_17-30-19 (2).webp' },
  { id: 'B5', x: 688, y: 178, w: 158, h: 156, type: 'img', src: 'photo_2026-08-27_17-30-19 (3).webp' },

  { id: 'C1', x: 0, y: 314, w: 110, h: 290, type: 'img', src: 'photo_2026-08-27_17-30-21 (2).webp' },
  { id: 'C2', x: 116, y: 314, w: 74, h: 156, type: 'img', src: 'photo_3333@04-08-2026_21-08-45.webp' },
  { id: 'C3', x: 116, y: 476, w: 108, h: 128, type: 'img', src: 'photo_2026-08-27_17-30-21 (5).webp' },

  {
    id: 'C4',
    isPolygon: true,
    x: 196,
    y: 404,
    w: 178,
    h: 200,
    clipPath: 'polygon(0% 0%, 80.9% 0%, 80.9% 53.5%, 100% 53.5%, 100% 100%, 19.1% 100%, 19.1% 33%, 0% 33%)',
    type: 'img',
    src: 'photo_2026-08-30_02-47-41 (5).webp',
  },

  { id: 'C5', x: 346, y: 340, w: 406, h: 164, type: 'face' },
  { id: 'C6', x: 758, y: 340, w: 88, h: 164, type: 'img', src: 'photo_2026-08-27_17-30-21 (4).webp' },

  { id: 'D1', x: 0, y: 610, w: 224, h: 232, type: 'video', src: 'video_2026-08-29_18-25-41.mp4' },
  { id: 'D2', x: 230, y: 610, w: 144, h: 126, type: 'img', src: 'photo_2026-08-29_17-06-15.webp' },
  { id: 'D3', x: 380, y: 510, w: 286, h: 224, type: 'face' },
  { id: 'D4', x: 672, y: 510, w: 174, h: 224, type: 'img', src: 'photo_2960@31-07-2026_18-19-07.webp' },

  { id: 'E1', x: 230, y: 742, w: 144, h: 184, type: 'img', src: 'photo_3334@04-08-2026_21-08-45.webp' },
  { id: 'E2', x: 380, y: 740, w: 152, h: 184, type: 'face' },
  { id: 'E3', x: 538, y: 740, w: 144, h: 184, type: 'img', src: 'photo_2026-08-29_20-12-50.webp' },
  { id: 'E4', x: 688, y: 740, w: 158, h: 250, type: 'video', src: 'video_2026-08-29_20-12-42.mp4' },

  { id: 'G1', x: 0, y: 848, w: 224, h: 266, type: 'img', src: 'photo_2026-08-29_20-12-29.webp' },
  { id: 'F3', x: 230, y: 932, w: 452, h: 182, type: 'video', src: 'video_48@31-07-2026_19-44-20.mp4' },
  { id: 'F4', x: 688, y: 996, w: 158, h: 128, type: 'img', src: 'photo_3331@04-08-2026_21-08-45.webp' },

  { id: 'F1', x: 0, y: 1120, w: 160, h: 278, type: 'img', src: 'photo_2026-08-27_17-30-20.webp' },
  { id: 'F2', x: 166, y: 1120, w: 166, h: 278, type: 'img', src: 'photo_3330@04-08-2026_21-08-45.webp' },
  { id: 'G2', x: 338, y: 1120, w: 194, h: 278, type: 'face', label: 'DECOLLETE' },
  { id: 'G3', x: 538, y: 1120, w: 144, h: 278, type: 'img', src: 'photo_2026-08-27_17-30-21 (3).webp' },
  { id: 'G4', x: 688, y: 1130, w: 158, h: 268, type: 'img', src: 'photo_2026-08-27_17-30-20 (4).webp' },
];
