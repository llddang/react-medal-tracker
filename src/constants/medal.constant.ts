export const MEDAL_TYPES = ["gold", "sliver", "bronze"] as const;
export type MedalType = (typeof MEDAL_TYPES)[number];

export const MEDAL_LABELS: Record<MedalType, string> = {
  gold: "금메달",
  sliver: "은메달",
  bronze: "동메달",
};
