import loc_namyangju from "../assets/img/partner/loc_namyangju.png";
import pub_kwater from "../assets/img/partner/pub_kwater.png";
import con_kukdong from "../assets/img/partner/con_kukdong.png";
import eng_kunhwa from "../assets/img/partner/eng_kunhwa.png";
import etc_movements from "../assets/img/partner/etc_movements.png";
import loc_songpa from "../assets/img/partner/loc_songpa.png";
import loc_seongnam from "../assets/img/partner/loc_seongnam.png";
import loc_hwasung from "../assets/img/partner/loc_hwasung.png";
import con_kumho from "../assets/img/partner/con_kumho.png";
import con_hdc from "../assets/img/partner/con_hdc.png";
import con_taeyoung from "../assets/img/partner/con_taeyoung.png";
// import eng_dmcm from "../assets/img/partner/eng_dmcm.png";
import eng_dohwa from "../assets/img/partner/eng_dohwa.png";
import eng_yooshin from "../assets/img/partner/eng_yooshin.png";
import etc_becs from "../assets/img/partner/etc_becs.png";
import etc_corel from "../assets/img/partner/etc_corel.png";
// import etc_youngpoong from "../assets/img/partner/etc_youngpoong.jpeg";
import pub_lh from "../assets/img/partner/pub_lh.png";
import pub_hydro from "../assets/img/partner/pub_hydro.png";
import pub_krclean from "../assets/img/partner/pub_krclean.png";
import cert1 from "../assets/img/certificateofpatent/cert1.png";
import cert2 from "../assets/img/certificateofpatent/cert2.png";
import cert3 from "../assets/img/certificateofpatent/cert3.png";
import cert4 from "../assets/img/certificateofpatent/cert4.png";
import cert5 from "../assets/img/certificateofpatent/cert5.png";
import cert6 from "../assets/img/certificateofpatent/cert6.png";
import cert7 from "../assets/img/certificateofpatent/cert7.png";
import cert8 from "../assets/img/certificateofpatent/cert8.png";
import cert10 from "../assets/img/certificateofpatent/cert10.png";
import cert11 from "../assets/img/certificateofpatent/cert11.png";
import cert12 from "../assets/img/certificateofpatent/cert12.png";
import cert13 from "../assets/img/certificateofpatent/cert13.png";
import cert14 from "../assets/img/certificateofpatent/cert14.png";
import cert15 from "../assets/img/certificateofpatent/cert15.png";
import cert16 from "../assets/img/certificateofpatent/cert16.png";
import cert18 from "../assets/img/certificateofpatent/cert18.png";
import cert19 from "../assets/img/certificateofpatent/cert19.png";
import cert17 from "../assets/img/certificateofpatent/cert17.jpg";
import design1 from "../assets/img/certificateofpatent/design1.png";
import design2 from "../assets/img/certificateofpatent/design2.png";
import utility1 from "../assets/img/certificateofpatent/utility1.png";
import prize1 from "../assets/img/prize/prize1.png";
import prize2 from "../assets/img/prize/prize2.png";
import prize3 from "../assets/img/prize/prize3.png";
import prize4 from "../assets/img/prize/prize4.jpg";
import prize5 from "../assets/img/prize/prize5.png";
import prize7 from "../assets/img/prize/prize7.png";
import prize8 from "../assets/img/prize/prize8.png";
import prize9 from "../assets/img/prize/prize9.png";
import prize10 from "../assets/img/prize/prize10.png";
import inno1 from "../assets/img/prize/inno1.jpg";
import inno2 from "../assets/img/prize/inno2.png";
import iso1 from "../assets/img/prize/iso1.png";
import iso2 from "../assets/img/prize/iso2.png";
import purchase1 from "../assets/img/prize/purchase1.png";

import {
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  TruckIcon,
  DocumentTextIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRecoilValue } from "recoil";
import { languageState } from "../recoil/languageState"; // Recoil 상태 파일의 경로를 정확하게 지정하세요.
import { useTranslation } from "react-i18next";

function Result() {
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

  const settings = {
    dots: true,
    arrows: false, // 좌,우 버튼
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 2500, // 자동 캐러셀 속도
    responsive: [
      // 반응형 옵션
      {
        breakpoint: 1024, // (숫자)px 이하일 경우
        settings: {
          infinite: true,
          speed: 500,
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false, // 좌,우 버튼
          dots: false,
          autoplay: true, // 자동 캐러셀
          autoplaySpeed: 1500, // 자동 캐러셀 속도
        },
      },
    ],
  };
  return (
    <div className="">
      {/* section1. 실적 메인 */}
      <div className="px-[20px] text-center ">
        <h1 className="font-bold text-[22px] lg:text-[52px] py-8 lg:pb-20 lg:pt-24 ">
          {t("result_s1_title1")}
          <br /> {t("result_s1_title2")}
        </h1>
      </div>
      {/* section2. 납품실적 */}
      <div className="bg-[#f4f4f4] py-10 lg:py-24">
        <div className="px-[20px] lg:px-64 font-semibold text-[30px] lg:text-[40px]">
          {t("result_s2_title")}
        </div>
        <p
          className={`px-[20px] lg:px-64 pt-2 text-gray-500 text-[${fontSize.base}] md:text-[${fontSize.md}] lg:text-[${fontSize.lg}]`}
        >
          &nbsp;{t("result_s2_subtitle1")}
          <br /> {t("result_s2_subtitle2")}
          &nbsp;
          <br className="hidden lg:block" />
          {t("result_s2_subtitle3")}
        </p>
        <div className="px-[20px]   pt-6">
          {/* for PC table */}
          <div className="overflow-x-auto hidden lg:block">
            <table className="table-auto w-[500px] lg:w-[880px] mx-auto border-l border-t shadow  ">
              <thead className="border-b">
                <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                  <th className="pl-2 lg:pl-4 border-r text-left">
                    {" "}
                    {t("result_s2_t_r1_1")}
                  </th>
                  <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                    {t("result_s2_t_r1_2")}
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-left">
                    {t("result_s2_t_r1_3")}
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-left ">
                    {t("result_s2_t_r1_4")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px]">
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_1")}
                    <br />
                    {isKorean && "(K-WATER)"}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-b border-r">
                    {t("result_s2_t_site_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_water")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r border-b">
                    {t("result_s2_t_bps")}
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_2")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_water2")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_psps")}
                    ,
                    <br /> {t("result_s2_t_sts")}
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_3")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_water2")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_psps")}
                    ,
                    <br /> {t("result_s2_t_sts")}
                  </td>
                </tr>
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_4")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_ind_water")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_sts")}
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_5")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b ">
                    {t("result_s2_t_metro_water")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_sts")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_6")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_metro_water")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("result_s2_t_sts")}
                  </td>
                </tr>
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_2")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_7")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b ">
                    {t("result_s2_t_agri_water")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_lss")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_8")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_water")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("result_s2_t_psps")}
                  </td>
                </tr>

                <tr className="border-b bg-white odd:bg-gray-100  ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_3")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_9")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_seawater")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("result_s2_t_lss")}
                  </td>
                </tr>
                <tr className="border-b bg-white   ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_4")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_10")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_sewage_pressure")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("result_s2_t_lss")}
                  </td>
                </tr>
                <tr className="border-b bg-white odd:bg-gray-100  ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_5")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_11")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_river_water")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("result_s2_t_psps")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_6")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_12")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_sewage_pressure2")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("result_s2_t_psps")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* for mobile table */}
          <div className="overflow-x-auto  lg:hidden">
            <table className="table-auto w-full lg:w-full mx-auto border-l border-t  shadow  ">
              <thead className="border-b">
                <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                  <th className="pl-2 lg:pl-4 border-r text-left">
                    {" "}
                    {t("result_s2_t_r1_1")}
                  </th>
                  <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                    {t("result_s2_t_r1_2")}
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-left">
                    {t("result_s2_t_r1_3")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px]">
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_1")}
                    <br />
                    {isKorean && "(K-WATER)"}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-b border-r">
                    {t("result_s2_t_site_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {" "}
                    {t("result_s2_t_water")}
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_2")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_water2")}
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_3")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_water2")}
                  </td>
                </tr>
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_4")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_ind_water")}
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_5")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b ">
                    {t("result_s2_t_metro_water")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_6")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_metro_water")}
                  </td>
                </tr>
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_2")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    {t("result_s2_t_site_7")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b ">
                    {t("result_s2_t_agri_water")}
                  </td>
                </tr>
                <tr className="border-b bg-white odd:bg-gray-100 ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_8")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_water")}
                  </td>
                </tr>
                <tr className="border-b bg-white odd:bg-gray-100  ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_3")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_9")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_seawater")}
                  </td>
                </tr>
                <tr className="border-b bg-white  odd:bg-gray-100">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_4")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_10")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_sewage_pressure")}
                  </td>
                </tr>
                <tr className="border-b bg-white  odd:bg-gray-100">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_5")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_11")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_river_water")}
                  </td>
                </tr>
                <tr className="border-b bg-white odd:bg-gray-100 ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    {t("result_s2_t_cli_6")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    {t("result_s2_t_site_12")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("result_s2_t_sewage_pressure2")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* section3. 파트너 */}
      <div className="flex flex-col py-10 lg:py-24 text-center">
        <div className="px-[20px] font-semibold text-[30px] lg:text-[40px]">
          {t("result_s3_title")}
        </div>
        <div className="px-[20px] text-[18px] lg:text-[28px] text-gray-500 pt-2">
          {t("result_s3_subtitle")}
        </div>
        <div className="px-[4px] lg:px-44  pt-6 lg:pt-8 grid grid-cols-5  items-center  gap-8  text-[10px] lg:text-[20px] ">
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2 ">
            <div>
              <BuildingLibraryIcon className="w-5 h-5 lg:w-10 lg:h-10  mx-auto" />
            </div>
            <div>{t("result_s3_c1")}</div>
          </div>
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2">
            <div>
              <BuildingOffice2Icon className="w-5 h-5 lg:w-10 lg:h-10 mx-auto" />
            </div>
            <div>{t("result_s3_c2")}</div>
          </div>
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2">
            <div>
              <TruckIcon className="w-5 h-5 lg:w-10 lg:h-10 mx-auto" />
            </div>
            <div>
              {t("result_s3_c3")}
              {/* <br />
              {isEnglish && <>&nbsp;</>} */}
            </div>
          </div>
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2">
            <div>
              <DocumentTextIcon className="w-5 h-5 lg:w-10 lg:h-10 mx-auto" />
            </div>
            <div>
              {t("result_s3_c4")}
              {/* <br />
              {isEnglish && <>&nbsp;</>} */}
            </div>
          </div>
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2">
            <div>
              <HandThumbUpIcon className="w-5 h-5 lg:w-10 lg:h-10 mx-auto" />
            </div>
            <div>{t("result_s3_c5")}</div>
          </div>
          <div className="flex  justify-center lg:h-[88px]  ">
            <img
              src={loc_namyangju}
              alt="남양주시"
              className="object-contain"
            />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            <img
              src={pub_kwater}
              alt="한국수자원공사"
              className="object-contain"
            />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            <img src={con_kukdong} alt="극동건설" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            <img
              src={eng_kunhwa}
              alt="건화엔지니어링"
              className="object-contain"
            />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            <img
              src={etc_movements}
              alt="무브먼츠"
              className="object-contain"
            />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            <img src={loc_songpa} alt="송파구청" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img
              src={pub_lh}
              alt="한국토지주택공사"
              className="object-contain"
            />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={con_kumho} alt="금호건설" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img
              src={eng_dohwa}
              alt="도화엔지니어링"
              className="object-contain"
            />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={etc_becs} alt="벡스" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={loc_seongnam} alt="성남시" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img
              src={pub_hydro}
              alt="한국수력원자력"
              className="object-contain"
            />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={con_hdc} alt="현대산업개발" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={eng_yooshin} alt="유신" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={etc_corel} alt="코렐" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={loc_hwasung} alt="화성시" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img
              src={pub_krclean}
              alt="한국농어촌공사"
              className="object-contain"
            />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={con_taeyoung} alt="태영건설" className="object-contain" />
          </div>
          {/* <div className="flex  justify-center lg:h-[88px]">
            <img src={eng_dmcm} alt="디엠씨엠" className="object-contain" />
          </div> */}
          <div className="text-gray-500">
            <div className="text-[14px] lg:text-[24px] font-semibold ">
              DMCM
            </div>
            <div className="text-[10px] lg:text-[16px]">디엠씨엠</div>
          </div>
          <div className="text-gray-500">
            <div className="text-[12px] lg:text-[20px] font-semibold ">
              영풍건설
            </div>
            {/* <div className="text-[10px] lg:text-[16px]">디엠씨엠</div> */}
          </div>
          {/* <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img
              src={etc_youngpoong}
              alt="영풍건설"
              className="object-contain"
            />
          </div> */}
        </div>
      </div>
      {/* section4. 특허 */}
      <div className="bg-[#f4f4f4] py-10 lg:py-24">
        <div>
          <div>
            <div className="px-[20px] lg:px-72 font-semibold text-[30px] lg:text-[40px]">
              {t("result_s4_title")}
            </div>
            {/* <div className="text-[16px] lg:text-[28px] pt-2 text-gray-500">
              발명 특허 20건, 디자인 특허 2건, 실용실안 1건
            </div> */}
          </div>
          <div className="py-6 lg:py-10 px-[20px] lg:w-[1100px] lg:mx-auto ">
            <Slider {...settings} className="">
              <div>
                <img
                  src={cert19}
                  alt="특허19"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert18}
                  alt="특허18"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert17}
                  alt="특허17"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert16}
                  alt="특허16"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert15}
                  alt="특허15"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert14}
                  alt="특허14"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert13}
                  alt="특허13"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert12}
                  alt="특허12"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert11}
                  alt="특허11"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert10}
                  alt="특허10"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert8}
                  alt="특허8"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert7}
                  alt="특허7"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert6}
                  alt="특허6"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert5}
                  alt="특허5"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert4}
                  alt="특허4"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert3}
                  alt="특허3"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert2}
                  alt="특허2"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert1}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>

              <div>
                <img
                  src={utility1}
                  alt="실용신안1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>

              <div>
                <img
                  src={design1}
                  alt="디자인1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>

              <div>
                <img
                  src={design2}
                  alt="디자인2"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
            </Slider>
          </div>
          <div className="font-normal text-[20px] lg:text-[28px] lg:pt-10 text-center">
            {t("result_s4_patent")}
          </div>
          <div className="text-[14px] lg:text-[16px] text-gray-500 text-center">
            {t("result_s4_patent_sub")}
          </div>
          <div className="py-6 lg:py-10">
            {/* for PC table */}
            <div className="overflow-x-auto hidden lg:block">
              <table className="table-auto lg:w-[1000px]  border-l border-t  mx-auto shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 border-r text-left">
                      {isKorean && "구분"}
                    </th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left lg:w-[180px]">
                      {t("result_s4_patent_t_r1_2")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-left">
                      {" "}
                      {t("result_s4_patent_t_r1_3")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px]">
                  <tr className="border-b bg-white odd:bg-gray-100">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r2_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r2_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r3_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r3_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r4_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r4_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r5_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r5_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r6_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r6_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r7_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r7_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r8_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s4_patent_t_r8_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r9_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s4_patent_t_r9_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r10_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r10_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r11_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r11_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r12_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r12_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r13_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s4_patent_t_r13_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r14_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r14_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r15_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r15_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r16_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r16_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r17_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r17_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r18_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r18_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r19_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r19_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r20_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r20_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r20_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r21_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r21_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r21_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s4_patent_t_r21_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r22_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r22_3")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* for mobile table */}
            <div className="overflow-x-auto px-[20px] lg:hidden">
              <table className="table-auto w-full lg:w-full mx-auto border-l border-t  shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[12px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                      {t("result_s4_patent_t_r1_2")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-left">
                      {" "}
                      {t("result_s4_patent_t_r1_3")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px]">
                  <tr className="border-b bg-white odd:bg-gray-100">
                    <td className="px-2 py-2 lg:p-4 border-r w-1/3">
                      {t("result_s4_patent_t_r2_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r2_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r3_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r3_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r4_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r4_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r5_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r5_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r6_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r6_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r7_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r7_23")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r8_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s4_patent_t_r8_23")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r9_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r9_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r10_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r10_3")}{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r11_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r11_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r12_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r12_3")}{" "}
                    </td>
                  </tr>

                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r13_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r13_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r14_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r14_3")}{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r15_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r15_3")}{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r16_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r16_3")}{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r17_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r17_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r18_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r18_3")}{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r19_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r19_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r20_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r20_3")}{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r21_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r21_3")}{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s4_patent_t_r22_2")}{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s4_patent_t_r22_3")}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 특허출원 */}
          </div>
          <div>
            <div className="font-normal text-[20px] lg:text-[28px] pt-10 text-center">
              {t("result_s4_patentapp")}
            </div>
            <div className="text-[14px] lg:text-[16px] text-gray-500 text-center">
              {t("result_s4_patentapp_sub")}
            </div>
            <div className="py-6 lg:py-10">
              {/* for PC table */}
              <div className="overflow-x-auto hidden lg:block">
                <table className="table-auto w-[500px] lg:w-[1000px]  border-l border-t mx-auto shadow  ">
                  <thead className="border-b">
                    <tr className="bg-[#232976] text-gray-300  font-bold text-[14px] lg:text-[18px] ">
                      <th className="pl-2 lg:pl-4 border-r text-left">
                        {t("result_s4_patentapp_t_r1_1")}
                      </th>
                      <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                        {t("result_s4_patentapp_t_r1_2")}
                      </th>
                      <th className="pl-2 lg:pl-4 border-r text-left">
                        {t("result_s4_patentapp_t_r1_3")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] lg:text-[16px]">
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2020.12.30
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r2_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r2_3")}
                      </td>
                    </tr>
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2020.12.30
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r3_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r3_3")}
                      </td>
                    </tr>
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2020.12.30
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r4_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r4_3")}
                      </td>
                    </tr>
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2021.05.20
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r5_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r5_3")}
                      </td>
                    </tr>
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2021.09.09
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r6_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r6_3")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* for mobile table */}
              <div className="overflow-x-auto px-[20px] lg:hidden">
                <table className="table-auto w-full lg:w-full mx-auto border-l border-t  shadow  ">
                  <thead className="border-b">
                    <tr className="bg-[#232976] text-gray-300 font-bold text-[12px]">
                      <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left w-2/5">
                        {t("result_s4_patentapp_t_r1_2")}
                      </th>
                      <th className="pl-2 lg:pl-4 border-r text-left">
                        {t("result_s4_patentapp_t_r1_3")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] ">
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r2_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r2_3")}
                      </td>
                    </tr>{" "}
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r3_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r3_3")}
                      </td>
                    </tr>{" "}
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r4_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r4_3")}
                      </td>
                    </tr>{" "}
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r5_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r5_3")}
                      </td>
                    </tr>{" "}
                    <tr className="border-b bg-white odd:bg-gray-100 ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        {t("result_s4_patentapp_t_r6_2")}
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        {t("result_s4_patentapp_t_r6_3")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section5. 기타실적 */}
      <div className="py-10 lg:py-24 ">
        <div>
          <div>
            <div className="px-[20px] lg:px-72 font-semibold text-[30px] lg:text-[40px]">
              {t("result_s5_title")}
            </div>
          </div>
          <div className="py-6 lg:py-10 px-[20px] lg:w-[1100px] lg:mx-auto ">
            <Slider {...settings} className=" ">
              <div>
                <img
                  src={inno1}
                  alt="혁신1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>{" "}
              <div>
                <img
                  src={inno2}
                  alt="혁신2"
                  className="object-contain px-2 lg:px-5"
                />
              </div>{" "}
              <div>
                <img
                  src={purchase1}
                  alt="우수제품1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>{" "}
              <div>
                <img
                  src={prize10}
                  alt="수상10"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize10}
                  alt="수상10"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize9}
                  alt="수상9"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize8}
                  alt="수상8"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize7}
                  alt="수상7"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize5}
                  alt="수상5"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize4}
                  alt="수상4"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize3}
                  alt="수상3"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize2}
                  alt="수상2"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={prize1}
                  alt="수상1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={iso1}
                  alt="iso1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={iso2}
                  alt="iso2"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
            </Slider>
          </div>
          <div className="font-normal text-[20px] lg:text-[28px] lg:pt-10 text-center">
            {t("result_s5_subtitle")}
          </div>
          <div className="text-[14px] lg:text-[16px] text-gray-500 text-center">
            {t("result_s5_subtitle_description")}
          </div>
          <div className="py-6 lg:py-10">
            {/* for PC table */}
            <div className="overflow-x-auto hidden  lg:block">
              <table className="table-auto lg:w-[1000px]  border-l border-t  mx-auto shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 border-r text-left">
                      {isKorean && "구분"}
                    </th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                      {t("result_s5_t_r1_2")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-left">
                      {t("result_s5_t_r1_3")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px]">
                  <tr className="border-b bg-white  odd:bg-gray-100 ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_certifi")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r2_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r2_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_certifi")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r3_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r3_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_certifi")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">ISO 9001:2015</td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r4_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_certifi")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      ISO 14001:2015
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r4_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_certifi")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r6_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r6_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_certifi")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {" "}
                      {t("result_s5_t_r7_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r7_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_awards")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r8_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r8_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_awards")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {" "}
                      {t("result_s5_t_r9_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r9_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_awards")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r10_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r10_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_awards")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r11_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r11_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_awards")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r12_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r12_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_awards")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r13_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r13_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_awards")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r14_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r14_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      {t("result_s5_t_awards")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r15_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r15_3")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* for mobile table */}
            <div className="overflow-x-auto  lg:hidden px-[20px]">
              <table className="table-auto w-full lg:w-full mx-auto border-l border-t  shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                      {t("result_s5_t_r1_2")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-left">
                      {t("result_s5_t_r1_3")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px]">
                  <tr className="border-b bg-white  odd:bg-gray-100 ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r2_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r2_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r3_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r3_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">ISO 9001:2015</td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r4_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      ISO 14001:2015
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r4_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r6_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r6_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {" "}
                      {t("result_s5_t_r7_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r7_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r8_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r8_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {" "}
                      {t("result_s5_t_r9_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r9_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r10_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r10_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r11_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r11_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r12_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r12_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r13_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r13_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r14_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {" "}
                      {t("result_s5_t_r14_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white odd:bg-gray-100  ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      {t("result_s5_t_r15_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("result_s5_t_r15_3")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
