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
import MyImage from "../libs/MyImage";

function Solution() {
  return (
    <div>
      {/* section1. 메인 */}
      <div className="relative ">
        <img className="w-full" src={bg1} alt="Cowithone" />
        <div>
          <h1 className="absolute top-[30px] md:top-[47px] lg:top-[68px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-bold text-[20px] md:text-[34px] lg:text-[52px]  ">
            지하시설물 실시간 모니터링 시스템
          </h1>
          <h3 className="absolute top-[68px] md:top-[96px] lg:top-[140px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center  text-[12px] md:text-[16px] lg:text-[22px] ">
            실시간으로 지하시설물을 모니터링 할 수 있어 더욱 안전합니다
          </h3>
          <img
            className="absolute top-[100px] md:top-[160px] lg:top-[200px] left-1/2 -translate-x-1/2  w-8/12 "
            src={undercityCapture}
            alt="Cowithone"
          />
        </div>
      </div>
      {/* section2 */}
      <div className="h-[288px] lg:h-[488px] bg-[#F9FAFB] flex">
        <p className="pt-10 text-center text-[15px] md:text-[26px] m-auto lg:text-[32px] font-bold">
          지하시설물은 땅 속에 있어 관리가 어렵기 때문에,
          <br /> 유지비용이 많이 들고 국민의 안전을 위협합니다
        </p>
      </div>
      {/* section3 */}
      <div className="py-[60px] lg:py-[120px] space-y-20 lg:space-y-36 ">
        <div className="space-y-2 lg:space-y-4 ">
          <div className="px-[20px] lg:pl-72">
            <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
              BPS (파손 예방 시스템)
            </div>
            <div className="font-bold text-[20px] lg:text-[40px] pb-2">
              비용은 저렴한지만 성능은 최고 (BEST)
            </div>
            <div className="text-[13px] lg:text-[24px] pb-2">
              <ul className="list-none">
                <li>- 관 파손 예방만으로 지하시설물 문제의 80%를 사전 예방 </li>
                <li>- 시공 및 유지보수 간편 </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {/* <MyImage
              image={<img src={bps} alt="bps" />}
              className="w-full lg:w-4/6  mx-auto"
            /> */}
            <img className="w-full lg:w-4/6  mx-auto" src={bps} alt="bps" />
            <div className="mx-auto text-center text-[13px] lg:text-[15px] text-[#454545]">
              구성품 : RM-5000, RM-4000*, 스마트 예방시트 <br /> (RM-4000의 경우
              시공 길이가 1.5km이상인 경우에 필요)
            </div>
          </div>
        </div>
        <div className="space-y-2 lg:space-y-4 ">
          <div className="px-[20px] lg:pl-72 ">
            <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
              STS (파손 예방 및 지반침하 예방 시스템)
            </div>
            <div className="font-bold text-[20px] lg:text-[40px] pb-2">
              예방에 안전을 더했습니다
            </div>
            <div className="text-[13px] lg:text-[24px] pb-2">
              <ul className="list-none">
                <li>- 목숨보다 소중한 것은 없습니다 </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <img className="w-full lg:w-4/6  mx-auto" src={sts} alt="sts" />
            <div className="mx-auto text-center text-[13px] lg:text-[15px] text-[#454545]">
              구성품 : RM-5000, RM-4000*, 스마트 예방시트,
              <strong className="text-[#4850c9]"> 싱크볼</strong> <br />
              (RM-4000의 경우 시공 길이가 1.5km이상인 경우에 필요)
            </div>
          </div>
        </div>
        <div className="space-y-2 lg:space-y-4 ">
          <div className="px-[20px] lg:pl-72">
            <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
              PSPS (파손 예방 및 누수 감지 시스템)
            </div>
            <div className="font-bold text-[20px] lg:text-[40px] pb-2">
              이보다 완벽할 순 없다
            </div>
            <div className="text-[13px] lg:text-[24px] pb-2">
              <ul className="list-none">
                <li>- 상수도를 가장 완벽하게 사용하는 방법</li>
                <li>- 예방, 안전, 그리고 유지관리비를 잡았습니다</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <img className="w-full lg:w-4/6  mx-auto" src={psps} alt="psps" />
            <div className="mx-auto text-center text-[13px] lg:text-[15px] text-[#454545]">
              구성품 : RM-5000, RM-4000*, 스마트 예방시트, <br />
              <strong className="text-[#4850c9]">
                스마트시트, 누수센서 및 보호커버
              </strong>
              <br /> (RM-4000의 경우 시공 길이가 1.5km이상인 경우에 필요)
            </div>
          </div>
        </div>
      </div>
      {/* section4 */}
      <div className="h-[1100px] lg:h-[1600px] bg-[#F9FAFB]  lg:block  px-[20px] ">
        <div className="pt-12 lg:pt-24">
          <h1 className="font-bold text-[22px] lg:text-[32px] text-center">
            우리 회사에 알맞는 솔루션은?
          </h1>
        </div>
        <div className="pt-[16px]">
          <h2 className="font-semibold text-[14px] lg:text-[24px] text-center">
            관 종류, 예산, 필요 기능에 맞춰 솔루션을 선택해 보세요
          </h2>
        </div>
        <div className="pt-[40px] flex ">
          <button className="text-[16px] mx-auto lg:text-[20px] font-medium py-3  px-4 border  border-transparent rounded-md shadow-sm   text-white bg-[#232976] hover:bg-[#0713c0] ">
            <a href="https://cowithone.hanbiro.net/cgi-bin/cloudGetLink.cgi?id=1644&key=79c5741a5941b8873f77bf539afb6b07">
              제품 카탈로그 다운로드
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
                    요약
                  </td>
                  <td className="py-2 lg:p-4 border-r text-center">
                    관 파손 예방
                  </td>
                  <td className="py-2 lg:p-4 border-r text-center">
                    관 파손 예방,
                    <br />
                    초기 지반 침하 감지
                  </td>
                  <td className="lg:p-4 py-2 text-center border-r">
                    관 파손 예방,
                    <br />
                    지반 침하 예방,
                    <br />
                    누수 감지
                  </td>
                </tr>
                <tr className="">
                  <td className="font-medium border-r pl-2 pt-2 lg:pl-4 lg:pt-4 align-top">
                    제품구성
                  </td>
                  <td className="py-2 lg:p-4 border-b text-center border-r  ">
                    이벤트 감지장치
                  </td>
                  <td className="lg:p-4 py-2  border-b border-r text-center  ">
                    이벤트 감지장치
                  </td>
                  <td className="lg:p-4 py-2  border-b border-r text-center  ">
                    이벤트 감지장치
                  </td>
                </tr>
                <tr className="">
                  <td className="p-4 border-r"></td>
                  <td className="py-2 lg:p-4 border-b border-r  text-center">
                    스마트 예방 시트
                  </td>
                  <td className="py-2 lg:p-4 border-b border-r  text-center">
                    스마트 예방 시트
                  </td>
                  <td className="py-2 lg:p-4 border-b border-r  text-center">
                    스마트 예방 시트
                  </td>
                </tr>
                <tr className="">
                  <td className="p-4 border-r"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="py-2 lg:p-4  border-b border-r  text-center text-[#232976] font-medium">
                    싱크볼
                  </td>
                  <td className="p-4 border-b border-r"></td>
                </tr>
                <tr className="">
                  <td className="p-4 border-r"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="py-2 lg:p-4  border-b border-r  text-center text-[#232976] font-medium">
                    스마트 시트
                  </td>
                </tr>
                <tr className="">
                  <td className="p-4 border-r border-b"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="p-4 border-b border-r"></td>
                  <td className="py-2 lg:p-4  border-b border-r  text-center text-[#232976] font-medium">
                    누수 감지 센서
                    <br />및 보호커버
                  </td>
                </tr>
                <tr className="border-b ">
                  <td className="font-medium border-r pl-2 py-2 lg:pl-4 lg:pt-4 align-top">
                    방식전위
                  </td>
                  <td className="  text-center"></td>
                  <td className="text-center py-2 lg:p-4 ">
                    솔루션에 관계 없이
                    <br /> 코팅관에 도입 가능
                  </td>
                  <td className="text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    상수도관
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  text-center border-r">✔</td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    오수관
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  text-center border-r">✔</td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    우수관
                  </td>
                  <td className="py-2 lg:p-4 border-r text-center">✔</td>
                  <td className="py-2 lg:p-4 border-r text-center"></td>
                  <td className="py-2 lg:p-4 text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    중수도관
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center"></td>
                  <td className="py-2 lg:p-4  text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    가스관
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">
                    ✔<br />
                    <h6 className="text-[12px] lg:text-[14px] pt-2">
                      (+방식전위)
                    </h6>
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center"></td>
                  <td className="py-2 lg:p-4  text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    난방관
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center"></td>
                  <td className="py-2 lg:p-4  text-center border-r">✔</td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4 align-top border-r font-medium">
                    송유관
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center"></td>
                  <td className="py-2 lg:p-4  text-center border-r">✔</td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4  align-top border-r font-medium">
                    전력관
                  </td>
                  <td className="py-2 lg:p-4  border-r text-center">✔</td>
                  <td className="py-2 lg:p-4  border-r text-center"></td>
                  <td className="py-2 lg:p-4  text-center border-r"></td>
                </tr>
                <tr className="border-b ">
                  <td className="pl-2 py-2 lg:pl-4 lg:pt-4  align-top border-r font-medium">
                    기타
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
          구성품
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10  pt-16">
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <img
                src={rm5000}
                alt="Cowithone"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              이벤트 감지장치 (RM-5000)
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #BPS #STS #PSPS
            </div>
            <div className=" h-[80px] px-4 pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              지하시설물의 상태 데이터를 서버로 전송
              <br className="hidden lg:block" /> (외부 전원 사용)
            </div>
          </div>
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <img
                src={rm4000}
                alt="Cowithone"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              이벤트 감지장치 (RM-4000)
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #BPS #STS #PSPS
            </div>
            <div className=" h-[80px]  px-4  pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              지하시설물의 이벤트(파손,누수,지반침하)를 감지함
              <br className="hidden lg:block" />
              (태양광 사용)
            </div>
          </div>
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <img
                src={presheet}
                alt="Cowithone"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              스마트예방시트
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #BPS #STS #PSPS
            </div>
            <div className=" h-[80px] px-4  pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              매설관 30~50cm 위에 설치하며,
              <br className="hidden lg:block" /> 지하시설물의 관파손을 예방
            </div>
          </div>
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <img
                src={sinkball}
                alt="Cowithone"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              싱크볼
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #STS
            </div>
            <div className=" h-[80px] px-4  pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              초기 지반침하를 탐지하여,
              <br className="hidden lg:block" /> 대형재난을 사전에 예방
            </div>
          </div>
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <img
                src={smartsheet}
                alt="Cowithone"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              스마트시트
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #PSPS
            </div>
            <div className=" h-[80px] px-4  pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              관 외면에 부착하여
              <br className="hidden lg:block" /> 누수센서와 이벤트 감지장치를
              연결
            </div>
          </div>{" "}
          <div className="m-auto ">
            <div className="relative mx-auto h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px]  ring-2 ring-[#23297633] rounded-full">
              <img
                src={sensor}
                alt="Cowithone"
                className="absolute h-[120px] w-[120px]  lg:h-[180px] lg:w-[180px] object-contain rounded-full top-0 mx-auto left-1/2 -translate-x-1/2	"
              />
            </div>
            <div className="pt-4 text-center text-[14px] lg:text-[20px] text-[#454545] font-semibold">
              누수감지센서 및 보호커버
            </div>
            <div className="text-center pt-1 font-semibold text-[#232976] text-[13px] lg:text-[18px]">
              #PSPS
            </div>
            <div className=" h-[80px] px-4 pt-3 text-center font-light text-[12px] lg:text-[16px] text-[#454545]">
              이음부에서 발생하는 누수를 감지
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Solution;
