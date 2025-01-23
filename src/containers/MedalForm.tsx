import { SetStateAction, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { getFormActionValue } from "@/lib/utils";
import { PARIS_OLYMPICS_COUNTRIES_OPTION } from "@/constants";

import { MedalDataDto, MedalRecordDto } from "@/types.dto";
import {
  MedalFormSubmitType,
  MEDAL_LABELS,
  MedalTypeValues,
} from "@/types.type";
import { formSubmitLogic, isInvalidateFormData } from "@/lib/medalForm.util";

export interface MedalFormProps {
  setMedalList: React.Dispatch<SetStateAction<MedalRecordDto[]>>;
}

export default function MedalForm({ setMedalList }: MedalFormProps) {
  const [formData, setFormData] = useState<MedalDataDto>(initialFormData);

  function handleCountryChange(newCountry: string) {
    setFormData((prev) => ({
      ...prev,
      country: newCountry,
    }));
  }

  function handleMedalCountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  }

  function saveMedalList(formData: MedalDataDto, type: MedalFormSubmitType) {
    const id = crypto.randomUUID();
    const totalMedalCount = MedalTypeValues.reduce(
      (sum, key) => sum + formData[key],
      0
    );

    switch (type) {
      case MedalFormSubmitType.ADD:
        setMedalList((prev) => [
          ...prev,
          { ...formData, id, total: totalMedalCount },
        ]);
        break;
      case MedalFormSubmitType.UPDATE:
        setMedalList((prev) => [
          ...prev.filter((item) => item.country !== formData.country),
          { ...formData, id, total: totalMedalCount },
        ]);
        break;
      default:
        break;
    }
  }

  function resetFormData() {
    setFormData(initialFormData);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isInvalidateFormData(formData)) {
      return toast.warning("잘못된 입력 형식입니다.", {
        description: "국가가 선택되었고 메달의 값이 0 이상인지 확인해 주세요.",
      });
    }

    const actionType = getFormActionValue<MedalFormSubmitType>(e);
    if (formSubmitLogic[actionType].isInvalidate(formData.country)) {
      return toast.warning("잘못된 입력 방식입니다.", {
        description: formSubmitLogic[actionType].errorMessage,
      });
    }

    saveMedalList(formData, actionType);

    resetFormData();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4 mb-2 text-center">
        <div className="flex-1">
          <p className="font-medium">국가명</p>
          <Combobox
            options={PARIS_OLYMPICS_COUNTRIES_OPTION}
            value={formData.country}
            onChange={handleCountryChange}
            defaultValue="국가 선택"
          />
        </div>
        {MedalTypeValues.map((type) => (
          <div key={type} className="flex-1">
            <p className="font-medium">{MEDAL_LABELS[type]}</p>
            <Input
              type="number"
              id={type}
              value={formData[type]}
              onChange={handleMedalCountChange}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse gap-4">
        <Button
          variant="outline"
          type="submit"
          formAction={MedalFormSubmitType.UPDATE}
        >
          갱신하기
        </Button>
        <Button type="submit" formAction={MedalFormSubmitType.ADD}>
          추가하기
        </Button>
      </div>
    </form>
  );
}

const initialFormData: MedalDataDto = {
  country: "",
  gold: 0,
  sliver: 0,
  bronze: 0,
};
