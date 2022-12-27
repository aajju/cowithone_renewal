function Faq() {
  return (
    <div className="px-[20px] lg:px-[150px] lg:w-[1000px] mx-auto mb-20">
      <div>
        <h1
          id="price"
          className="font-bold text-center text-[22px] lg:text-[24px]"
        >
          자주묻는질문
        </h1>
        <div className="py-4 flex">
          <div className="flex-1"></div>
          <ul className="w-[200px] flex flec-col justify-between pt-3 font-semibold text-blue-700">
            <a href="#price">
              <li>비용</li>
            </a>
            <a href="#solution">
              <li>솔루션</li>
            </a>
            <a href="#rule">
              <li>법대응</li>
            </a>
            <a href="#etc">
              <li>기타</li>
            </a>
          </ul>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="text-[14px] lg:text-[15px]">
        <div className="text-blue-800 font-bold text-[18px] mb-3">비용</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            시스템 구축비용이 많이 들지 않나요?
          </summary>
          <div className="pt-2">
            시스템 구축비용은 BPS시스템, STS시스템, PSPS시스템 등 시스템
            구축방법에 따라 많은 차이가 있습니다. 현재 상하수도 표준공사비를
            기준할 때 약 3~8%가 증가될 것으로 예상됩니다. 소형관은 비율이 높고
            대형관이 비율이 낮습니다. 다만, 본 시스템을 구축하면 자기마커설치가
            불필요하며 별도로 GIS시스템을 구축할 필요가 없기 때문에 실제
            비용상승은 크지 않습니다
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            시스템 유지관리비용이 많이 들지 않나요?{" "}
          </summary>
          <div className="pt-2">
            시스템을 유지관리하기 위한 비용은 배터리 교체비 및 통신비를 들 수
            있습니다. 배터리 수명은 5년으로 볼 때 M당 약 25원, 통신비는 마지막
            원격감시장치에서만 발생하기 때문에 약 4KM 모니터링 할 경우 M당 약
            30원에 불과하여 기타 비용을 감안하더라도 M당 약 100원 미만
            발생됩니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            비용 대금은 어떻게 진행되나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details>
      </div>
      <div id="solution" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">솔루션</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            스마트 예방시트, 누수감지센서 등 제품의 수명은 얼마나 되나요?{" "}
          </summary>
          <div className="pt-2">
            지하에 매설된 감지선 수명은 외부의 압력과 물에 영향을 많이 받습니다.
            당사가 사용하는 감지선은 주석으로 코팅된 전선을 가장 내수성과
            내후성이 뛰어난 테프론으로 코팅하여 부틸고무가 부착된 유리섬유시트에
            삽입하여 제조하여 내수성과 외압에 강해 반영구적으로 사용할 수
            있습니다. 또한 누수감지센서는 보호커버 또는 센서보호장치로 밀폐되어
            있어 반영구적으로 사용할 수 있습니다
          </div>
        </details>{" "}
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            원격감시장치의 전원은 어떤 것을 사용하나요?{" "}
          </summary>
          <div className="pt-2">
            원격감시장치는 일반전력 및 태양광을 전원으로 사용할 수 있습니다.
            당사 장치는 저전력으로 사용할 수 있기 때문에 태양광을 사용하는 것이
            더 효율적입니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            태양광을 사용할 경우 배터리 잔량을 확인하기 위해 수시로 현장에
            방문해야 하지 않나요?{" "}
          </summary>
          <div className="pt-2">
            배터리 잔량을 확인하기 위해 현장을 방문할 필요가 없습니다.
            사무실에서 웹상에서 배터리 충전량을 실시간 확인할 수 있습니다.
            참고로 장마 또는 눈이 쌓여 보름간 충전이 되지 않더라도 작동될 수
            있도록 설계되었기 때문에 안심하셔도 됩니다
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            여러 종류의 관이 혼합되어 사용되더라도 하나의 망으로 구성하여
            모니터링 할 수 있나요?{" "}
          </summary>
          <div className="pt-2">
            여러 종류의 제품 및 관 경이 사용되더라도 하나의 망으로 구성하여
            효율적으로 운영할 수 있는 것이 당사 시스템의 장점입니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            감지선 보수가 어렵지 않나요?{" "}
          </summary>
          <div className="pt-2">
            원격감시장치에서 보내는 것은 미세한 신호이기 때문에 감전위험이
            없으며, 손상된 감지선을 가위로 잘라낸 뒤 탈피하지 않고 연결잭으로
            연결한 후 외부의 물이 유입되지 않도록 보호패드를 붙이고 10CM 폭의
            부틸이 부착된 유리섬유시트로 부착하면 됩니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            하수관이나 우수관은 주로 비금속관을 사용하고 지하 5m 이하에 매설되는
            경우가 많은데 관로탐사가 가능한가요?
          </summary>
          <div className="pt-2">
            당사 스마트시트 또는 스마트예방시트에 내장된 감지선을 통해 지하
            10m까지 관로위치를 탐지할 수 있습니다. 따라서 기존 자기마커나
            로케이팅 케이블을 별도로 부설할 필요가 없습니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            시스템을 구축하면 지하시설물 수명을 얼마나 연장할 수 있나요?
          </summary>
          <div className="pt-2">
            상수도관 파손원인에 대한 미국 통계를 보면 타공사33%, , 외부부식32%,
            내부부식 10%로 나타나고 있습니다. 우리나라 환경부자료를 보면 타공사
            10.6%, 시설노후 87.3%로 나타나고 있습니다. 이런 이유로 약 30년이
            경과하면 노후관으로 분류되어 교체여부를 고민하고 있습니다. 당사
            시스템을 적용하면 타공사에 의한 문제점과 이음부 누수에 대한 문제점을
            해결할 수 있기 때문에 최소 2배 이상의 수명연장을 시킬 수 있을 것으로
            판단합니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            관리자는 어떤 경로로 알람을 받나요?
          </summary>
          <div className="pt-2">
            당사는 이음부 누수를 감지하기 위해 이음부에 대한 모든
            정보(원격감시장치로부터 감지선 길이, 좌표값, 시설물에 대한 속성정보
            등)를 수집하여 DB를 구축합니다. 이때 관리자들의 핸드폰을 서버에
            입력하여 두게 됩니다. 만약 감지선이 절단되거나 누수감지센서가
            작동되면 사전에 구축된 DB와 비교하여 정확한 위치를 확인하여 실시간
            관리자에게 알람을 줄 수 있습니다.
          </div>
        </details>
      </div>
      <div id="rule" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">법대응</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            스마트 도시법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            상수도설계기준은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            기반시설 관리법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            지하안전법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            중대재해처벌법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details>
      </div>
      <div id="etc" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">기타</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            코위드원 솔루션 사용시 해당하는 가점은 어떻게 되나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details>{" "}
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            코위드원 솔루션 설계 적용시 수주 확률이 어땠었나요?{" "}
          </summary>
          <div className="pt-2">???</div>
        </details>
      </div>
    </div>
  );
}
export default Faq;
