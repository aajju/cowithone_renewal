import hammer from "../assets/img/about/hammer.png";

function About() {
  return (
    <>
      <div className="bg-[#F9FAFB] text-center flex flex-col items-center">
        <div className="pt-20 font-bold text-[20px] md:text-[34px] lg:text-[52px]">
          코위드원은 지하시설물의
          <br /> 다양한 문제를 해결하고 있습니다
        </div>
        <div className="py-6 lg:py-10 text-[15px] md:text-[20px] lg:text-[26px]">
          이벤트 발견은 가장 빠르게!
          <br /> 이벤트 위치는 가장 정확하게!
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 place-content-center  lg:px-72 gap-4 pb-20 ">
          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-red-100 flex flex-col justify-between pb-3 lg:pb-6 pt-4 lg:pt-8">
            <img
              className="object-fill w-[75px] lg:w-[100px] mx-auto"
              src={hammer}
              alt="법망치"
            />{" "}
            <div>
              관로탐사
              <br />
              (정확한 위치파악)
            </div>
          </div>
          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-red-100 flex flex-col justify-between pb-3 lg:pb-6 pt-4 lg:pt-8">
            <img
              className="object-fill w-[75px] lg:w-[100px] mx-auto"
              src={hammer}
              alt="법망치"
            />{" "}
            <div>
              관파손(무단굴착)
              <br /> 예방
            </div>
          </div>
          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-red-100 flex flex-col justify-between pb-3 lg:pb-6 pt-4 lg:pt-8">
            <img
              className="object-fill w-[75px] lg:w-[100px] mx-auto"
              src={hammer}
              alt="법망치"
            />{" "}
            <div>
              지하공동(싱크홀)
              <br /> 조기발견
            </div>
          </div>
          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-red-100 flex flex-col justify-between pb-3 lg:pb-6 pt-4 lg:pt-8">
            <img
              className="object-fill w-[75px] lg:w-[100px] mx-auto"
              src={hammer}
              alt="법망치"
            />{" "}
            <div>
              누수감지
              <br />
              시스템
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}

      <div className="py-[60px] lg:py-[120px] space-y-8">
        <div className="px-[20px] lg:pl-72">
          <div className="text-[#232976] text-[18px] lg:text-[30px] font-bold mb-2">
            지하시설물 유지관리의 기본
          </div>
          <div className="font-bold text-[20px] lg:text-[40px] pb-2">
            정확한 위치 파악 (관로 탐사)
          </div>
          <div className="text-[13px] lg:text-[24px] pb-2">
            지하 안전 사고에 신속 정확하게 대응하기 위해
            <br /> 관로탐사 정확도 확보는 매우 중요합니다
          </div>
        </div>
        <div>
          {/* for PC table */}
          <div className="overflow-x-auto hidden lg:block">
            <table className="table-fixed w-[500px] lg:w-[880px] mx-auto border-l border-t shadow  ">
              <thead className="border-b">
                <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                  <th className="pl-2 lg:pl-4 border-r text-center w-24">
                    구분
                  </th>
                  <th className="pl-2 lg:pl-4 py-2 lg:py-6 border-red-500 border-t-4 border-l-4 border-r-4 text-center">
                    자사 방식
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-center">
                    자기마커(RF) 방식
                  </th>
                  <th className="pl-2 lg:pl-4 border-r text-center ">
                    GPR 방식
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px] lg:text-[16px] text-center">
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">원리</td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                    스마트예방시트 설치
                    <br /> (RS485 통신)
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">RF태그 설치</td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    GPR(지표투과레이다) 이용
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    탐사방법
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                    - 감지장치로 실시간 모니터링
                    <br /> - UT-9000으로 탐사
                    <br /> (감지장치 미설치시)
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    GPS 탐지기로 탐사
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    GPR 장치로 탐사
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    확인 심도
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                    약 10m{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">약 3m </td>
                  <td className="px-2 lg:p-4 py-2  border-r">약 2m </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">장점</td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                    - 가장 깊은 심도(10m)
                    <br /> - 실시간 확인 가능
                    <br /> - 관파손예방 가능
                    <br /> - 망실 확률 낮음
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">가장 저렴 </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    기존 노후관도 탐지 가능
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">단점</td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 border-b-4">
                    - 감지장치 설치시 초기투자 발생
                    <br />- 기존 노후관 탐지 불가
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    - 망실 및 이동시 오탐
                    <br />- 낮은 심도(3m)
                    <br />- 기존 노후관 탐지 불가
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    - 탐지비용 비쌈
                    <br /> - 낮은 심도(2m)
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
                  <th className="border-r text-center w-10">구분</th>
                  <th className="py-2 lg:py-6 border-red-500 border-t-2 border-l-2 border-r-2 text-center">
                    자사 방식
                  </th>
                  <th className=" border-r text-center w-[100px]">
                    자기마커(RF) 방식
                  </th>
                  <th className=" border-r text-center w-[100px]">GPR 방식</th>
                </tr>
              </thead>
              <tbody className="text-[10px] lg:text-[16px] text-left">
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">원리</td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                    스마트예방시트 설치
                    <br /> (RS485 통신)
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">RF태그 설치</td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    GPR(지표투과레이다) 이용
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    탐사
                    <br />
                    방법
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                    - 감지장치로 실시간 모니터링
                    <br /> - UT-9000으로 탐사
                    <br /> (감지장치 미설치시)
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    GPS 탐지기로 탐사
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    GPR 장치로 탐사
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">
                    확인
                    <br />
                    심도
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                    약 10m{" "}
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">약 3m </td>
                  <td className="px-2 lg:p-4 py-2  border-r">약 2m </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">장점</td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                    - 가장 깊은 심도(10m)
                    <br /> - 실시간 확인 가능
                    <br /> - 관파손예방 가능
                    <br /> - 망실 확률 낮음
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">가장 저렴 </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    기존 노후관도 탐지 가능
                  </td>
                </tr>
                <tr className="border-b bg-white  ">
                  <td className="text-center border-r font-semibold">단점</td>
                  <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 border-b-2">
                    - 감지장치 설치시 초기투자 발생
                    <br />- 기존 노후관 탐지 불가
                  </td>
                  <td className="px-2 py-2 lg:p-4 border-r ">
                    - 망실 및 이동시 오탐
                    <br />- 낮은 심도(3m)
                    <br />- 기존 노후관 탐지 불가
                  </td>
                  <td className="px-2 lg:p-4 py-2  border-r">
                    - 탐지비용 비쌈
                    <br /> - 낮은 심도(2m)
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
            지하시설물 유지관리의 핵심
          </div>
          <div className="font-bold text-[20px] lg:text-[40px] pb-2">
            관 파손(무단 굴착) 예방
          </div>
          <div className="text-[13px] lg:text-[24px] pb-2">
            관손상 원인의 70% 이상이 타공사 굴착.
            <br /> 특히 무단 굴착을 막기 위해 부단히 노력중입니다.
          </div>
          <div>차트 이미지</div>
        </div>
        <div>
          <div>
            {/* for PC table */}
            <div className="overflow-x-auto hidden lg:block">
              <table className="table-fixed w-[500px] lg:w-[880px] mx-auto border-l border-t shadow  ">
                <thead className="border-b">
                  <tr className="bg-[#232976] text-gray-300 font-bold text-[14px] lg:text-[18px] ">
                    <th className="pl-2 lg:pl-4 border-r text-center w-24">
                      구분
                    </th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6 border-red-500 border-t-4 border-l-4 border-r-4 text-center">
                      자사 방식
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center">
                      보호 철판
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center ">
                      순회 점검
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px] text-center">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">원리</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      스마트예방시트를 통한
                      <br /> 24시간 모니터링
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      관 위에 보호철판 설치
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      관리자가 직접 현장 방문
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      모니터링
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      O
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">X </td>
                    <td className="px-2 lg:p-4 py-2  border-r">X</td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">장점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 text-left">
                      - 24시간 모니터링
                      <br /> - 시설물 파손 예방
                      <br /> - 이벤트 발생시 신속 정확한 위치 정보 제공
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      관 파손을 막는 가장 안전한 방법{" "}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      기존 시설물 적용 가능
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">단점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 border-b-4 text-left">
                      - 초기투자 발생
                      <br />- 기존 시설물 적용 곤란
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r text-left">
                      - 초기투자 발생
                      <br />- 기존 시설물 적용 곤란
                      <br />- 굴착 예방은 가능하나, 천공기 예방 불가
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r text-left">
                      - 정기적(1일 2회) 운영으로 예방에 제한적 기능
                      <br /> - 관리자 유지관리비
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
                    <th className="border-r text-center w-10">구분</th>
                    <th className="py-2 lg:py-6 border-red-500 border-t-2 border-l-2 border-r-2 text-center">
                      자사 방식
                    </th>
                    <th className=" border-r text-center w-[110px]">
                      보호 철판{" "}
                    </th>
                    <th className=" border-r text-center w-[110px]">
                      순회 점검{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[10px] lg:text-[16px] text-left">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">원리</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      스마트예방시트를 통한 24시간 모니터링
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      관 위에 보호철판 설치
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      관리자가 직접 현장 방문
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      모니
                      <br />
                      터링
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      O
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">X </td>
                    <td className="px-2 lg:p-4 py-2  border-r">X </td>
                  </tr>

                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">장점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      - 24시간 모니터링
                      <br /> - 시설물 파손 예방
                      <br /> - 이벤트 발생시 신속 정확한 위치 정보 제공
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      관 파손을 막는 가장 안전한 방법{" "}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      기존 시설물 적용 가능
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">단점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 border-b-2">
                      - 초기투자 발생
                      <br />- 기존 시설물 적용 곤란
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      - 초기투자 발생
                      <br />- 기존 시설물 적용 곤란
                      <br />- 굴착 예방은 가능하나, 천공기 예방 불가
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      - 정기적(1일 2회) 운영으로 예방에 제한적 기능
                      <br /> - - 관리자 유지관리비
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
            파손 예방 효과 &rarr; 혁신적인 유지 비용 절감
          </div>
          <div className=" flex flex-col space-y-12 lg:pl-14  ">
            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1  lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  관리자 순회비용 절감
                </div>
                <ul className="text-[12px] lg:text-[24px]">
                  <li>
                    현장 방문 없이, PC에서 실시간으로 현재 관상태를 모니터링
                  </li>
                  <li>굴착사고시 관리자에게 실시간 알람</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  원인제공자에게 비용 청구 가능
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  작은 사고(크랙)는 당시에는 피해가 없어보이나
                  <br /> 수년내에 부식을 유발하여 누수 및 지반침하(싱크홀)의
                  원인이 됨
                </div>
                <div className="text-[#232976] font-semibold lg:text-[20px] text-[12px] ">
                  CASE STUDY (송산그린시티 택지개발 중 관파손 예방 사례)
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  관 수명 연장 효과{" "}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  기존 40년의 관 수명을 60년으로 150% 수명 연장 효과
                  <br /> 관 비용이 100억인 경우 50억 절감 효과
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
            대형 재난 예방
          </div>
          <div className="font-bold text-[20px] lg:text-[40px] pb-2">
            지하 공동(싱크홀) 조기 발견
          </div>
          <div className="text-[13px] lg:text-[24px] pb-2">
            지반침하 연 평균 257건, 지반침하(싱크홀, 땅꺼짐)는 우리 가까이에
            있습니다
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
                      구분
                    </th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6 border-red-500 border-t-4 border-l-4 border-r-4 text-center">
                      자사 방식
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center">
                      GPR 방식
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px] text-center">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">원리</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      싱크볼 설치 (물리적 센서로 초기 지반침하 발견)
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      GPR(지표투과레이다) 이용{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      확인 심도
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      약 10m
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">약 2m </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">장점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 ">
                      - 깊은 심도(10m)
                      <br /> - 24시간 실시간 모니터링
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      - 기존 노후관도 탐지 가능
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">단점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 border-b-4 ">
                      - 초기투자 발생
                      <br />- 기존 노후관 탐지 곤란
                    </td>

                    <td className="px-2 lg:p-4 py-2  border-r ">
                      - 탐지 비용 비쌈
                      <br /> - 낮은 심도(2m)
                      <br />- 5년에 한 번 탐사
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
                    <th className="border-r text-center w-10">구분</th>
                    <th className="py-2 lg:py-6 border-red-500 border-t-2 border-l-2 border-r-2 text-center">
                      자사 방식
                    </th>
                    <th className=" border-r text-center w-[130px]">
                      GPR 방식
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[10px] lg:text-[16px] text-left">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">원리</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 text-center">
                      싱크볼 설치 <br />
                      (물리적 센서로 초기 지반침하 발견)
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      GPR(지표투과레이다) 이용
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      확인
                      <br />
                      심도
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      약 10m
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">약 2m </td>
                  </tr>

                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">장점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      - 깊은 심도(10m)
                      <br /> - 24시간 실시간 모니터링
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      - 기존 노후관도 탐지 가능
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">단점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 border-b-2">
                      - 초기투자 발생
                      <br />- 기존 노후관 탐지 곤란
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      - 탐지 비용 비쌈
                      <br />- 낮은 심도(2m)
                      <br />- 5년에 한 번 탐사
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="px-[20px] lg:pl-72">
          <div className="font-semibold text-[18px] lg:text-[28px]  lg:pt-12 lg:pb-8 pb-4">
            독보적인 기술력
          </div>
          <div>
            <div className=" flex flex-col space-y-12 lg:pl-14  ">
              <div className="flex flex-col lg:flex-row items-center space-y-4">
                <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
                <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                  <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                    실시간 모니터링{" "}
                  </div>
                  <div className="text-[12px] lg:text-[24px]">
                    GPR 방식은 5년에 1회 탐사 → 그 사이에 생기는 공동은 감지
                    불가 <br /> 반면, 자사 시스템은 24시간 실시간 모니터링 제공
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center space-y-4">
                <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
                <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                  <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                    현장탐사 불필요{" "}
                  </div>
                  <div className="text-[12px] lg:text-[24px]">
                    GPR 방식은 숙련된 전문가와 고가의 장비를 이용하는 <br />
                    현장탐사가 필수이며 탐지 비용 매우 비쌈 (약 얼마...)
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center space-y-4">
                <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
                <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                  <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                    가장 빠른 지반 침하 위치 탐색{" "}
                  </div>
                  <div className="text-[12px] lg:text-[24px]">
                    자사 시스템은 현장탐사 없이, 실시간으로 공동을 지도상 표출{" "}
                    <br />
                    오차율 3% 이내 (최대 45m){" "}
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
              기존 시스템에서 한 발 더 나아간
            </div>
            <div className="font-bold text-[20px] lg:text-[40px] pb-2">
              누수 감지 시스템
            </div>
            <div className="text-[13px] lg:text-[24px] pb-2">
              누수로 새는 돈 연간 00조 원
            </div>
          </div>
          <div className="text-[18px] lg:text-[30px]">
            누수 확인은 <strong>빠르게,</strong>
            <br /> 누수 인식은 <strong>완벽하게,</strong>
            <br /> 누수 위치는 <strong>정확하게,</strong>
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
                      구분
                    </th>
                    <th className="pl-2 lg:pl-4 py-2 lg:py-6 border-red-500 border-t-4 border-l-4 border-r-4 text-center">
                      자사 방식
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center">
                      음향계 방식
                    </th>
                    <th className="pl-2 lg:pl-4 border-r text-center ">
                      유량계(수압계) 방식
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px] lg:text-[16px] text-center">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">원리</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      물리적 센서로 이음부 누수 감지
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      음파를 분석하여 누수여부 판단{" "}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      유량(수압)을 분석하여 누수여부 판단{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      누수감지
                      <br /> 정확도
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
                      누수감지
                      <br /> 시간
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      실시간
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      15일 이상
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">
                      누수위치
                      <br /> 정확도
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4">
                      3% 오차범위 (최대 50m)
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      블록별 탐지 (최소 10km 이상)&nbsp; &#10141; &nbsp;
                      현장에서 추가 탐지 필요
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">장점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 text-left">
                      - 1분 이내 누수감지
                      <br /> - 이벤트 위치 3% 이내 확인
                      <br /> - 상수도뿐만 아니라 하수도 누수 감지
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      기존 노후관에 적용하기에 용이{" "}
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">단점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-4 border-r-4 border-b-4 text-left">
                      - 기존 시설물 적용 곤란
                    </td>
                    <td
                      colSpan="2"
                      className="px-2 py-2 lg:p-4 border-r text-left"
                    >
                      - 잘못된 누수 판단으로 낭비되는 현장 방문 비용
                      <br />- 저압 누수, 소량 누수 탐지 불가
                      <br />- 누수 판단에 15일 이상 소요 (누수 비용 과다 발생)
                      <br />- 누수위치 현장에서 추가 탐지 (누수비용 과다 발생 및
                      전문인력비용 발생)
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
                    <th className="border-r text-center w-12">구분</th>
                    <th className="py-2 lg:py-6 border-red-500 border-t-2 border-l-2 border-r-2 text-center">
                      자사 방식
                    </th>
                    <th className=" border-r text-center w-[110px]">
                      음향계 방식
                    </th>
                    <th className=" border-r text-center w-[110px]">
                      유량계(수압계) 방식
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[10px] lg:text-[16px] text-left">
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">원리</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 text-center">
                      물리적 센서로
                      <br /> 이음부 누수 감지{" "}
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-r ">
                      음파를 분석하여
                      <br /> 누수여부 판단{" "}
                    </td>
                    <td className="px-2 lg:p-4 py-2  border-r">
                      유량(수압)을 분석하여
                      <br /> 누수여부 판단
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      누수감지
                      <br />
                      정확도
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
                      누수감지
                      <br />
                      시간
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      실시간
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      15일 이상
                    </td>
                  </tr>
                  <tr className="border-b bg-white  text-center">
                    <td className="text-center border-r font-semibold">
                      누수위치
                      <br />
                      정확도
                    </td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      3% 오차범위 (최대 50m){" "}
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      블록별 탐지 (최소 10km 이상)
                      <br /> ➝ 현장에서 추가 탐지 필요
                    </td>
                  </tr>

                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">장점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2">
                      - 1분 이내 누수감지
                      <br /> - 이벤트 위치 3% 이내 확인
                      <br /> - 상수도뿐만 아니라 하수도 누수 감지
                    </td>
                    <td
                      colSpan="2"
                      className="px-2 py-2 lg:p-4 border-r text-center"
                    >
                      기존 노후관에 적용하기에 용이
                    </td>
                  </tr>
                  <tr className="border-b bg-white  ">
                    <td className="text-center border-r font-semibold">단점</td>
                    <td className="px-2 py-2 lg:p-4 border-red-500 border-l-2 border-r-2 border-b-2">
                      - 기존 시설물 적용 곤란{" "}
                    </td>
                    <td colSpan="2" className="px-2 py-2 lg:p-4 border-r ">
                      - 잘못된 누수 판단으로 낭비되는 현장 방문 비용
                      <br />- 저압 누수, 소량 누수 탐지 불가
                      <br />- 누수 판단에 15일 이상 소요
                      <br /> (누수 비용 과다 발생)
                      <br />- 누수위치 현장에서 추가 탐지
                      <br /> (누수비용 과다 발생 및 전문인력비용 발생)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="px-[20px] lg:pl-72">
          <div className="font-semibold text-[18px] lg:text-[28px]  lg:pt-12 lg:pb-8 pb-4">
            기존 기술 대비 더 나은 기술력
          </div>
          <div className=" flex flex-col space-y-12 lg:pl-14  ">
            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  누수 인식률 100%{" "}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  이음부에서 센서로 직접 확인하는 방식으로 인식률 100%
                  <h3 className="text-gray-500 text-[10px] lg:text-[20px]">
                    기존 방식 : 음향계, 유량계를 사용하는 간접 확인 방식
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  신속한 누수 감지 시간{" "}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  실시간 누수를 탐지하여, 누수 비용 과다 발생을 예방{" "}
                  <h3 className="text-gray-500 text-[10px] lg:text-[20px]">
                    기존 방식 : 누수 의심지역을 약 15일동안 분석하여 누수 여부
                    판단{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  정확한 누수 위치 탐색{" "}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  오차율 3%내 누수 위치 지도상 표출{" "}
                  <h3 className="text-gray-500 text-[10px] lg:text-[20px]">
                    기존 방식 : 누수 의심지역을(약 10km) 현장에 방문하여
                    <br />
                    전문인력이 직접 누수탐지 장비로 위치 파악 (누수 비용 과다
                    발생)
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section7 */}
      <div className="py-[60px] lg:py-[120px] space-y-8">
        <div className="px-[20px] lg:pl-72">
          <div className="font-bold text-[20px] lg:text-[40px] pb-2">
            기타 다양한 기능들
          </div>
          <div className="text-[13px] lg:text-[24px] pb-2">
            위의 기능 이외에,
            <br /> 다양한 기능으로 지하시설물을 관리합니다
          </div>

          <div className=" flex flex-col space-y-12 lg:pl-14  lg:pt-12 ">
            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  자산 관리 기능{" "}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  시공단계부터 자산 및 시공 이력을 관리합니다
                </div>
                <div className="text-[10px] lg:text-[18px]">
                  관리자는 별도의 관리 없이, 지하시설물 자산 관리 및 시공 이력을
                  편하게 확인{" "}
                </div>
                <div className="flex">
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    관로 위치 확인
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    GIS 구축
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    시공 이력 관리
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    유지보수 이력관리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center space-y-4">
              <div className="bg-red-400 w-[200px] h-[200px] rounded-full"></div>
              <div className="lg:pl-8 flex flex-col justify-center space-y-1 lg:space-y-4">
                <div className="text-[20px] lg:text-[32px] font-semibold text-center lg:text-left">
                  방식 전위 체크{" "}
                </div>
                <div className="text-[12px] lg:text-[24px]">
                  코팅강관 외면 부식여부를 현장 출동없이 실시간 확인 가능{" "}
                </div>

                <div className="flex">
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    전기방식{" "}
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    코팅강관{" "}
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    가스관{" "}
                  </div>
                  <div className="mr-2 lg:mr-4  py-1 px-2  text-[8px] lg:text-[14px] text-white bg-[#232976]">
                    고압가스안전관리법{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section8 */}
      <div className="bg-[#232976] text-white text-center py-10 lg:py-16 flex flex-col items-center">
        <div className="text-[20px] lg:text-[32px] font-semibold">
          코위드원은&nbsp;
          <br className="lg:hidden" />
          지하시설물 관련 법령을 모두 만족합니다
        </div>
        <div className="pt-2 text-[#FFFFFF99] pb-5 text-[16px] lg:text-[24px]">
          지하시설물 유지관리의 중요성과 함께&nbsp;
          <br className="lg:hidden" /> 다양한 법률들이 신설/개정 되고 있습니다.
        </div>
        <div className="pt-2 lg:pt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 ">
          <div className="bg-white flex flex-col text-black items-center py-4 rounded-lg space-y-2 w-44 lg:w-60">
            <img
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
            <img className="object-fill w-[40px] " src={hammer} alt="법망치" />
            <div className="text-[20px] lg:text-[26px] font-semibold">
              상수도 설계기준
            </div>
            <div className="text-[14px] lg:text-[20px] font-light">
              19.04.10 신설
            </div>
          </div>
          <div className="bg-white flex flex-col text-black items-center py-4  rounded-lg space-y-2 w-44 lg:w-60">
            <img className="object-fill w-[40px] " src={hammer} alt="법망치" />
            <div className="text-[20px] lg:text-[26px] font-semibold">
              기반시설 관리법
            </div>
            <div className="text-[14px] lg:text-[20px] font-light">
              20.04.07 신설
            </div>
          </div>
          <div className="bg-white flex flex-col text-black items-center py-4 rounded-lg space-y-2 w-44 lg:w-60">
            <img className="object-fill w-[40px] " src={hammer} alt="법망치" />
            <div className="text-[20px] lg:text-[26px] font-semibold">
              지하안전법
            </div>
            <div className="text-[14px] lg:text-[20px] font-light">
              21.07.27 개정
            </div>
          </div>
        </div>
      </div>

      {/* section9 */}
      <div className="py-[60px] lg:py-[120px] space-y-8">
        <div className="">
          <div className="px-[20px] lg:pl-72 font-bold text-[20px] lg:text-[40px] pb-2">
            끝으로
          </div>
          <div className="px-[20px] lg:pl-72 text-[13px] lg:text-[24px] pb-2">
            지하시설물 유지관리 정책 방향은
            <br /> 사후 대응 방식에서 선제적 관리로 변화를 요구하고 있습니다.
          </div>
          <div className="px-[20px] lg:pl-72 pt-8 text-[18px] lg:text-[30px] pb-2 font-bold ">
            저희 코위드원은 선제적 관리를 넘어
            <br /> <strong className="text-red-600">실시간 모니터링</strong>으로
            <br /> 지하시설물의 관리를 책임지겠습니다.
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
