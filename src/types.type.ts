export const MEDAL_FORM_SUBMIT_TYPE = {
  ADD: "ADD",
  UPDATE: "UPDATE",
} as const;
export type MEDAL_FORM_SUBMIT_TYPE =
  (typeof MEDAL_FORM_SUBMIT_TYPE)[keyof typeof MEDAL_FORM_SUBMIT_TYPE];
