import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalStorageData(key: string) {
  return JSON.parse(localStorage.getItem(key) ?? "");
}

export function getFormActionValue<T>(e: React.FormEvent<HTMLFormElement>) {
  const submitter = (e.nativeEvent as SubmitEvent)
    .submitter as HTMLButtonElement;
  const action = submitter.formAction.split("/").at(-1);

  return action as T;
}
