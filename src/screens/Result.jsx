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
import eng_dmcm from "../assets/img/partner/eng_dmcm.png";
import eng_dohwa from "../assets/img/partner/eng_dohwa.png";
import eng_yooshin from "../assets/img/partner/eng_yooshin.png";
import etc_becs from "../assets/img/partner/etc_becs.png";
import etc_corel from "../assets/img/partner/etc_corel.png";
import etc_youngpoong from "../assets/img/partner/etc_youngpoong.png";
import pub_lh from "../assets/img/partner/pub_lh.png";
import pub_hydro from "../assets/img/partner/pub_hydro.png";
import pub_krclean from "../assets/img/partner/pub_krclean.png";
import cert_test from "../assets/img/result/cert_test.jpeg";
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

function Result() {
  const settings = {
    dots: true,
    arrows: false, // 좌,우 버튼
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 5000, // 자동 캐러셀 속도
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
          이미 많은 곳에서
          <br /> 코위드원 솔루션을 이용중입니다
        </h1>
      </div>
      {/* section2. 납품실적 */}
      <div className="bg-[#f4f4f4] py-10 lg:py-24">
        <div className="px-[20px] lg:px-72 font-semibold text-[30px] lg:text-[40px]">
          납품 실적
        </div>
        <div className="px-[20px] lg:px-72  text-[14px] lg:text-[28px] pt-2 text-gray-500">
          택지개발(상하수도) 뿐만 아니라,
          <br /> 광역상수도 / 공업용수 / 농업용수 / 해수취수관 / 하천유지용수
          등&nbsp;
          <br className="hidden lg:block" />
          다양한 분야에서 실적을 쌓았습니다.
        </div>
        <div className="px-[20px] lg:px-72  pt-6">
          {/* for PC table */}
          <div className="overflow-x-auto hidden lg:block">
            <table className="table-auto w-[500px] lg:w-full mx-auto border-l border-t shadow  ">
              <thead className="border-b">
                <tr className="bg-gray-300 font-bold text-[14px] lg:text-[18px] ">
                  <th className="pl-2 lg:pl-4 border-r text-left">고객</th>
                  <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                    납품 현장
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-left">
                    지하매설관
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-left ">
                    적용 솔루션
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px]">
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    한국수자원공사
                    <br />
                    (K-WATER)
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-b border-r">
                    화성 송산 그린시티
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">상수도</td>
                  <td className="px-2 lg:p-4 py-2  border-r border-b">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    부산 에코델타시티
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    상수도, 하수도
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    수원 삼성전자
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    공업용수
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    보령/부여 관로 이설
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b ">
                    광역상수도
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r">시흥 광역상수도</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">광역상수도</td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    한국토지주택공사
                    <br />
                    (LH)
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    인천 검단지구
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b ">
                    농업용수
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r">성남 고등지구</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">오수압송</td>
                  <td className="px-2 px-2 lg:p-4 py-2  border-r">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    한국수력원자력
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    울진 원자력발전소
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">해수취수관</td>
                  <td className="px-2 px-2 lg:p-4 py-2  border-r">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    남양주시
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">남양주 조안면</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">하수 압송관</td>
                  <td className="px-2 px-2 lg:p-4 py-2  border-r">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    송파구청
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">송파구</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">하천유지용수</td>
                  <td className="px-2 px-2 lg:p-4 py-2  border-r">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    한국농어촌공사
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">수원 이목지구</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">상수도</td>
                  <td className="px-2 px-2 lg:p-4 py-2  border-r">
                    PSPS (파손 예방 및 누수 감지 시스템)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* for mobile table */}
          <div className="overflow-x-auto  lg:hidden">
            <table className="table-auto w-full lg:w-full mx-auto border-l border-t  shadow  ">
              <thead className="border-b">
                <tr className="bg-gray-300 font-bold text-[14px] lg:text-[18px] ">
                  <th className="pl-2 lg:pl-4 border-r text-left">고객</th>
                  <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                    납품 현장
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-left">
                    지하매설관
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px]">
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    한국수자원공사
                    <br />
                    (K-WATER)
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-b border-r">
                    화성 송산 그린시티
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">상수도</td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    부산 에코델타시티
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    상수도, 하수도
                  </td>
                </tr>
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    수원 삼성전자
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    공업용수
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    보령/부여 관로 이설
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b ">
                    광역상수도
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r">시흥 광역상수도</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">광역상수도</td>
                </tr>
                <tr className=" bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    한국토지주택공사
                    <br />
                    (LH)
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b">
                    인천 검단지구
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r border-b ">
                    농업용수
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold"></td>
                  <td className="px-2 py-2 lg:p-4 border-r">성남 고등지구</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">오수압송</td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    한국수력원자력
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">
                    울진 원자력발전소
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">해수취수관</td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    남양주시
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">남양주 조안면</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">하수 압송관</td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    송파구청
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">송파구</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">하천유지용수</td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    한국농어촌공사
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">수원 이목지구</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">상수도</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* section3. 파트너 */}
      <div className="flex flex-col py-10 lg:py-24 text-center">
        <div className="px-[20px] lg:px-72  font-semibold text-[30px] lg:text-[40px]">
          파트너
        </div>
        <div className="px-[20px] lg:px-72  text-[18px] lg:text-[28px] text-gray-500 pt-2">
          다양한 파트너들과 협력하고 있습니다
        </div>
        <div className="px-[4px] lg:px-72  pt-6 lg:pt-8 grid grid-cols-5  items-center  gap-4 gap-y-6 lg:gap-y-8  text-[12px] lg:text-[20px] ">
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2 ">
            <div>
              <BuildingLibraryIcon className="w-5 h-5 lg:w-10 lg:h-10  mx-auto" />
            </div>
            <div>지자체</div>
          </div>
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2">
            <div>
              <BuildingOffice2Icon className="w-5 h-5 lg:w-10 lg:h-10 mx-auto" />
            </div>
            <div>공공기관</div>
          </div>
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2">
            <div>
              <TruckIcon className="w-5 h-5 lg:w-10 lg:h-10 mx-auto" />
            </div>
            <div>건설사</div>
          </div>
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2">
            <div>
              <DocumentTextIcon className="w-5 h-5 lg:w-10 lg:h-10 mx-auto" />
            </div>
            <div>엔지니어링</div>
          </div>
          <div className="text-center pt-4 lg:py-4  flex-cols items-center space-y-2">
            <div>
              <HandThumbUpIcon className="w-5 h-5 lg:w-10 lg:h-10 mx-auto" />
            </div>
            <div>협력업체</div>
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
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img src={eng_dmcm} alt="디엠씨엠" className="object-contain" />
          </div>
          <div className="flex  justify-center lg:h-[88px]">
            {" "}
            <img
              src={etc_youngpoong}
              alt="영풍건설"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* section4. 기타실적 */}
      <div className="bg-[#f4f4f4] py-10 lg:py-24">
        <div className="px-[20px] lg:px-72 ">
          <div>
            <div className="font-semibold text-[30px] lg:text-[40px]">
              특허 실적
            </div>
            {/* <div className="text-[16px] lg:text-[28px] pt-2 text-gray-500">
              발명 특허 20건, 디자인 특허 2건, 실용실안 1건
            </div> */}
          </div>
          <div className="py-6 lg:py-10">
            <Slider {...settings} className=" ">
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
            </Slider>
          </div>
          <div className="font-normal text-[20px] lg:text-[28px] lg:pt-10 text-center">
            특허
          </div>
          <div className="text-[14px] lg:text-[16px] text-gray-500 text-center">
            발명 특허 20건, 디자인 특허 2건, 실용실안 1건
          </div>
          <div className="py-6 lg:py-10">
            {/* for PC table */}
            <div className="overflow-x-auto hidden lg:block">
              <table className="table-auto w-[500px] lg:w-[850px]  border-l border-t  mx-auto shadow  ">
                <thead className="border-b">
                  <tr className="bg-gray-300 font-bold text-[14px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 border-r text-left">구분</th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                      특허등록번호
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-left">특허명</th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px]">
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                      발명특허
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* for mobile table */}
            <div className="overflow-x-auto  lg:hidden">
              <table className="table-auto w-full mx-auto border-l border-t shadow  ">
                <thead className="border-b">
                  <tr className="bg-gray-300 font-bold text-[12px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                      특허등록번호
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-left">특허명</th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px]">
                  <tr className="border-b bg-white ">
                    <td className="px-2 py-2 lg:p-4 border-r w-1/3">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <td className="px-2 py-2 lg:p-4 border-r">
                      제 10-1173592호
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그
                      운용방법
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="font-normal text-[20px] lg:text-[28px] pt-10 text-center">
              특허출원
            </div>
            <div className="text-[14px] lg:text-[16px] text-gray-500 text-center">
              코위드원은 계속 연구하며 발전하고 있습니다
            </div>
            <div className="py-6 lg:py-10">
              {/* for PC table */}
              <div className="overflow-x-auto hidden lg:block">
                <table className="table-auto w-[500px] lg:w-[850px]  border-l border-t mx-auto shadow  ">
                  <thead className="border-b">
                    <tr className="bg-gray-300 font-bold text-[14px] lg:text-[18px] ">
                      <th className="pl-2 lg:pl-4 border-r text-left">
                        출원일
                      </th>
                      <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                        특허출원번호
                      </th>
                      <th className="pl-2 lg:pl-4 border-r text-left">
                        특허출원명
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] lg:text-[16px]">
                    <tr className="border-b bg-white ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2020.12.30
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>
                    <tr className="border-b bg-white ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2020.12.30
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>
                    <tr className="border-b bg-white ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2020.12.30
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>
                    <tr className="border-b bg-white ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2020.12.30
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>
                    <tr className="border-b bg-white ">
                      <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                        2020.12.30
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* for mobile table */}
              <div className="overflow-x-auto  lg:hidden">
                <table className="table-auto w-full  border-l border-t mx-auto shadow  ">
                  <thead className="border-b">
                    <tr className="bg-gray-300 font-bold text-[12px]">
                      <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                        특허출원번호
                      </th>
                      <th className="pl-2 lg:pl-4 border-r text-left">
                        특허출원명
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] ">
                    <tr className="border-b bg-white ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>{" "}
                    <tr className="border-b bg-white ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>{" "}
                    <tr className="border-b bg-white ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>{" "}
                    <tr className="border-b bg-white ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>{" "}
                    <tr className="border-b bg-white ">
                      <td className="px-2 py-2 lg:p-4 border-r">
                        제 2020-0187127
                      </td>
                      <td className="px-2 py-2 lg:p-4 border-r ">
                        누수감지센서 및 그를 이용한 방법
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[20px] lg:px-72  py-10 lg:py-24">
        <div>
          <div>
            <div className="font-semibold text-[30px] lg:text-[40px]">
              기타 실적
            </div>
            {/* <div className="text-[16px] lg:text-[28px] pt-2 text-gray-500">
              혁신제품 인증 2건, 대통령상 포함 00건 수상
            </div> */}
          </div>
          <div className="py-6 lg:py-10">
            <Slider {...settings} className=" ">
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
              <div>
                <img
                  src={cert_test}
                  alt="특허1"
                  className="object-contain px-2 lg:px-5"
                />
              </div>
            </Slider>
          </div>{" "}
          <div className="font-normal text-[20px] lg:text-[28px] lg:pt-10 text-center">
            수상 및 인증
          </div>
          <div className="text-[14px] lg:text-[16px] text-gray-500 text-center pb-6">
            혁신제품 인증 2건, 대통령상 포함 00건 수상
          </div>
          {/* for PC table */}
          <div className="overflow-x-auto hidden lg:block">
            <table className="table-auto w-[500px] lg:w-[850px]  border-l border-t mx-auto shadow  ">
              <thead className="border-b">
                <tr className="bg-gray-300 font-bold text-[14px] lg:text-[18px] ">
                  <th className="pl-2 lg:pl-4 border-r text-left">구분</th>
                  <th className="pl-2 lg:pl-4 py-2 lg:py-6  border-r text-left">
                    날짜
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-left">내용</th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px]">
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r">2019.05</td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* for mobile table */}
          <div className="overflow-x-auto  lg:hidden">
            <table className="table-auto w-full  border-l border-t mx-auto shadow  ">
              <thead className="border-b">
                <tr className="bg-gray-300 font-bold text-[14px] lg:text-[18px] ">
                  <th className="pl-2 lg:pl-4 border-r text-left">구분</th>
                  <th className="pl-2 lg:pl-4 border-r text-left">내용</th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px]">
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
                <tr className="border-b bg-white ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-semibold">
                    ISO 인증{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    ISO 14001:2015{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
