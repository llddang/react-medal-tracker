export const MEDAL_FORM_SUBMIT_TYPE = {
  ADD: "ADD",
  UPDATE: "UPDATE",
} as const;
export type MEDAL_FORM_SUBMIT_TYPE =
  (typeof MEDAL_FORM_SUBMIT_TYPE)[keyof typeof MEDAL_FORM_SUBMIT_TYPE];

export const MEDAL_TYPE = {
  GOLD: "gold",
  SLIVER: "sliver",
  BRONZE: "bronze",
} as const;
export type MEDAL_TYPE = (typeof MEDAL_TYPE)[keyof typeof MEDAL_TYPE];

export const MEDAL_LABELS = {
  [MEDAL_TYPE.GOLD]: "금메달",
  [MEDAL_TYPE.SLIVER]: "은메달",
  [MEDAL_TYPE.BRONZE]: "동메달",
} as const;
