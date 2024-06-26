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
import YouTube from "react-youtube";

function Home() {
  // const settings_text = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1500,
  //   slidesToScroll: 1,
  //   slidesToShow: 1,
  //   autoplay: true, // 자동 캐러셀
  //   autoplaySpeed: 2000, // 자동 캐러셀 속도
  //   draggable: false, // 드래그
  //   pauseOnFocus: false, // focus시 정지
  //   pauseOnHover: false, // hover시 정지
  //   responsive: [
  //     // 반응형 옵션
  //     {
  //       breakpoint: 1024, // (숫자)px 이하일 경우
  //       settings: {
  //         infinite: true,
  //         draggable: false, // 드래그
  //         pauseOnFocus: false, // focus시 정지
  //         pauseOnHover: false, // hover시 정지
  //         speed: 500,
  //         slidesToScroll: 1,
  //         slidesToShow: 1,
  //         dots: false,
  //         autoplay: true, // 자동 캐러셀
  //         autoplaySpeed: 3050, // 자동 캐러셀 속도
  //       },
  //     },
  //   ],
  // };
  const settings = {
    dots: false,
    // centerMode: true,

    draggable: false, // 드래그
    pauseOnFocus: false, // focus시 정지
    pauseOnHover: false, // hover시 정지
    infinite: true,
    speed: 1000,
    slidesToScroll: 3,
    slidesToShow: 6,
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 1500, // 자동 캐러셀 속도
    responsive: [
      // 반응형 옵션
      {
        breakpoint: 1024, // (숫자)px 이하일 경우
        settings: {
          // centerMode: true,
          infinite: true,
          draggable: false, // 드래그
          pauseOnFocus: false, // focus시 정지
          pauseOnHover: false, // hover시 정지
          speed: 500,
          slidesToScroll: 3,
          slidesToShow: 3,
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
          {/* <img
            className="absolute opacity-90 top-[100px] md:top-[160px] lg:top-[200px] left-1/2 -translate-x-1/2  w-8/12 "
            src={undercityCapture}
            alt="Cowithone"
          /> */}
          <YouTube
            className="hidden lg:block absolute opacity-90 top-[100px] md:top-[160px] lg:top-[200px] left-1/2 -translate-x-1/2   "
            // videoId="VO4i7nEuWEA"
            videoId="RGx36gx7gyc"
            opts={{
              width: "800",
              height: "450",
              playerVars: {
                autoplay: 0,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
          <YouTube
            className=" lg:hidden absolute opacity-90 top-[100px] md:top-[160px] lg:top-[200px] left-1/2 -translate-x-1/2  "
            // videoId="VO4i7nEuWEA"
            videoId="RGx36gx7gyc"
            opts={{
              width: "320",
              height: "180",
              playerVars: {
                autoplay: 0,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
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
      {/* <div>
        <YouTube
          videoId="VO4i7nEuWEA"
          opts={{
            width: "500",
            height: "315",
            playerVars: {
              autoplay: 0,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </div> */}
      {/* section2  solution */}
      <div className=" bg-[#f4f4f4] pb-10 lg:pb-20 pt-36">
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
                관 파손 예방만으로도 지하시설물 문제의 80%를 사전 예방할 수
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
                연 평균 지반침하(싱크홀) 약 260건 발생.
                <br /> 초기에 감지하여 대형재난을 막을 수 있습니다.
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
                실시간 누수 및 누수 위치 확인.
                <br /> 상하수도관을 완벽하게 관리할 수 있습니다.
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
                <div className="font-semibold">턴키 등 사업</div>
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
              지자체(상하수도부서, 도로과)
            </div>
            <div className="flex flex-col pt-3 space-y-2 text-center pb-24 lg:pb-16">
              <div>
                <div className="font-semibold">유지비용 절감</div>
                <div> - 순회 비용 절감</div>
                <div> - 복구비 원인자 부담</div>
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
                <div>- 정확한 위치 탐사</div>
                <div>- 관 파손 예방</div>
                <div>- 신속한 누수 탐지</div>
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

        <Slider {...settings} className="px-[20px] ">
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
          {/* <div>
            <img
              src={eng_dmcm}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div> */}
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
          {/* <div>
            <img
              src={etc_youngpoong}
              alt="특허1"
              className="object-contain px-2 lg:px-5"
            />
          </div> */}
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
                스마트 예방시트, 누수감지센서 등 제품의 수명은 얼마나 되나요?{" "}
              </summary>
              <div className="pt-2">
                지하에 매설된 감지선 수명은 외부 압력과 지하수에 영향을
                받습니다. 당사가 사용하는 감지선은 주석 코팅 동선을 내수성과
                내후성이 뛰어난 테프론 코팅 후 그 위에 PVC로 코팅하여
                사용합니다. 이 감지선을 부틸고무가 부착된 시트에 삽입하여
                사용하기 때문에 반영구적으로 사용할 수 있습니다. 누수감지센서는
                보호커버(또는 센서보호장치)에 내장되어 사용되기 때문에
                반영구적으로 사용할 수 있습니다.
              </div>
            </details>
            <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
              <summary className="font-semibold text-[14px] lg:text-[16px]">
                코위드원 솔루션 사용시 해당하는 가점은 어떻게 되나요?{" "}
              </summary>
              <div className="pt-2">
                2022년 7월 20일 국토부 보도자료에 따르면, 스마트건설 활성화를
                위해 턴키 등 기술형 입찰 심의 시, 스마트 기술에 관한 최소 배점을
                도입(7점)하고, 스마트 기술 적용이 입찰 조건인 스마트 턴키는
                10~20점 배정, 비턴키 사업에도 설계 단계부터 스마트 기술이
                반영되도록 엔지니어링 종심제 평가 항목에 “스마트 기술”을
                신설하는 것으로 되어 있습니다. 당사 시스템은 정부 스마트시티
                시범지구인 부산EDC현장과 세종시 5-1공구에 채택되어 시공 중이며,
                정부가 인정하는 스마트 기술로 당사 시스템을 설계반영 시 가점을
                받을 수 있습니다.
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
