import { atom } from "recoil";

// Recoil atom을 사용하여 언어 상태를 생성합니다.
export const languageState = atom({
  key: "languageState", // 고유 키
  default: "ko", // 초기값: 한국어
});
