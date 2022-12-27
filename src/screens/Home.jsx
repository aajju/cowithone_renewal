import bps from "../assets/img/solution/bps.png";
import sts from "../assets/img/solution/sts.png";
import psps from "../assets/img/solution/psps.png";
import pub_home from "../assets/img/home/pub_home.png";
import gover_home from "../assets/img/home/gover_home.png";
import engneer_home from "../assets/img/home/engneer_home.png";
import frame from "../assets/img/home/frame.png";
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
import etc_youngpoong from "../assets/img/partner/etc_youngpoong.jpeg";
import pub_lh from "../assets/img/partner/pub_lh.png";
import pub_hydro from "../assets/img/partner/pub_hydro.png";
import pub_krclean from "../assets/img/partner/pub_krclean.png";
import { Link } from "react-router-dom";
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
import bg1 from "../assets/img/solution/Rectangle 70.png";
import undercityCapture from "../assets/img/solution/undercity.png";

function Home() {
  const settings_text = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 2000, // 자동 캐러셀 속도
    draggable: false, // 드래그
    pauseOnFocus: false, // focus시 정지
    pauseOnHover: false, // hover시 정지
    responsive: [
      // 반응형 옵션
      {
        breakpoint: 1024, // (숫자)px 이하일 경우
        settings: {
          infinite: true,
          draggable: false, // 드래그
          pauseOnFocus: false, // focus시 정지
          pauseOnHover: false, // hover시 정지
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: false,
          autoplay: true, // 자동 캐러셀
          autoplaySpeed: 3050, // 자동 캐러셀 속도
        },
      },
    ],
  };
  const settings = {
    dots: false,
    draggable: false, // 드래그
    pauseOnFocus: false, // focus시 정지
    pauseOnHover: false, // hover시 정지
    infinite: true,
    speed: 1000,
    slidesToScroll: 4,
    slidesToShow: 6,
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 1500, // 자동 캐러셀 속도
    responsive: [
      // 반응형 옵션
      {
        breakpoint: 1024, // (숫자)px 이하일 경우
        settings: {
          infinite: true,
          draggable: false, // 드래그
          pauseOnFocus: false, // focus시 정지
          pauseOnHover: false, // hover시 정지
          speed: 500,
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: true, // 좌,우 버튼
          dots: false,
          autoplay: true, // 자동 캐러셀
          autoplaySpeed: 1500, // 자동 캐러셀 속도
        },
      },
    ],
  };
  return (
    <div className="">
      {/* section1. 메인 */}
      <div className="relative ">
        <img className="w-full" src={bg1} alt="Cowithone" />
        <div>
          <h1 className="absolute top-[40px] md:top-[66px] lg:top-[88px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-bold text-[20px] md:text-[32px] lg:text-[48px]  ">
            IoT 기술로 <br /> 지하시설물 관리를 혁신합니다
          </h1>
          <img
            className="absolute  bottom-0 left-1/2 -translate-x-1/2  w-full "
            src={frame}
            alt="frame"
          />
          <img
            className="absolute opacity-90 top-[100px] md:top-[160px] lg:top-[200px] left-1/2 -translate-x-1/2  w-8/12 "
            src={undercityCapture}
            alt="Cowithone"
          />
        </div>
      </div>
      {/* <div className="bg-teal-200 h-[77vh]">
        <div className="text-center pt-16 lg:pt-24 font-bold text-[30px] lg:text-[52px]">
          IoT 기술로 <br /> 지하시설물 관리를 혁신합니다
        </div>
        <div></div>
        <div></div>
      </div> */}
      {/* section2  solution */}
      <div className=" bg-[#f4f4f4] pb-10 lg:pb-20 pt-24 md:pt-44 lg:pt-60">
        <div>
          <div className="px-[20px] lg:px-52 text-[18px] lg:text-[30px] text-[#232976] font-semibold">
            솔루션
          </div>
          <div className="px-[20px] lg:px-52 text-[20px] lg:text-[34px] font-semibold pt-2 lg:pt-4 py-8 lg:py-12">
            다양한 센서 및 IoT 기기를 활용하여,
            <br /> 지하시설물의 다양한 이벤트를 실시간 모니터링 합니다.
          </div>
        </div>
        <div className=" flex flex-col space-y-10 lg:space-y-36 ">
          <div className="flex flex-col lg:flex-row justify-between ">
            <div className="px-[20px] lg:pl-52  flex flex-col lg:w-[620px] lg:pt-6">
              <div className="text-[16px] lg:text-[20px] font-semibold text-[#232976] ">
                BPS (파손 예방 시스템)
              </div>
              <div className="text-[18px] lg:text-[24px] font-semibold  ">
                관 파손 예방만으로 지하시설물 문제의 80%를 사전 예방할 수
                있습니다
              </div>
            </div>
            <div className="flex-1 pt-6 lg:pt-0 pb-6">
              <img className="object-scale-down w-full" src={bps} alt="BPS" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between ">
            <div className=" pl-[20px] lg:pl-0 flex flex-col flex-1 lg:pt-6 lg:order-last ">
              <div className="text-[16px] lg:text-[20px] font-semibold text-[#232976] ">
                STS (파손 예방 및 지방침하 예방 시스템){" "}
              </div>
              <div className="text-[18px] lg:text-[24px] font-semibold  ">
                한 해 평균 지반침하(싱크홀) 약 260건
                <br /> 초기에 감지하여 대형재난을 막습니다
              </div>
            </div>
            <div className=" py-6 lg:pt-0 lg:pl-52  lg:w-2/3 ">
              <img className="object-scale-down w-full" src={sts} alt="BPS" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between ">
            <div className="px-[20px] lg:pl-52  flex flex-col lg:w-[620px] lg:pt-6">
              <div className="text-[16px] lg:text-[20px] font-semibold text-[#232976] ">
                PSPS (파손 예방 및 누수 감지 시스템){" "}
              </div>
              <div className="text-[18px] lg:text-[24px] font-semibold  ">
                실시간 누수 확인 및 누수 위치 확인.
                <br /> 상하수도관을 가장 완벽하게 사용하세요.
              </div>
            </div>
            <div className="flex-1 pt-6 lg:pt-0 ">
              <img className="object-scale-down w-full" src={psps} alt="PSPS" />
            </div>
          </div>
        </div>
        <Link to={"/solution"} className="flex pt-14">
          <button className="text-[16px] mx-auto lg:text-[20px] font-medium py-3  px-4 border  border-transparent rounded-md shadow-sm   text-white bg-[#232976] hover:bg-[#0713c0] ">
            솔루션 자세히보기
          </button>
        </Link>
      </div>
      {/* section3 주요고객 */}
      <div className="px-[20px] lg:px-52 py-10 lg:py-20">
        <div>
          <div className="text-[18px] lg:text-[30px] text-[#232976] font-semibold">
            주요고객
          </div>
          <div className="text-[20px] lg:text-[34px] font-semibold pt-2 lg:pt-4 py-8 lg:py-12">
            각기 다른 이유로 <br /> 저희 솔루션을 사용중입니다
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-4">
          <div className="flex-1 ">
            <div className="flex flex-col justify-between items-center">
              <img
                className="object-fill "
                src={engneer_home}
                alt="엔지니어링"
              />
            </div>
            <div className="text-center pt-4 font-semibold text-[18px] lg:text-[20px]">
              엔지니어링사 {"&"} 건설사
            </div>
            <div className="flex flex-col pt-3 space-y-2 text-center pb-24 lg:pb-16">
              <div>
                <div className="font-semibold"> 낙찰(수주) 확률 UP</div>
                <div> - 턴키 {"&"} 비턴키 사업 설계 배점 강화</div>
              </div>
              <div>
                <div className="font-semibold">턴키 사업</div>
                <div>- 기술형 입찰심의 : 최소배점도입(7점)</div>
                <div>- 스마트턴키 : 10~20점 배점</div>
              </div>
              <div>
                <div className="font-semibold">비턴키 사업</div>
                <div>- 엔지니어링 종심제 평가항목에</div>
                <div>'스마트 기술' 항목 신설</div>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col justify-between items-center">
              <img className="object-fill " src={gover_home} alt="지자체" />
            </div>
            <div className="text-center pt-4 font-semibold text-[18px] lg:text-[20px]">
              지자체(상하수도과, 교통과)
            </div>
            <div className="flex flex-col pt-3 space-y-2 text-center pb-24 lg:pb-16">
              <div>
                <div className="font-semibold">유지비용 절감</div>
                <div> - 순회 비용 절감</div>
                <div> - 원인불명 피해액 보상</div>
                <div> - (상수도) 누수 피해액 절감</div>
                <div> - (하수도) 불명수 처리비용 절감</div>
                <div> - 상하수도관 수명 연장 (약 150%)</div>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col justify-between items-center">
              <img className="object-fill " src={pub_home} alt="공공기관" />
            </div>
            <div className="text-center pt-4 font-semibold text-[18px] lg:text-[20px]">
              공공기관
            </div>
            <div className="flex flex-col pt-3 space-y-2 text-center pb-16 lg:pb-16">
              <div>
                <div className="font-semibold">택지개발사업</div>
                <div> - 스마트도시를 위한 최고의 솔루션</div>
                <div> - 국가 스마트도시 시범사업 100% 선정</div>
                <div> (부산에코델타시티, 세종5-1공구)</div>
              </div>
              <div>
                {" "}
                <div className="font-semibold">광역상수도 (수자원공사)</div>
                <div>- 광역상수도 관리를 위한 최고의 솔루션</div>
                <div>- 가장 빠른 관로 위치 탐사</div>
                <div>- 관 파손 예방</div>
                <div>- 가장 빠른 누수 탐지</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section4. logo */}
      <div className="px-1 lg:px-8 pb-16">
        <div className="font-bold text-center text-[28px] lg:text-[44px] pb-2">
          PARTNER
        </div>
        {/* <Slider
          {...settings_text}
          className="flex text-center text-[20px] font-bold lg:text-[30px] pb-6"
        >
          <div>지자체</div>
          <div>공공기관</div>
          <div>건설사</div>
          <div>엔지니어링사</div>
          <div>협력업체</div>
        </Slider> */}
        <div className="text-center pb-4">
          전국 다양한 기관 및 업체에서 사용중입니다.
        </div>

        {/* logo 슬라이드 */}

        <Slider {...settings} className="">
          <div>
            <img
              src={loc_namyangju}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={loc_songpa}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={loc_seongnam}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={loc_hwasung}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={pub_kwater}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={pub_lh}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={pub_hydro}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={pub_krclean}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={con_kukdong}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={con_hdc}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={con_kumho}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={con_taeyoung}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={eng_kunhwa}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={eng_dohwa}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={eng_yooshin}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={eng_dmcm}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={etc_movements}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={etc_becs}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={etc_corel}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
          <div>
            <img
              src={etc_youngpoong}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div>
        </Slider>
      </div>
      {/* <div className="flex flex-col pb-10 lg:pb-24 text-center">
        <div className="px-[20px] lg:px-72  font-semibold text-[30px] lg:text-[40px]">
          파트너
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
      </div> */}
      {/* section6 */}
      <div>
        {" "}
        <div className="px-[20px] lg:px-52 bg-[#f4f4f4] py-10 lg:py-20">
          <div>
            <div className="text-[18px] lg:text-[30px] text-[#232976] font-semibold">
              자주묻는질문
            </div>
          </div>

          <div className="bg-white mt-8">
            <details className="border px-4 py-2 cursor-pointer">
              <summary className="font-semibold text-[14px] lg:text-[16px]">
                시스템 구축비용이 많이 들지 않나요?
              </summary>
              <div className="pt-2">
                시스템 구축비용은 BPS시스템, STS시스템, PSPS시스템 등 시스템
                구축방법에 따라 많은 차이가 있습니다. 현재 상하수도 표준공사비를
                기준할 때 약 3~8%가 증가될 것으로 예상됩니다. 소형관은 비율이
                높고 대형관이 비율이 낮습니다. 다만, 본 시스템을 구축하면
                자기마커설치가 불필요하며 별도로 GIS시스템을 구축할 필요가 없기
                때문에 실제 비용상승은 크지 않습니다
              </div>
            </details>
            <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
              <summary className="font-semibold text-[14px] lg:text-[16px]">
                시스템 유지관리비용이 많이 들지 않나요?{" "}
              </summary>
              <div className="pt-2">
                시스템 구축비용은 BPS시스템, STS시스템, PSPS시스템 등 시스템
                구축방법에 따라 많은 차이가 있습니다. 현재 상하수도 표준공사비를
                기준할 때 약 3~8%가 증가될 것으로 예상됩니다. 소형관은 비율이
                높고 대형관이 비율이 낮습니다. 다만, 본 시스템을 구축하면
                자기마커설치가 불필요하며 별도로 GIS시스템을 구축할 필요가 없기
                때문에 실제 비용상승은 크지 않습니다
              </div>
            </details>
            <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
              <summary className="font-semibold text-[14px] lg:text-[16px]">
                비용 대금은 어떻게 진행되나요?{" "}
              </summary>
              <div className="pt-2">
                시스템 구축비용은 BPS시스템, STS시스템, PSPS시스템 등 시스템
                구축방법에 따라 많은 차이가 있습니다. 현재 상하수도 표준공사비를
                기준할 때 약 3~8%가 증가될 것으로 예상됩니다. 소형관은 비율이
                높고 대형관이 비율이 낮습니다. 다만, 본 시스템을 구축하면
                자기마커설치가 불필요하며 별도로 GIS시스템을 구축할 필요가 없기
                때문에 실제 비용상승은 크지 않습니다
              </div>
            </details>
          </div>

          <Link to={"/faq"} className="flex pt-14">
            <button className="text-[16px] mx-auto lg:text-[20px] font-medium py-3  px-4 border  border-transparent rounded-md shadow-sm   text-white bg-[#232976] hover:bg-[#0713c0] ">
              자주묻는질문 더보기
            </button>
          </Link>
        </div>
      </div>
      {/* section7 문의하기 */}
      <div className="bg-[#232976] text-white text-center py-10 lg:py-16 flex flex-col items-center">
        <div className="text-[20px] lg:text-[32px] font-semibold">
          코위드원 솔루션을 더 알고 싶다면?
        </div>
        <div className="pt-2 text-[#FFFFFF99] pb-5 text-[16px] lg:text-[24px]">
          최대한 빠르게 확인 후 연락드리겠습니다
        </div>
        <Link to={"/contact"}>
          <div className="text-[#232976] bg-white w-40 py-2 rounded-xl">
            문의하기
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Home;
