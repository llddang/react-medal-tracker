import { LOCAL_STORAGE_MEDAL_LIST } from "@/constants";
import { MedalDataDto, MedalRecordDto } from "@/types.dto";
import { MedalFormSubmitType } from "@/types.type";
import { getLocalStorageData } from "./utils";

export const formSubmitLogic: {
  [key in MedalFormSubmitType]: {
    errorMessage: string;
    isInvalidate: (country: string) => boolean;
  };
} = {
  [MedalFormSubmitType.ADD]: {
    errorMessage: "이미 존재하는 국가입니다.",
    isInvalidate: (country) =>
      getLocalStorageData(LOCAL_STORAGE_MEDAL_LIST).some(
        (item: MedalRecordDto) => item.country === country
      ),
  },
  [MedalFormSubmitType.UPDATE]: {
    errorMessage: "기존에 존재하지 않은 국가입니다.",
    isInvalidate: (country) =>
      !getLocalStorageData(LOCAL_STORAGE_MEDAL_LIST).some(
        (item: MedalRecordDto) => item.country === country
      ),
  },
};

export function isInvalidateFormData(formData: MedalDataDto) {
  if (formData.country === "") return true;
  if (formData.gold < 0 || formData.sliver < 0 || formData.bronze < 0)
    return true;
  return false;
}
