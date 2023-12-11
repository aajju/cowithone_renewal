// import thumb_bg from "../assets/img/about/thumb_bg.png";
import thumb1 from "../assets/img/about/thumb1.png";
import thumb2 from "../assets/img/about/thumb2.png";
import thumb3 from "../assets/img/about/thumb3.png";
import thumb4 from "../assets/img/about/thumb4.png";
import bps_thumb1 from "../assets/img/about/bps_thumb1.png";
import bps_thumb2 from "../assets/img/about/bps_thumb2.png";
import bps_thumb3 from "../assets/img/about/bps_thumb3.png";
import sts_thumb1 from "../assets/img/about/sts_thumb1.png";
import sts_thumb2 from "../assets/img/about/sts_thumb2.png";
import sts_thumb3 from "../assets/img/about/sts_thumb3.png";
import psps_thumb1 from "../assets/img/about/psps_thumb1.png";
import psps_thumb2 from "../assets/img/about/psps_thumb2.png";
import psps_thumb3 from "../assets/img/about/psps_thumb3.png";
import etc_thumb1 from "../assets/img/about/etc_thumb1.png";
import etc_thumb2 from "../assets/img/about/etc_thumb2.png";
import hammer from "../assets/img/about/hammer.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRecoilValue } from "recoil";
import { languageState } from "../recoil/languageState"; // Recoil 상태 파일의 경로를 정확하게 지정하세요.
import { useTranslation } from "react-i18next";

function About() {
  const language = useRecoilValue(languageState);
  const isKorean = language === "ko";
  // const isEnglish = language === "en";
  const { t } = useTranslation();
  // 언어에 따른 폰트 크기 설정
  // const fontSizeKorean = {
  //   base: "20px",
  //   md: "34px",
  //   lg: "48px",
  // };

  // const fontSizeEnglish = {
  //   base: "16px", // 영어일 때의 기본 폰트 크기
  //   md: "20px",
  //   lg: "34px",
  // };

  // const fontSize = isKorean ? fontSizeKorean : fontSizeEnglish;

  return (
    <>
      <div className="bg-[#F9FAFB] text-center flex flex-col items-center">
        {/* section1 */}
        <div className="pt-20 font-bold text-[20px] md:text-[34px] lg:text-[52px]">
          {t("about_s1_title1")}
          <br /> {t("about_s1_title2")}
        </div>
        <div className="py-6 lg:py-10 text-[15px] md:text-[20px] lg:text-[26px]">
          {t("about_s1_subtitle1")}
          <br /> {t("about_s1_subtitle2")}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 place-content-center  lg:px-72 gap-4 pb-20 ">
          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border  rounded-xl flex flex-col justify-between p-[10px] lg:p-[20px] shadow-lg ">
            <div className="w-[60px] h-[60px] bg-[#D9D9D933] flex items-center rounded-lg ">
              <LazyLoadImage
                className="object-fill w-[30px]  mx-auto"
                src={thumb1}
                alt="thumb1"
              />
            </div>
            <div>
              <div className="text-[10px] lg:text-[13px] text-left">
                {t("about_s1_d1")}
              </div>
              <div className="text-left text-[15px] lg:text-[20px] font-semibold">
                {t("about_s1_d1_1")}
                <br />
                {t("about_s1_d1_2")}
              </div>
            </div>
          </div>

          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border  rounded-xl flex flex-col justify-between p-[10px] lg:p-[20px] shadow-lg ">
            <div className="w-[60px] h-[60px] bg-[#D9D9D933] flex items-center rounded-lg ">
              <LazyLoadImage
                className="object-fill w-[30px]  mx-auto"
                src={thumb2}
                alt="thumb2"
              />
            </div>
            <div>
              <div className="text-[10px] lg:text-[13px] text-left">
                {t("about_s1_d2")}
              </div>
              <div className="text-left text-[15px] lg:text-[20px] font-semibold">
                {t("about_s1_d2_1")}
                <br />
                {t("about_s1_d2_2")}
              </div>
            </div>
          </div>

          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border  rounded-xl flex flex-col justify-between p-[10px] lg:p-[20px] shadow-lg ">
            <div className="w-[60px] h-[60px] bg-[#D9D9D933] flex items-center rounded-lg ">
              <LazyLoadImage
                className="object-fill w-[30px]  mx-auto"
                src={thumb3}
                alt="thumb3"
              />
            </div>
            <div>
              <div className="text-[10px] lg:text-[13px] text-left">
                {t("about_s1_d3")}
              </div>
              <div className="text-left text-[15px] lg:text-[20px] font-semibold">
                {t("about_s1_d3_1")}
                <br />
                {t("about_s1_d3_2")}
              </div>
            </div>
          </div>

          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border  rounded-xl flex flex-col justify-between p-[10px] lg:p-[20px] shadow-lg ">
            <div className="w-[60px] h-[60px] bg-[#D9D9D933] flex items-center rounded-lg ">
              <LazyLoadImage
                className="object-fill w-[30px]  mx-auto"
                src={thumb4}
                alt="thumb4"
              />
            </div>
            <div>
              <div className="text-[10px] lg:text-[13px] text-left">
                {t("about_s1_d4")}
              </div>
              <div className="text-left text-[15px] lg:text-[20px] font-semibold">
                {t("about_s1_d4_1")}
                <br />
                {t("about_s1_d4_2")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}

      <div className="py-[60px] lg:py-[120px] space-y-8">
        <div className="px-[20px] lg:pl-72">
          <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
            {t("about_s1_d1")}
          </div>
          <div className="font-bold text-[20px] lg:text-[40px] pb-2">
            {t("about_s2_d1")}
          </div>
          <div className="text-[13px] lg:text-[24px] pb-2">
            {t("about_s2_d1_1")}
            <br /> {t("about_s2_d1_2")}
          </div>
        </div>
        <div>
          {/* for PC table */}
          <div className="overflow-x-auto hidden lg:block">
            <table className="table-fixed w-[500px] lg:w-[880px] mx-auto border-l border-t shadow  ">
              <thead className="border-b">
                <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                  <th className="pl-2 lg:pl-4 border-r text-center w-24">
                    {isKorean && t("about_s2_t_r1_1")}
                  </th>
                  <th className="pl-2 lg:pl-4 py-2 lg:py-6 border-red-500 border-t-4 border-l-4 border-r-4 text-center">
                    {t("about_s2_t_r1_2")}
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-center">
                    {t("about_s2_t_r1_3")}
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-center ">
                    {t("about_s2_t_r1_4")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px] text-center">
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {t("about_s2_t_r2_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                    {t("about_s2_t_r2_2")}
                    <br /> {t("about_s2_t_r2_21")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r2_3")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r2_4")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {t("about_s2_t_r3_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                    {t("about_s2_t_r3_21")}
                    <br /> {t("about_s2_t_r3_22")}
                    <br /> {t("about_s2_t_r3_23")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r3_3")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r3_4")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {t("about_s2_t_r4_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                    {t("about_s2_t_r4_2")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r4_3")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r4_4")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {t("about_s2_t_r5_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                    {t("about_s2_t_r5_21")}
                    <br /> {t("about_s2_t_r5_22")}
                    <br /> {t("about_s2_t_r5_23")}
                    <br /> {t("about_s2_t_r5_24")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r5_3")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r5_4")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {" "}
                    {t("about_s2_t_r6_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 border-b-4">
                    {t("about_s2_t_r6_21")}
                    <br /> {t("about_s2_t_r6_22")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r6_31")}
                    <br /> {t("about_s2_t_r6_32")}
                    <br /> {t("about_s2_t_r6_33")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r6_41")}
                    <br /> {t("about_s2_t_r6_42")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* for mobile table */}
          <div className="overflow-x-auto  lg:hidden">
            <table className="table-fixed w-[380px] mx-auto border-l border-t shadow  ">
              <thead className="border-b">
                <tr className="bg-[#232976] text-gray-300 font-bold text-[11px] lg:text-[18px] ">
                  <th className="border-r text-center w-10">
                    {isKorean && t("about_s2_t_r1_1")}
                  </th>
                  <th className="py-2 lg:py-6 border-red-500 border-t-2 border-l-2 border-r-2 text-center">
                    {t("about_s2_t_r1_2")}
                  </th>
                  <th className=" border-r text-center w-[100px]">
                    {t("about_s2_t_r1_3")}
                  </th>
                  <th className=" border-r text-center w-[100px]">
                    {t("about_s2_t_r1_4")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[10px] lg:text-[16px] text-left">
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {isKorean ? (
                      t("about_s2_t_r2_1")
                    ) : (
                      <>
                        Princi
                        <br />
                        ple
                      </>
                    )}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                    {t("about_s2_t_r2_2")}
                    <br /> {t("about_s2_t_r2_21")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r2_3")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r2_4")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {t("about_s2_t_r3_11")}
                    <br />
                    {isKorean && t("about_s2_t_r3_12")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                    {t("about_s2_t_r3_21")}
                    <br /> {t("about_s2_t_r3_22")}
                    <br /> {t("about_s2_t_r3_23")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r3_3")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r3_4")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {t("about_s2_t_r4_11")}
                    <br />
                    {t("about_s2_t_r4_12")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                    {t("about_s2_t_r4_2")}{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r4_3")}{" "}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r4_4")}{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {t("about_s2_t_r5_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                    {t("about_s2_t_r5_21")}
                    <br /> {t("about_s2_t_r5_22")}
                    <br /> {t("about_s2_t_r5_23")}
                    <br /> {t("about_s2_t_r5_24")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r5_3")}{" "}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r5_4")}
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    {t("about_s2_t_r6_1")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 border-b-2">
                    {t("about_s2_t_r6_21")}
                    <br />
                    {t("about_s2_t_r6_22")}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    {t("about_s2_t_r6_31")}
                    <br />
                    {t("about_s2_t_r6_32")}
                    <br />
                    {t("about_s2_t_r6_33")}
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    {t("about_s2_t_r6_41")}
                    <br /> {t("about_s2_t_r6_42")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* section3 */}

      <div className="py-[60px] lg:py-[120px] space-y-8 bg-[#F9FAFB]">
        <div className="px-[20px] lg:pl-72">
          <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
            {t("about_s1_d2")}
          </div>
          <div className="font-bold text-[20px] lg:text-[40px] pb-2">
            {t("about_s3_d1")}
          </div>
          <div className="text-[13px] lg:text-[24px] pb-2">
            {t("about_s3_d1_1")}
            <br /> {t("about_s3_d1_2")}
          </div>
          {/* <div>차트 이미지</div> */}
        </div>
        <div>
          <div>
            {/* for PC table */}
            <div className="overflow-x-auto hidden lg:block">
              <table className="table-fixed w-[500px] lg:w-[880px] mx-auto border-l border-t shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 border-r text-center w-24">
                      {isKorean && t("about_s2_t_r1_1")}
                    </th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6 border-red-500 border-t-4 border-l-4 border-r-4 text-center">
                      {t("about_s2_t_r1_2")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center">
                      {t("about_s3_t_r1_3")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center ">
                      {t("about_s3_t_r1_4")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px] text-center">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s2_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      {t("about_s3_t_r2_21")}
                      <br />
                      {t("about_s3_t_r2_22")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s3_t_r2_3")}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      {t("about_s3_t_r2_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s3_t_r3_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      O
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">X </td>
                    <td className="px-2 lg:p-4 py-2  border-r">X</td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s2_t_r5_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 text-left">
                      {t("about_s3_t_r4_21")}
                      <br /> {t("about_s3_t_r4_22")}
                      <br /> {t("about_s3_t_r4_23")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s3_t_r4_3")}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      {t("about_s3_t_r4_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s2_t_r6_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 border-b-4 text-left">
                      {t("about_s3_t_r5_21")}
                      <br /> {t("about_s3_t_r5_22")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r text-left">
                      {t("about_s3_t_r5_21")}
                      <br /> {t("about_s3_t_r5_22")}
                      <br /> {t("about_s3_t_r5_33")}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r text-left">
                      {t("about_s3_t_r5_41")}
                      <br /> {t("about_s3_t_r5_42")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* for mobile table */}
            <div className="overflow-x-auto  lg:hidden">
              <table className="table-fixed w-[380px] mx-auto border-l border-t shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[11px] lg:text-[18px] ">
                    <th className="border-r text-center w-10">
                      {isKorean && "구분"}
                    </th>
                    <th className="py-2 lg:py-6 border-red-500 border-t-2 border-l-2 border-r-2 text-center">
                      {t("about_s2_t_r1_2")}
                    </th>
                    <th className=" border-r text-center w-[110px]">
                      {t("about_s3_t_r1_3")}
                    </th>
                    <th className=" border-r text-center w-[110px]">
                      {t("about_s3_t_r1_4")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[10px] lg:text-[16px] text-left">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {isKorean ? (
                        t("about_s2_t_r2_1")
                      ) : (
                        <>
                          Princi
                          <br />
                          ple
                        </>
                      )}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      {t("about_s3_t_r2_21")}
                      <br />
                      {t("about_s3_t_r2_22")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s3_t_r2_3")}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      {t("about_s3_t_r2_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      {isKorean ? (
                        <>
                          모니
                          <br />
                          터링
                        </>
                      ) : (
                        <>
                          Monit
                          <br />
                          oring
                        </>
                      )}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      O
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">X </td>
                    <td className="px-2 lg:p-4 py-2  border-r">X </td>
                  </tr>

                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s2_t_r5_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      {t("about_s3_t_r4_21")}
                      <br /> {t("about_s3_t_r4_22")}
                      <br /> {t("about_s3_t_r4_23")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s3_t_r4_3")}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      {t("about_s3_t_r4_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s2_t_r6_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 border-b-2">
                      {t("about_s3_t_r5_21")}
                      <br /> {t("about_s3_t_r5_22")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s3_t_r5_21")}
                      <br /> {t("about_s3_t_r5_22")}
                      <br /> {t("about_s3_t_r5_33")}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      {t("about_s3_t_r5_41")}
                      <br /> {t("about_s3_t_r5_42")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="px-[20px] lg:pl-72">
          {/* <div className="font-normal text-[20px] lg:text-[28px] lg:pt-10 ">
            유지비용 절감
          </div> */}
          <div className="font-semibold text-[18px] lg:text-[28px]  lg:pt-12 lg:pb-8 pb-4">
            {t("about_s3_d2_1")}
            &rarr; {t("about_s3_d2_2")}
          </div>
          <div className=" flex flex-col space-y-12 lg:pl-14  ">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:mb-10">
              <div className="w-[180px] h-[180px]">
                <LazyLoadImage
                  className="object-fill"
                  src={bps_thumb1}
                  alt="bps_thumb1"
                />
              </div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1  lg:space-y-4 pt-10 lg:pt-0">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  {t("about_s3_d3")}
                </div>
                <ul className="text-[12px] lg:text-[24px]">
                  <li>{t("about_s3_d3_1")}</li>
                  <li> {t("about_s3_d3_2")}</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4 mb-10">
              <div className="w-[180px] h-[180px]">
                <LazyLoadImage
                  className="object-fill"
                  src={bps_thumb2}
                  alt="bps_thumb2"
                />
              </div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  {t("about_s3_d4")}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  {t("about_s3_d4_1")}
                  <br /> {t("about_s3_d4_2")}
                </div>
                {/* <div className="text-[#232976] font-semibold lg:text-[20px] text-[12px] ">
                  CASE STUDY (송산그린시티 택지개발 중 관파손 예방 사례)
                </div> */}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4 mb-10">
              <div className="w-[180px] h-[180px]">
                <LazyLoadImage
                  className="object-fill"
                  src={bps_thumb3}
                  alt="bps_thumb3"
                />
              </div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  {t("about_s3_d5")}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  {t("about_s3_d5_1")}
                  <br /> {t("about_s3_d5_2")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section4 */}
      <div className="py-[60px] lg:py-[120px] space-y-8">
        <div className="px-[20px] lg:pl-72">
          <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
            {t("about_s1_d3")}
          </div>
          <div className="font-bold text-[20px] lg:text-[40px] pb-2">
            {t("about_s4_d1")}
          </div>
          <div className="text-[13px] lg:text-[24px] pb-2">
            {t("about_s4_d1_1")}
          </div>
        </div>
        <div>
          <div>
            {/* for PC table */}
            <div className="overflow-x-auto hidden lg:block">
              <table className="table-fixed w-[500px] lg:w-[880px] mx-auto border-l border-t shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 border-r text-center w-24">
                      {isKorean && t("about_s2_t_r1_1")}
                    </th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6 border-red-500 border-t-4 border-l-4 border-r-4 text-center">
                      {t("about_s2_t_r1_2")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center">
                      {t("about_s2_t_r1_4")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px] text-center">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s2_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      {t("about_s4_t_r2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s2_t_r2_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s2_t_r4_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      {t("about_s2_t_r4_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s2_t_r4_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r5_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 ">
                      {t("about_s2_t_r5_21")}
                      <br /> {t("about_s3_t_r4_21")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s3_t_r4_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r6_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 border-b-4 ">
                      {t("about_s2_t_r5_21")}
                      <br /> {t("about_s3_t_r5_22")}
                    </td>

                    <td className="px-2 lg:p-4 py-2  border-r ">
                      {t("about_s2_t_r5_21")}
                      <br /> {t("about_s2_t_r6_41")}
                      <br />
                      {t("about_s4_t_r5_33")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* for mobile table */}
            <div className="overflow-x-auto  lg:hidden">
              <table className="table-fixed w-[350px] mx-auto border-l border-t shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[11px] lg:text-[18px] ">
                    <th className="border-r text-center w-10">
                      {isKorean && "구분"}
                    </th>
                    <th className="py-2 lg:py-6 border-red-500 border-t-2 border-l-2 border-r-2 text-center">
                      {t("about_s2_t_r1_2")}
                    </th>
                    <th className=" border-r text-center w-[130px]">
                      {t("about_s2_t_r1_4")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[10px] lg:text-[16px] text-left">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {isKorean ? (
                        t("about_s2_t_r2_1")
                      ) : (
                        <>
                          Princi
                          <br />
                          ple
                        </>
                      )}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 text-center">
                      {t("about_s4_t_r21")}
                      <br />
                      {t("about_s4_t_r22")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s2_t_r2_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      {t("about_s2_t_r4_11")}
                      <br />
                      {t("about_s2_t_r4_12")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      {t("about_s2_t_r4_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s2_t_r4_4")}
                    </td>
                  </tr>

                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r6_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      {t("about_s2_t_r5_21")}
                      <br /> {t("about_s3_t_r4_21")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s3_t_r4_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r6_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 border-b-2">
                      {t("about_s3_t_r5_21")}
                      <br /> {t("about_s2_t_r6_33")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s2_t_r6_41")}
                      <br /> {t("about_s2_t_r6_42")}
                      <br /> {t("about_s4_t_r5_33")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="px-[20px] lg:pl-72">
          <div className="font-semibold text-[18px] lg:text-[28px]  lg:pt-12 lg:pb-8 pb-4">
            {t("about_s3_d2")}
          </div>
          <div>
            <div className=" flex flex-col space-y-12 lg:pl-14  ">
              <div className="flex flex-col lg:flex-row items-center space-y-4">
                <div className="w-[180px] h-[180px]">
                  <LazyLoadImage
                    className="object-fill"
                    src={sts_thumb1}
                    alt="sts_thumb1"
                  />
                </div>
                <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                  <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                    {t("about_s4_d3")}
                  </div>
                  <div className="text-[12px] lg:text-[24px]">
                    {t("about_s4_d3_1")}
                    <br /> {t("about_s4_d3_2")}
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center space-y-4">
                <div className="w-[180px] h-[180px]">
                  <LazyLoadImage
                    className="object-fill"
                    src={sts_thumb2}
                    alt="sts_thumb2"
                  />
                </div>
                <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                  <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                    {t("about_s4_d4")}
                  </div>
                  <div className="text-[12px] lg:text-[24px]">
                    {t("about_s4_d4_1")}
                    <br />
                    {t("about_s4_d4_2")}
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center space-y-4 mb-10">
                <div className="w-[180px] h-[180px]">
                  <LazyLoadImage
                    className="object-fill"
                    src={sts_thumb3}
                    alt="sts_thumb3"
                  />
                </div>
                <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                  <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                    {t("about_s4_d5")}
                  </div>
                  <div className="text-[12px] lg:text-[24px]">
                    {t("about_s4_d5_1")}
                    <br />
                    {t("about_s4_d5_2")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section5 */}
      <div className="py-[60px] lg:py-[120px] space-y-8 bg-[#F9FAFB]">
        <div className="px-[20px] lg:pl-72 ">
          <div>
            <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
              {t("about_s1_d4")}
            </div>
            <div className="font-bold text-[20px] lg:text-[40px] pb-2">
              {t("about_s5_d1")}
            </div>
            <div className="text-[13px] lg:text-[24px] pb-2">
              {t("about_s5_d1_1")}
            </div>
          </div>
          <div className="text-[18px] lg:text-[30px]">
            {isKorean ? (
              <>
                누수 확인은 <strong>빠르게,</strong>
                <br /> 누수 인식은 <strong>완벽하게,</strong>
                <br /> 누수 위치는 <strong>정확하게,</strong>
              </>
            ) : (
              <>
                <strong>Rapid </strong>Leak Detection
                <br /> <strong>Precise </strong>Leak Identification
                <br /> <strong>Accurate </strong>Leak Location
              </>
            )}
          </div>
        </div>
        <div>
          <div>
            {/* for PC table */}
            <div className="overflow-x-auto hidden lg:block">
              <table className="table-fixed w-[500px] lg:w-[880px] mx-auto border-l border-t shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 border-r text-center w-24">
                      {isKorean && t("about_s2_t_r1_1")}
                    </th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6 border-red-500 border-t-4 border-l-4 border-r-4 text-center">
                      {t("about_s2_t_r1_2")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center">
                      {t("about_s5_t_r1_3")}
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center ">
                      {t("about_s5_t_r1_4")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px] text-center">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r2_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      {t("about_s5_t_r2_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s5_t_r2_3")}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      {t("about_s5_t_r2_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s5_t_r3_11")}
                      <br /> {t("about_s5_t_r3_12")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      100%
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      50%{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s5_t_r3_11")}
                      <br /> {t("about_s5_t_r4_12")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      {t("about_s5_t_r4_2")}
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s5_t_r4_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {t("about_s5_t_r5_11")}
                      <br /> {t("about_s5_t_r3_12")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      {t("about_s5_t_r5_2")}
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s5_t_r5_31")}
                      <br /> &#10141; &nbsp;
                      {t("about_s5_t_r5_32")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r5_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 text-left">
                      {t("about_s5_t_r6_21")}
                      <br /> {t("about_s5_t_r6_22")}
                      <br /> {t("about_s5_t_r6_23")}
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s5_t_r6_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r6_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 border-b-4 text-left">
                      {t("about_s2_t_r6_33")}
                    </td>
                    <td
                      colSpan="2"
                      className="px-2 py-2 lg:p-4 border-r text-left"
                    >
                      {t("about_s5_t_r7_31")}
                      <br /> {t("about_s5_t_r7_32")}
                      <br /> {t("about_s5_t_r7_33")}
                      <br /> {t("about_s5_t_r7_34")}
                      <br /> {t("about_s5_t_r7_35")}
                      <br /> {t("about_s5_t_r7_36")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* for mobile table */}
            <div className="overflow-x-auto  lg:hidden">
              <table className="table-fixed w-[400px] mx-auto border-l border-t shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[11px] lg:text-[18px] ">
                    <th className="border-r text-center w-12">
                      {" "}
                      {isKorean && "구분"}
                    </th>
                    <th className="py-2 lg:py-6 border-red-500 border-t-2 border-l-2 border-r-2 text-center">
                      {t("about_s2_t_r1_2")}
                    </th>
                    <th className=" border-r text-center w-[110px]">
                      {t("about_s5_t_r1_3")}
                    </th>
                    <th className=" border-r text-center w-[110px]">
                      {t("about_s5_t_r1_4")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[10px] lg:text-[16px] text-left">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {isKorean ? (
                        t("about_s2_t_r2_1")
                      ) : (
                        <>
                          Princi
                          <br />
                          ple
                        </>
                      )}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 text-center">
                      {t("about_s5_t_r2_2")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s5_t_r2_3")}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      {t("about_s5_t_r2_4")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      {t("about_s5_t_r3_11")}
                      <br /> {t("about_s5_t_r3_12")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      100%
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      50%
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      {t("about_s5_t_r3_11")}
                      <br />
                      {t("about_s5_t_r4_12")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      {t("about_s5_t_r4_2")}
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s5_t_r4_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      {t("about_s5_t_r5_11")}
                      <br />
                      {t("about_s5_t_r3_12")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      {t("about_s5_t_r5_2")}
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s5_t_r5_31")}
                      <br /> ➝ {t("about_s5_t_r5_32")}
                    </td>
                  </tr>

                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r5_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      {t("about_s5_t_r6_21")}
                      <br /> {t("about_s5_t_r6_22")}
                      <br /> {t("about_s5_t_r6_23")}
                    </td>
                    <td
                      colSpan="2"
                      className="px-2 py-2 lg:p-4 border-r text-center"
                    >
                      {t("about_s5_t_r6_3")}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      {" "}
                      {t("about_s2_t_r6_1")}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 border-b-2">
                      {t("about_s2_t_r6_33")}
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      {t("about_s5_t_r7_31")}
                      <br /> {t("about_s5_t_r7_32")}
                      <br /> {t("about_s5_t_r7_33")}
                      <br /> {t("about_s5_t_r7_34")}
                      <br /> {t("about_s5_t_r7_35")}
                      <br /> {t("about_s5_t_r7_36")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="px-[20px] lg:pl-72">
          <div className="font-semibold text-[18px] lg:text-[28px]  lg:pt-12 lg:pb-8 pb-4">
            {t("about_s5_d2")}
          </div>
          <div className=" flex flex-col space-y-12 lg:pl-14  ">
            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="w-[180px] h-[180px]">
                <LazyLoadImage
                  className="object-fill"
                  src={psps_thumb1}
                  alt="psps_thumb1"
                />
              </div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  {t("about_s5_d3")}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  {t("about_s5_d3_1")}
                  <h3 className="text-gray-500 text-[10px] lg:text-[20px]">
                    {t("about_s5_d3_2")}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4 ">
              <div className="w-[180px] h-[180px]">
                <LazyLoadImage
                  className="object-fill"
                  src={psps_thumb2}
                  alt="psps_thumb2"
                />
              </div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  {t("about_s5_d4")}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  {t("about_s5_d4_1")}
                  <h3 className="text-gray-500 text-[10px] lg:text-[20px]">
                    {t("about_s5_d4_2")}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4 mb-10">
              <div className="w-[180px] h-[180px]">
                <LazyLoadImage
                  className="object-fill"
                  src={psps_thumb3}
                  alt="psps_thumb3"
                />
              </div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  {t("about_s5_d5")}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  {t("about_s5_d5_1")}
                  <h3 className="text-gray-500 text-[10px] lg:text-[20px]">
                    {t("about_s5_d5_2")}
                    <br />
                    {t("about_s5_d5_3")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section6 */}
      <div className="py-[60px] lg:py-[120px] space-y-8">
        <div className="px-[20px] lg:pl-72">
          <div className="font-bold text-[20px] lg:text-[40px] pb-2">
            {t("about_s6_title")}
          </div>
          <div className="text-[13px] lg:text-[24px] pb-2">
            {t("about_s6_subtitle1")}
            <br /> {t("about_s6_subtitle2")}
          </div>

          <div className=" flex flex-col space-y-12 lg:pl-14  lg:pt-12 ">
            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="w-[180px] h-[180px]">
                <LazyLoadImage
                  className="object-fill"
                  src={etc_thumb1}
                  alt="etc_thumb1"
                />
              </div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  {t("about_s6_d1")}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  {t("about_s6_d1_1")}
                </div>
                <div className="text-[10px] lg:text-[18px]">
                  {t("about_s6_d1_2")}
                </div>
                <div className="flex">
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    {t("about_s6_d1_tag1")}
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    {t("about_s6_d1_tag2")}
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    {t("about_s6_d1_tag3")}
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    {t("about_s6_d1_tag4")}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="w-[180px] h-[180px]">
                <LazyLoadImage
                  className="object-fill"
                  src={etc_thumb2}
                  alt="etc_thumb2"
                />
              </div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  {t("about_s6_d2")}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  {t("about_s6_d2_1")}
                </div>

                <div className="flex">
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    {t("about_s6_d2_tag1")}
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    {t("about_s6_d2_tag2")}
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    {t("about_s6_d2_tag3")}
                  </div>
                  {isKorean && (
                    <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                      고압가스안전관리법
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section7 */}
      {isKorean && (
        <div className="bg-[#232976] text-white text-center py-10 lg:py-16 flex flex-col items-center">
          <div className="text-[20px] lg:text-[32px] font-semibold">
            코위드원은&nbsp;
            <br className="lg:hidden" />
            지하시설물 관련 법령을 모두 만족합니다
          </div>
          <div className="pt-2 text-[#FFFFFF99] pb-5 text-[16px] lg:text-[24px]">
            지하시설물 유지관리의 중요성과 함께&nbsp;
            <br className="lg:hidden" /> 다양한 법률들이 신설/개정 되고
            있습니다.
          </div>
          <div className="pt-2 lg:pt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 ">
            <div className="bg-white flex flex-col text-black items-center py-4 rounded-lg space-y-2 w-44 lg:w-60">
              <LazyLoadImage
                className="object-fill w-[34px] lg:w-[40px] "
                src={hammer}
                alt="법망치"
              />
              <div className="text-[20px] lg:text-[26px] font-semibold">
                스마트 도시법
              </div>
              <div className="text-[14px] lg:text-[20px] font-light">
                18.03.27 신설
              </div>
            </div>
            <div className="bg-white flex flex-col text-black items-center py-4 rounded-lg space-y-2 w-44 lg:w-60">
              <LazyLoadImage
                className="object-fill w-[40px] "
                src={hammer}
                alt="법망치"
              />
              <div className="text-[20px] lg:text-[26px] font-semibold">
                상수도 설계기준
              </div>
              <div className="text-[14px] lg:text-[20px] font-light">
                19.04.10 신설
              </div>
            </div>
            <div className="bg-white flex flex-col text-black items-center py-4  rounded-lg space-y-2 w-44 lg:w-60">
              <LazyLoadImage
                className="object-fill w-[40px] "
                src={hammer}
                alt="법망치"
              />
              <div className="text-[20px] lg:text-[26px] font-semibold">
                기반시설 관리법
              </div>
              <div className="text-[14px] lg:text-[20px] font-light">
                20.04.07 신설
              </div>
            </div>
            <div className="bg-white flex flex-col text-black items-center py-4 rounded-lg space-y-2 w-44 lg:w-60">
              <LazyLoadImage
                className="object-fill w-[40px] "
                src={hammer}
                alt="법망치"
              />
              <div className="text-[20px] lg:text-[26px] font-semibold">
                지하안전법
              </div>
              <div className="text-[14px] lg:text-[20px] font-light">
                21.07.27 개정
              </div>
            </div>
          </div>
        </div>
      )}

      {/* section8 */}
      <div className="py-[60px] lg:py-[120px] space-y-8">
        <div className="">
          <div className="px-[20px] lg:pl-72 font-bold text-[20px] lg:text-[40px] pb-2">
            {t("about_s8_title")}
          </div>
          <div className="px-[20px] lg:pl-72 text-[13px] lg:text-[24px] pb-2">
            {t("about_s8_subtitle1")}
            <br /> {t("about_s8_subtitle2")}
          </div>
          <div className="px-[20px] lg:pl-72 pt-8 text-[18px] lg:text-[30px] pb-2 font-bold ">
            {isKorean ? (
              <>
                저희 코위드원은 선제적 관리를 넘어
                <br /> <strong className="text-red-600">실시간 모니터링</strong>
                으로
                <br /> 지하시설물의 관리를 책임지겠습니다.
              </>
            ) : (
              <>
                COWITHONE takes responsibility for pipes management
                <br /> with &nbsp;
                <strong className="text-red-600">real-time monitoring</strong>,
                <br /> going beyond proactive management.
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
