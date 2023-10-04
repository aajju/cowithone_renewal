import { useRecoilValue } from "recoil";
import { languageState } from "../recoil/languageState"; // Recoil 상태 파일의 경로를 정확하게 지정하세요.
import { useTranslation } from "react-i18next";

function Faq() {
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
    <div className="px-[20px] lg:px-[150px] lg:w-[1000px] mx-auto mb-20">
      <div>
        <h1
          id="price"
          className="font-bold text-center text-[22px] lg:text-[24px]"
        >
          {t("faq_title")}
        </h1>
        <div className="py-4 flex">
          <div className="flex-1"></div>
          {isKorean && (
            <ul className="w-[200px] flex flec-col justify-between pt-3 font-semibold text-blue-700">
              <a href="#price">
                <li> {t("faq_cost")}</li>
              </a>
              <a href="#solution">
                <li> {t("faq_solution")}</li>
              </a>
              <a href="#rule">
                <li> {t("faq_legal")}</li>
              </a>
              <a href="#etc">
                <li> {t("faq_other")}</li>
              </a>
            </ul>
          )}
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="text-[14px] lg:text-[15px]">
        <div className="text-blue-800 font-bold text-[18px] mb-3">
          {t("faq_cost")}
        </div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_cost_q1")}</summary>
          <div className="pt-2">{t("faq_cost_a1")}</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_cost_q2")}</summary>
          <div className="pt-2">{t("faq_cost_a2")}</div>
        </details>
        {/* <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            비용 대금은 어떻게 진행되나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details> */}
      </div>
      <div id="solution" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">
          {t("faq_solution")}
        </div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_solution_q1")}</summary>
          <div className="pt-2">{t("faq_solution_a1")}</div>
        </details>{" "}
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_solution_q2")}</summary>
          <div className="pt-2">{t("faq_solution_a2")}</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_solution_q3")}</summary>
          <div className="pt-2">{t("faq_solution_a3")}</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_solution_q4")}</summary>
          <div className="pt-2">{t("faq_solution_a4")}</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_solution_q5")}</summary>
          <div className="pt-2">{t("faq_solution_a5")}</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_solution_q6")}</summary>
          <div className="pt-2">{t("faq_solution_a6")}</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_solution_q7")}</summary>
          <div className="pt-2">{t("faq_solution_a7")}</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_solution_q8")}</summary>
          <div className="pt-2">{t("faq_solution_a8")}</div>
        </details>
      </div>
      <div id="rule" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">
          {t("faq_legal")}
        </div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_legal_q1")}</summary>
          <div className="pt-2">
            {t("faq_legal_a1_1")}

            <br />
            <br />
            <h6 className="text-blue-800 font-medium">{t("faq_legal_a1_2")}</h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_legal_q2")}</summary>
          <div className="pt-2">
            {t("faq_legal_a2_1")}
            <br />
            <br />
            <h2 className="font-semibold">{t("faq_legal_a2_2")}</h2>
            {t("faq_legal_a2_3")} <br /> {t("faq_legal_a2_4")}
            <br />
            {t("faq_legal_a2_5")} <br />
            {t("faq_legal_a2_6")} <br /> {t("faq_legal_a2_7")} <br />
            <br />
            <h2 className="font-semibold">{t("faq_legal_a2_8")}</h2>
            {t("faq_legal_a2_9")}
            <br /> {t("faq_legal_a2_10")} <br />
            {t("faq_legal_a2_11")}
            <br />
            {t("faq_legal_a2_12")} <br />
            <br />
            <h6 className="text-blue-800 font-medium">
              {t("faq_legal_a2_13")}
            </h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_legal_q3")}</summary>
          <div className="pt-2">
            {t("faq_legal_a3_1")}
            <br />
            {t("faq_legal_a3_2")} <br />
            <br />
            <h6 className="text-blue-800 font-medium">{t("faq_legal_a3_3")}</h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_legal_q4")} </summary>
          <div className="pt-2">
            {t("faq_legal_a4_1")} <br />
            {t("faq_legal_a4_2")} <br />
            {t("faq_legal_a4_3")} <br />
            {t("faq_legal_a4_4")} <br />
            {t("faq_legal_a4_5")}
            <br />
            {t("faq_legal_a4_6")}
            <br /> {t("faq_legal_a4_7")}
            <br /> {t("faq_legal_a4_8")} <br />
            {t("faq_legal_a4_9")}
            <br />
            {t("faq_legal_a4_10")}
            <br />
            <br />{" "}
            <h6 className="text-blue-800 font-medium">
              {t("faq_legal_a4_11")}
            </h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_legal_q5")} </summary>
          <div className="pt-2">
            {t("faq_legal_a5_1")}
            <br /> {t("faq_legal_a5_2")} <br />
            {t("faq_legal_a5_3")}
            <br />
            {t("faq_legal_a5_4")} <br />
            {t("faq_legal_a5_5")} <br />
            {t("faq_legal_a5_6")} <br />
            {t("faq_legal_a5_7")} <br />
            {t("faq_legal_a5_8")} <br />
            {t("faq_legal_a5_9")}
            <br /> {t("faq_legal_a5_10")}
            <br />
            <br />{" "}
            <h6 className="text-blue-800 font-medium">
              {t("faq_legal_a5_11")}
            </h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_legal_q6")}</summary>
          <div className="pt-2">
            {t("faq_legal_a6_1")}
            <br />
            <br /> {t("faq_legal_a6_2")} <br />
            {t("faq_legal_a6_3")} <br />
            {t("faq_legal_a6_4")} <br />
            {t("faq_legal_a6_5")} <br />
            {t("faq_legal_a6_6")} <br />
            {t("faq_legal_a6_7")}
            <br />
            {t("faq_legal_a6_8")} <br /> {t("faq_legal_a6_9")} <br />
            {t("faq_legal_a6_10")} <br />
            {t("faq_legal_a6_11")} <br />
            {t("faq_legal_a6_12")} <br /> {t("faq_legal_a6_13")}
            <br />
            <br />{" "}
            <h6 className="text-blue-800 font-medium">
              {t("faq_legal_a6_14")}
            </h6>
          </div>
        </details>
      </div>
      <div id="etc" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">
          {t("faq_other")}
        </div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_other_q1")}</summary>
          <div className="pt-2">{t("faq_other_a1")}</div>
        </details>{" "}
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">{t("faq_other_q2")} </summary>
          <div className="pt-2">{t("faq_other_a2")}</div>
        </details>
      </div>
    </div>
  );
}
export default Faq;
