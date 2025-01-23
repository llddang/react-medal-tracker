export const MedalFormSubmitType = {
  ADD: "ADD",
  UPDATE: "UPDATE",
} as const;
export type MedalFormSubmitType =
  (typeof MedalFormSubmitType)[keyof typeof MedalFormSubmitType];

export const MedalType = {
  GOLD: "gold",
  SLIVER: "sliver",
  BRONZE: "bronze",
} as const;
export type MedalType = (typeof MedalType)[keyof typeof MedalType];
export const MedalTypeList = Object.keys(MedalType) as Array<
  keyof typeof MedalType
>;

export const MEDAL_LABELS = {
  [MedalType.GOLD]: "금메달",
  [MedalType.SLIVER]: "은메달",
  [MedalType.BRONZE]: "동메달",
} as const;
