import MapContainer from "../Components/MapContainer";

import { useRecoilValue } from "recoil";
import { languageState } from "../recoil/languageState"; // Recoil 상태 파일의 경로를 정확하게 지정하세요.
import { useTranslation } from "react-i18next";
function Contact() {
  const language = useRecoilValue(languageState);
  const isKorean = language === "ko";
  const isEnglish = language === "en";
  const { t } = useTranslation();
  // 언어에 따른 폰트 크기 설정
  const fontSizeKorean = {
    base: "14px",
    md: "20px",
    lg: "28px",
  };

  const fontSizeEnglish = {
    base: "12px", // 영어일 때의 기본 폰트 크기
    md: "16px",
    lg: "24px",
  };

  const fontSize = isKorean ? fontSizeKorean : fontSizeEnglish;

  return (
    <div className="mx-auto mb-20">
      <h1 className="font-bold text-center text-[24px] lg:text-[35px] py-8 lg:py-10 lg:pt-16">
        {t("contact_title1")}
        <br className="lg:hidden" /> {t("contact_title2")}
      </h1>

      <div className="text-center pt-4 space-y-4">
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]">
            {" "}
            {t("contact_email")}
          </div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            help@cowithone.com
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]"> {t("contact_tel")}</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            {t("contact_tel_d")}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]"> {t("contact_fax")}</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            {t("contact_fax_d")}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]"> {t("contact_addr")}</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            {t("contact_addr_d1")}
            <br className="lg:hidden" /> {t("contact_addr_d2")}
          </div>
        </div>
      </div>
      <MapContainer />
    </div>
  );
}
export default Contact;
