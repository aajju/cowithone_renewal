import bg1 from "../assets/img/solution/Rectangle 70.png";
import undercityCapture from "../assets/img/solution/undercity.png";
import bps from "../assets/img/solution/bps.png";
import sts from "../assets/img/solution/sts.png";
import psps from "../assets/img/solution/psps.png";
import rm5000 from "../assets/img/solution/rm5000.png";
import rm4000 from "../assets/img/solution/rm4000.png";
import presheet from "../assets/img/solution/presheet.png";
import sinkball from "../assets/img/solution/sinkball.png";
import smartsheet from "../assets/img/solution/smartsheet.png";
import sensor from "../assets/img/solution/sensor.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRecoilValue } from "recoil";
import { languageState } from "../recoil/languageState"; // Recoil 상태 파일의 경로를 정확하게 지정하세요.
import { useTranslation } from "react-i18next";

function Solution() {
  const language = useRecoilValue(languageState);
  const isKorean = language === "ko";
  const isEnglish = language === "en";
  const { t, i18n } = useTranslation();

  // 언어에 따른 폰트 크기 설정
  const fontSizeKorean = {
    base: "20px",
    md: "34px",
    lg: "52px",
  };

  const fontSizeEnglish = {
    base: "16px", // 영어일 때의 기본 폰트 크기
    md: "20px",
    lg: "34px",
  };

  const fontSize = i18n.language === "ko" ? fontSizeKorean : fontSizeEnglish;

  return (
    <div>
      {/* section1. 메인 */}
      <div className="relative ">
        <LazyLoadImage className="w-full" src={bg1} alt="Cowithone" />
        <div>
          <h1
            className={`absolute top-[30px] md:top-[47px] lg:top-[68px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-bold text-[${fontSize.base}] md:text-[${fontSize.md}] lg:text-[${fontSize.lg}]`}
          >
            {t("solution_s1_title")}
          </h1>
          <h3
            className={`absolute top-[68px] md:top-[96px] lg:top-[140px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-[12px] md:text-[16px] lg:text-[22px] ${
              isKorean ? "ko-style" : "en-style"
            }`}
          >
            {isKorean ? (
              <>
                <color className="font-semibold text-rose-500">실시간</color>
                으로&nbsp;
                <color className="font-semibold text-rose-500">
                  지하시설물
                </color>
                을&nbsp;
                <color className="font-semibold text-rose-500">
                  모니터링
                </color>{" "}
                할 수 있어 더욱 안전합니다
              </>
            ) : (
              <color className="font-semibold text-gray-500">
                It's safer to monitor underground pipes in real time
              </color>
            )}
          </h3>
          <LazyLoadImage
            className="absolute top-[100px] md:top-[160px] lg:top-[200px] left-1/2 -translate-x-1/2  w-8/12 "
            src={undercityCapture}
            alt="Cowithone"
          />
        </div>
      </div>
      {/* section2 */}
      <div className="h-[288px] lg:h-[488px] bg-[#F9FAFB] flex">
        <p className="pt-10 text-center text-[15px] md:text-[26px] m-auto lg:text-[32px] font-bold">
          {isKorean ? (
            <>
              지하시설물은 땅 속에 있어 관리가 어려워,
              <br /> 유지비용이 많이 들고 국민의 안전을 위협합니다
            </>
          ) : (
            <>
              Underground pipes are difficult to manage <br />
              because they are underground, <br />
              which is expensive to maintain and
              <br />
              threatens the safety of the people
            </>
          )}
        </p>
      </div>
      {/* section3 */}
      <div className="py-[60px] lg:py-[120px] space-y-20 lg:space-y-36 ">
        <div className="space-y-2 lg:space-y-4 ">
          <div className="px-[20px] lg:pl-72">
            <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
              {t("solution_s3_bps_title")}
            </div>
            <div className="font-bold text-[20px] lg:text-[40px] pb-2">
              {t("solution_s3_bps_subtitle")}
            </div>
            <div className="text-[13px] lg:text-[24px] pb-2">
              <ul className="list-none">
                <li>{t("solution_s3_bps_description1")}</li>
                <li> {t("solution_s3_bps_description2")}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {/* <MyImage
              image={<LazyLoadImage src={bps} alt="bps" />}
              className="w-full lg:w-4/6  mx-auto"
            /> */}
            <LazyLoadImage
              className="w-full lg:w-4/6  mx-auto"
              src={bps}
              alt="bps"
            />
            <div className="mx-auto text-center text-[13px] lg:text-[15px] text-[#454545]">
              {t("solution_s3_bps_components")}
            </div>
          </div>
        </div>
        <div className="space-y-2 lg:space-y-4 ">
          <div className="px-[20px] lg:pl-72 ">
            <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
              {t("solution_s3_sts_title")}
            </div>
            <div className="font-bold text-[20px] lg:text-[40px] pb-2">
              {t("solution_s3_sts_subtitle")}
            </div>
            <div className="text-[13px] lg:text-[24px] pb-2">
              <ul className="list-none">
                <li> {t("solution_s3_sts_description")}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <LazyLoadImage
              className="w-full lg:w-4/6  mx-auto"
              src={sts}
              alt="sts"
            />
            <div className="mx-auto text-center text-[13px] lg:text-[15px] text-[#454545]">
              {t("solution_s3_bps_components")},
              <strong className="text-[#4850c9]">
                &nbsp; {t("solution_s3_sts_components")}
              </strong>
            </div>
          </div>
        </div>
        <div className="space-y-2 lg:space-y-4 ">
          <div className="px-[20px] lg:pl-72">
            <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
              {t("solution_s3_psps_title")}
            </div>
            <div className="font-bold text-[20px] lg:text-[40px] pb-2">
              {t("solution_s3_psps_subtitle")}
            </div>
            <div className="text-[13px] lg:text-[24px] pb-2">
              <ul className="list-none">
                <li> {t("solution_s3_psps_description1")}</li>
                <li> {t("solution_s3_psps_description2")}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <LazyLoadImage
              className="w-full lg:w-4/6  mx-auto"
              src={psps}
              alt="psps"
            />
            <div className="mx-auto text-center text-[13px] lg:text-[15px] text-[#454545]">
              {t("solution_s3_bps_components")},
              <strong className="text-[#4850c9]">
                &nbsp; {t("solution_s3_psps_components")}
              </strong>
            </div>
          </div>
        </div>
      </div>
      {/* section4 */}
      <div className="h-[1100px] lg:h-[1600px] bg-[#F9FAFB]  lg:block  px-[20px] ">
        <div className="pt-12 lg:pt-24">
          <h1 className="font-bold text-[22px] lg:text-[32px] text-center">
            {t("solution_s4_title")}
          </h1>
        </div>
        <div className="pt-[16px]">
          <h2 className="font-semibold text-[14px] lg:text-[24px] text-center">
            {t("solution_s4_subtitle")}
          </h2>
        </div>
        <div className="pt-[40px] flex ">
          <button className="text-[16px] mx-auto lg:text-[20px] font-medium py-3  px-4 border  border-transparent rounded-md shadow-sm   text-white bg-[#232976] hover:bg-[#0713c0] ">
            <a href="https://www.salesclue.io/share/file/f6f2e7fa5fd2c664">
              {t("solution_s4_btn")}
            </a>
          </button>
        </div>
        <div className="py-14">
          <div className="overflow-x-auto">
            <table className="table-auto w-[400px] lg:w-[880px] mx-auto border-l border-t">
              <thead className="border-b">
                <tr className="bg-gray-300 font-bold text-[16px] lg:text-[20px] ">
                  <th className="text-center  border-r"></th>
                  <th className="text-center  py-2 lg:py-6  border-r">BPS</th>
                  <th className="text-center   border-r">STS</th>
                  <th className="text-center   border-r">PSPS</th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px] bg-white">
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    {t("solution_s4_table_summary")}
                  </td>
                  <td className="py-2 lg:p-4 border-r text-center">
                    {t("solution_s4_table_prevent")}
                  </td>
                  <td className="py-2 lg:p-4 border-r text-center">
                    {t("solution_s4_table_prevent")}
                    ,
                    <br />
                    {t("solution_s4_table_detect_sinkhall")}
                  </td>
                  <td className="lg:p-4 py-2 text-center border-r">
                    {t("solution_s4_table_prevent")}
                    ,
                    <br />
                    {t("solution_s4_table_prevent_sinkhall")}
                    ,
                    <br />
                    {t("solution_s4_table_detect_water")}
                  </td>
                </tr>
                <tr className="">
                  <td className="font-medium border-r pl-2 pt-2 lg:pl-4 lg:pt-4 align-top">
                    {t("solution_s4_table_components")}
                  </td>
                  <td className="py-2 lg:p-4 border-b text-center border-r  ">
                    {t("solution_s4_table_detector")}
                  </td>
                  <td className="lg:p-4 py-2  border-b border-r text-center  ">
                    {t("solution_s4_table_detector")}
                  </td>
                  <td className="lg:p-4 py-2  border-b border-r text-center  ">
                    {t("solution_s4_table_detector")}
                  </td>
                </tr>
                <tr className="">
                  <td className="p-4 border-r"></td>
                  <td className="py-2 lg:p-4 border-b border-r  text-center">
                    {t("solution_s4_table_preventsheet")}
                  </td>
                  <td className="py-2 lg:p-4 border-b border-r  text-center">
                    {t("solution_s4_table_preventsheet")}
                  </td>
                  <td className="py-2 lg:p-4 border-b border-r  text-center">
                    {t("solution_s4_table_preventsheet")}
                  </td>
                </tr>
                <tr className="">
                  <td className="p-4 border-r"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="py-2 lg:p-4  border-b border-r  text-center text-[#232976] font-medium">
                    {t("solution_s4_table_sinkball")}
                  </td>
                  <td className="p-4 border-b border-r"></td>
                </tr>
                <tr className="">
                  <td className="p-4 border-r"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="py-2 lg:p-4  border-b border-r  text-center text-[#232976] font-medium">
                    {t("solution_s4_table_smartsheet")}
                  </td>
                </tr>
                <tr className="">
                  <td className="p-4 border-r border-b"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="py-2 lg:p-4  border-b border-r  text-center text-[#232976] font-medium">
                    {t("solution_s4_table_watersensor")}
                  </td>
                </tr>
                <tr className="border-b ">
                  <td className="font-medium border-r pl-2 py-2 lg:pl-4 lg:pt-4 align-top">
                    {t("solution_s4_table_corrosion")}
                    <br />
                    {t("solution_s4_table_cathodic")}
                  </td>
                  <td className="  text-center"></td>
                  <td className="text-center py-2 lg:p-4 ">
                    {t("solution_s4_table_corrosion_description1")}
                    <br /> {t("solution_s4_table_corrosion_description2")}
                  </td>
                  <td className="text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    {t("solution_s4_table_waterpipe")}
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  text-center border-r">✔</td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    {t("solution_s4_table_sewagepipe")}
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  text-center border-r">✔</td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    {t("solution_s4_table_stormdrain")}
                  </td>
                  <td className="py-2 lg:p-4 border-r text-center">✔</td>
                  <td className="py-2 lg:p-4 border-r text-center">✔</td>
                  <td className="py-2 lg:p-4 text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    {t("solution_s4_table_wastewaterpipe")}
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    {t("solution_s4_table_gaspipe")}
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">
                    ✔<br />
                    <h6 className="text-[12px] lg:text-[14px] pt-2">
                      (+ {t("solution_s4_table_corrosion")})
                    </h6>
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center"></td>
                  <td className="py-2 lg:p-4  text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    {t("solution_s4_table_heatingpipe")}
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  text-center border-r">✔</td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    {t("solution_s4_table_oilpipeline")}
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  text-center border-r">✔</td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4  align-top border-r font-medium">
                    {t("solution_s4_table_powerpipe")}
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center"></td>
                  <td className="py-2 lg:p-4  text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4  align-top border-r font-medium">
                    {t("solution_s4_table_etc")}
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center"></td>
                  <td className="py-2 lg:p-4  text-center border-r"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* section5 구성품 */}
      <div className="py-14 px-[20px] lg:py-[100px] lg:w-[1200px] mx-auto">
        <div className="text-center text-[#232976] font-semibold text-[20px] lg:text-[24px] ">
          {t("solution_s5_title")}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10  pt-16">
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <LazyLoadImage
                src={rm5000}
                alt="Cowithone"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              {t("solution_s5_detector")}
              (RM-5000)
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #BPS #STS #PSPS
            </div>
            <div className=" h-[80px] px-4 pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              {t("solution_s5_detector_description1")}
              <br className="hidden lg:block" />
              {t("solution_s5_detector_description2")}
            </div>
          </div>
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <LazyLoadImage
                src={rm4000}
                alt="Cowithone"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              {t("solution_s5_detector")}
              (RM-4000)
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #BPS #STS #PSPS
            </div>
            <div className=" h-[80px]  px-4  pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              {t("solution_s5_detector_description3")}
              <br className="hidden lg:block" />
              {t("solution_s5_detector_description4")}
            </div>
          </div>
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <LazyLoadImage
                src={presheet}
                alt="스마트예방시트"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              {t("solution_s4_table_preventsheet")}
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #BPS #STS #PSPS
            </div>
            <div className=" h-[80px] px-4  pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              {t("solution_s5_preventsheet_description1")}
              <br className="hidden lg:block" />{" "}
              {t("solution_s5_preventsheet_description2")}
            </div>
          </div>
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <LazyLoadImage
                src={sinkball}
                alt="싱크볼"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              {t("solution_s4_table_sinkball")}
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #STS
            </div>
            <div className=" h-[80px] px-4  pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              {t("solution_s5_sinkball_description1")}
              <br className="hidden lg:block" />{" "}
              {t("solution_s5_sinkball_description2")}
            </div>
          </div>
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <LazyLoadImage
                src={smartsheet}
                alt="스마트시트"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              {t("solution_s4_table_smartsheet")}
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #PSPS
            </div>
            <div className=" h-[80px] px-4  pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              {t("solution_s5_smartsheet_description1")}
              <br className="hidden lg:block" />{" "}
              {t("solution_s5_smartsheet_description2")}
            </div>
          </div>{" "}
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <LazyLoadImage
                src={sensor}
                alt="누수감지센서"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              {t("solution_s4_table_watersensor")}
              {isEnglish ? <br /> : " "}
              {t("solution_s4_table_cover")}
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #PSPS
            </div>
            <div className=" h-[80px] px-4 pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              {t("solution_s5_leaksensor_description")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Solution;
