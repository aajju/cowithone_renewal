import logoPath from "../assets/img/logo.png";

import { useRecoilValue } from "recoil";
import { languageState } from "../recoil/languageState"; // Recoil 상태 파일의 경로를 정확하게 지정하세요.
import { useTranslation } from "react-i18next";

function Footer() {
  const language = useRecoilValue(languageState);
  const isKorean = language === "ko";
  const isEnglish = language === "en";
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#ECECEC99] px-[20px] py-[40px] lg:px-[150px] lg:py-[80px] space-y-4">
      <img src={logoPath} alt="Cowithone" width="200" className="py-1" />
      <div className="text-[14px] lg:text-[16px] space-y-1">
        <h6>
          {" "}
          {t("footer_company")}
          {isKorean && t("footer_ceo")}
        </h6>
        <h6>{isKorean && t("footer_businessnumber")}</h6>
        <h6> {t("footer_addr")}</h6>
      </div>
      <div>
        <h6 className="font-bold">{t("footer_customercenter")}</h6>
        <div className="space-y-1 text-[14px] lg:text-[16px] pt-1">
          <h6>{t("footer_tel")}</h6>
          <h6>{t("footer_email")}</h6>
        </div>
      </div>
      <div className="text-[12px] lg:text-[14px] text-center">
        Copyright ⓒ 2011 - 2023 COWITHONE. All rights reserved.
      </div>
    </div>
  );
}
export default Footer;
