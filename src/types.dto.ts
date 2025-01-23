import { MEDAL_TYPE } from "./types.type";

export type MedalRecordDto = {
  country: string;
} & {
  [key in MEDAL_TYPE]: number;
};
