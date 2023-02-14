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
            시스템 유지관리비용은 전력비, 통신비, 소모품 교체비입니다. RM-5000만
            외부전원을 사용하고, RM-4000은 태양광을 사용하기 때문에 전력비용이
            적게 듭니다. 통신비용은 RM-5000에서만 발생하여 년간 전력비와 통신비
            합계는 M당 160원입니다. 소모품을 정기적으로 교체하더라도 년 간 m당
            2,200원이 넘지 않습니다.
          </div>
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
        <div className="text-blue-800 font-bold text-[18px] mb-3">솔루션</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            스마트 예방시트, 누수감지센서 등 제품의 수명은 얼마나 되나요?{" "}
          </summary>
          <div className="pt-2">
            지하에 매설된 감지선 수명은 외부 압력과 지하수에 영향을 받습니다.
            당사가 사용하는 감지선은 주석 코팅 동선을 내수성과 내후성이 뛰어난
            테프론 코팅 후 그 위에 PVC로 코팅하여 사용합니다. 이 감지선을
            부틸고무가 부착된 시트에 삽입하여 사용하기 때문에 반영구적으로
            사용할 수 있습니다. 누수감지센서는 보호커버(또는 센서보호장치)에
            내장되어 사용되기 때문에 반영구적으로 사용할 수 있습니다.
          </div>
        </details>{" "}
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            원격감시장치의 전원은 어떤 것을 사용하나요?{" "}
          </summary>
          <div className="pt-2">
            원격감지장치는 외부전원 또는 태양광을 전원으로 사용합니다. 시스템
            구성상 1대(RM-5000)만 외부전원을 사용하고, 나머지(RM-4000)은
            태양광을 사용합니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            태양광을 사용할 경우 배터리 잔량을 확인하기 위해 수시로 현장에
            방문해야 하지 않나요?{" "}
          </summary>
          <div className="pt-2">
            프로그램에서 배터리 잔량을 확인할 수 있어 현장에 방문할 필요가
            없습니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            여러 종류의 관이 혼합되어 사용되더라도 하나의 망으로 구성하여
            모니터링 할 수 있나요?{" "}
          </summary>
          <div className="pt-2">
            물론입니다. 여러 종류의 관 종, 관 경을 하나의 망으로 구성하여
            효율적으로 관리하는 것이 당사 시스템의 장점입니다. 최소 D80부터 최대
            D3,000까지 시스템을 구축할 수 있습니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            감지선 보수가 어렵지 않나요?{" "}
          </summary>
          <div className="pt-2">
            감지장치에서 미세한 신호를 보내기 때문에 감전 위험이 없으며, 손상된
            감지선을 절단한 후 연결잭에 삽입하여 연결한 후 지하수가 유입되지
            않도록 보호테이프를 부착하면 됩니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            하수관이나 우수관은 주로 비금속관을 사용하고 지하 5m 이하에 매설되는
            경우가 많은데 관로탐사가 가능한가요?
          </summary>
          <div className="pt-2">
            스마트시트 또는 스마트예방시트에 내장된 감지선을 통해 지하 10m까지
            관로 위치를 탐지할 수 있습니다. 따라서 기존의 자기마커나 RF칩 및
            로케이팅케이블을 사용하지 않아도 됩니다
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            시스템을 구축하면 지하시설물 수명을 얼마나 연장할 수 있나요?
          </summary>
          <div className="pt-2">
            상수도관 파손 원인에 대한 미국 통계를 보면 타공사 33%, 외부부식32%,
            내부부식10%로 나타나고 있습니다. 우리나라 환경부 자료를 보면 타공사
            10%, 시설노후 87.3%로 나타나고 있습니다. 이런 이유로 약 30년이
            경과하면 노후관으로 분류되어 교체 여부를 고민하고 있습니다. 당사
            시스템을 적용하면 타공사에 대한 문제점과 이음부 누수에 대한 문제점을
            효율적으로 해결할 수 있어 최소 1.5배 이상의 수명을 연장시킬 수
            있습니다.
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            관리자는 어떤 경로로 알람을 받나요?
          </summary>
          <div className="pt-2">
            당사는 이음부 누수나 지반침하를 감지하기 위해 이음부에 대한 모든
            정보(원격감지장치로부터 감지선 길이, 좌표값, 시설물에 대한 속성정보
            등)를 수집하여 DB를 구축하여 서버에 저장해 놓습니다. 그리고
            관리자들의 핸드폰 번호를 저장애 놓습니다. 만약 감지선이 절단되거나
            누수감지센서(또는 싱크볼)가 작동되면 감지장치가 확인하여 서버로
            보내고, 서버는 사전에 구축된 DB와 비교하여 정확한 이벤트 위치를
            확인한 후 관리자에게 알립니다.
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
          <div className="pt-2">
            스마트 도시법은 도시의 경쟁력을 향상시키고 지속 가능한 발전을
            촉진하여 삶의 질 향상과 경쟁력 강화를 목적으로 제정되었으며,
            스마트도시 건설을 함에 있어 공공시설을 지능화하기 위해 건설기술에
            전자, 제어, 통신 등의 기술을 융합한 기술을 사용토록 하는 법입니다.{" "}
            <br />
            <br />
            <h6 className="text-blue-800 font-medium">
              - 당사 솔루션은 지하에 매설되어 우리에게 편리함을 제공하는
              인프라(수도, 하수도, 전기, 통신, 전력, 도시가스, 송유 등)의
              안전관리를 위해 시설물 외부 또는 상단에 실시간 모니터링시스템을
              설치한 후 정보통신 기술을 이용하여 인프라의 파손 여부 및 누수,
              지반침하를 모니터링하여 실시간 감지 및 이벤트 위치를 알려주는
              솔루션입니다.
            </h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            상수도설계기준 관련하여 코위드원 솔루션을 어떻게 적용할 수 있나요?{" "}
          </summary>
          <div className="pt-2">
            상수도 설계기준(2017년 판)의 주요 내용은 다음과 같습니다 <br />
            <br />
            <h2 className="font-semibold">일반사항</h2>
            3. 설계의 기본사항 3.1 총칙 (3)에 의하면,
            <br /> 지진, 홍수, 태풍, 가뭄 등 자연재해나 사고 등의 비상시라도
            가능한 한 단수되지 않아야 하며 피해를 조속히 복구될 수 있도록 하고
            있으며, <br />
            3.3 상수도 시설의 안전성 확보에 의하면, <br />
            설계할 때에는 상수도 시설의 안전성이 최대로 확보되도록 다음 각 항이
            고려되어야 한다 <br /> (1) 재해 또는 사고에 대비하여 시설의 안전성이
            확보되도록 할 것, 특히. 지반함몰에 따른 관로 사고를 사전에 예방,
            저감하기 위한 센서기반의 기술 진단설비나 인위적 공사 시 관 파손을
            미연에 예방할 수 있는 안전점검시설 등을 설치할 것. <br />
            <br />
            <h2 className="font-semibold">도수시설 설계기준</h2>
            2. 도수관, 2.23 (관로 보호 및 진단설비)에 의하면
            <br /> 상수도 관로의 보호 및 진단설비를 다음 각 항에 따라 설치할 수
            있다. <br />
            (1) 상수도관의 파손이나 누수 및 지반함몰 등을 사전에 예방 및
            감시하기 위한 센서 및 계측기를 관로 주변에 설치할 수 있다. <br />
            (2) 재해 또는 사고에 대비하여 시설의 안전성이 확보되도록 적절한
            대책을 수립하여야 한다. <br />
            <br />
            <h6 className="text-blue-800 font-medium">
              - 당사 솔루션은 누수를 실시간 감지하고, 지반함몰을 사전에 예방하여
              자연재해나 사고에 조속히 대응할 수 있는 시스템입니다.
            </h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            하수도와 관련된 법은 무엇이며, 하수도에 코위드원 솔루션을 적용할 수
            있나요?{" "}
          </summary>
          <div className="pt-2">
            하수도 표준시방서(2017년) 유지관리 모니터링시스템 1.1.2 시스템
            개요에 보면, <br />
            유지관리모니터링시스템은 하수관로에 설치된 유량계와 강우설량계에서
            실시간으로 측정, 모니터링된 정보를 수질, 상수사용량 등 입력정보와
            함께 하수처리장 관리센터내 서버에 취합하여 저장한 후 각종 자료를
            분석할 수 있는 하수관로의 체계적인 모니터링시스템이나, 또한 필요시
            하수관의 압력식 구간에서 관의 파손이나 누수 및 지반함몰 등을 사전에
            예방 및 감시하기 위한 센서 및 계측기를 관로 주변에 설치할 수 있으며,
            재해 또는 사고에 대비하여 시설의 안전성이 확보되도록 적절한 대책을
            수립하여야 한다. <br />
            <br />
            <h6 className="text-blue-800 font-medium">
              -당사 시스템은 관 파손예방, 지반함몰을 실시간 감지할 수 있어
              시설물을 안전하게 관리할 수 있습니다.
            </h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            기반시설관리법은 무엇이며 코위드원 솔루션은 어떻게 적용할 수 있나요?{" "}
          </summary>
          <div className="pt-2">
            기반시설관리법이란 기반시설의 체계적인 유지관리와 성능개선을 통하여
            국민이 보다 안전하고 편리하게 기반시설을 활용할 수 있도록 하고,
            나아가 국가 경제발전에 기여함을 목적으로 한다. <br />
            제3조 (기본원칙)에 따르면, <br />
            1. 관리주체는 기반시설의 안전성, 사용성, 내구성 등을 종합적으로
            고려하여 선제적으로 관리함으로써 노후화에 다른 생애주기비용을
            최소화한다.라고 되어 있다. <br />
            제5조 (국가 등의 책무)에 따르면, <br />
            ①국가와 지방자치단체는 국민의 안전하고 편리한 기반시설 이용을
            도모하기 위하여 필요한 종합적인 시책을 수립, 시행하여야 한다.
            <br />
            ②국가와 지방자치단체는 기반시설의 유지관리와 성능개선에 필요한
            예산을 확보하고, 중기재정계획에 반영하여야 한다.
            <br /> ③관리주체는 국가와 지방자치단체의 시책에 적극 협력하여야
            하며, 기반시설의 유지관리와 성능개선에 필요한 재원을 마련하여야
            한다.
            <br /> 제21조 (비용의 지원)에 따르면, <br />
            ①국가 및 지방자치단체는 기반시설의 체계적인 유지관리 및 성능개선을
            위하여 해당 기반시설 관련 법률 및 대통령령으로 정하는 바에 따라
            지방자치단체, 공공기관, 지방공기업 및 민간관리자에게 다음 각 호에
            소요되는 비용의 전부 또는 일부를 출자, 출연, 보조 및 융자할 수 있다.
            다만, 민간관리자에 대해서는 융자에 한정하여 지원할 수 있다.
            <br />
            ②지방자치단체, 공공기관, 지방공기업 및 민간관리자가 재정지원을
            요구하는 경우에는 국가 및 지방자치단체는 다음 각 호의 사항을
            고려하여 지원할 수 있다. (생략)
            <br />
            <br />{" "}
            <h6 className="text-blue-800 font-medium">
              - 당사 시스템은 파손예방 등 선제적 관리, 원인제공자에게 복구비용
              청구 및 수명연장 효과로 생애주기비용을 기존 방식에 비해 50% 이상
              줄일 수 있으며, 비용 또한 지원받을 수 있습니다.
            </h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            지하안전법은 무엇이며, 코위드원 솔루션을 어떻게 적용할 수 있나요?{" "}
          </summary>
          <div className="pt-2">
            지하안전법이란 지하를 안전하게 개발하고 이용하기 위한 안전관리체계를
            확립함으로써 지반침하로 인한 위해를 방지하고 공공의 안전을 확보함을
            목적으로 한다.
            <br /> 제3조(국가 등의 책무)에 따르면, <br />
            ①국가 및 지방자치단체는 국민의 생명, 신체 및 재산을 보호하기 위하여
            지반침하 예방 및 지하안전관리에 관한 종합적인 시책을 수립,
            시행하여야 한다. <br />
            ②지하개발사업자 및 지하시설물관리자는 지하개발 또는 지하시설물
            이용으로 인한 지반침하를 예방하고 지하안전을 확보하기 위하여 필요한
            조치를 하여야 한다. <br />
            제10조 (지하개발사업자 및 지하시설물관리자의 안전관리)에 따르면,
            <br />
            ②지하시설물관리자는 소관 지하시설물의 관리부실로 인한 지반침하를
            예방하기 위하여 지하시설물 및 주변 지반에 대한 안전점검 및
            유지관리규정을 정하여 관할 시장, 군수, 구청장에게 제출하여야 한다.
            이를 변경하는 경우에도 또한 같다. <br />
            ③시장, 군수, 구청장은 지반침하를 예방하기 위하여 필요하다고 인정하는
            경우에는 건설공사 안전관리계획 또는 안전관리규정의 변경을 명할 수
            있다. 이 경우 변경 명령을 받은 자는 정당한 사유가 없으면 이에 따라야
            한다. <br />
            제34조(지하시설물 및 주변 지반에 대한 안전점검 등)에 따르면,
            <br />
            ①지하시설물관리자는 소관 지하시설물 및 주변 지반에 대하여
            안전관리규정에 따른 안전점검을 국토교통부령으로 정하는 바에 따라
            정기적으로 실시하고 그 결과를 시장 군수, 및 구청장에게 통보하여야
            한다.
            <br /> ②시장, 군수, 구청장은 관할 구역에 있는 지하시설물 및 주변
            지반에 대하여 연 1회 이상 안전관리 실태를 점검하여야 한다. 다만,
            제1항에 따라 통보받은 안전점검 결과를 검토하여 지반침하의 우려가
            없다고 판단하는 경우에는 이를 생략할 수 있다.
            <br />
            <br />{" "}
            <h6 className="text-blue-800 font-medium">
              - 당사 시스템은 관망을 실시간 관리하여 누수, 지반침하 여부를
              실시간 확인할 수 있어 안전점검 주기를 늘려 점검비용을 줄일 수
              있습니다.
            </h6>
          </div>
        </details>
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            중대재해처벌법은 무엇이며, 코위드원 솔루션을 어떻게 적용할 수
            있나요?{" "}
          </summary>
          <div className="pt-2">
            중대재해처벌법이란 사업 또는 사업장, 공중이용시설 및 공중교통수단을
            운영하거나 인체에 해로운 원료나 제조물을 취급하면서 안전, 보건조치
            의무를 위반하여 인명피해를 발생하게 한 사업주, 경영책임자, 공무원 및
            법인의 처벌 등을 규정함으로써 중대 재해를 예방하고 시민과 종사자의
            생명과 신체를 보호함을 목적으로 함.
            <br />
            <br /> 제4조(사업주와 경영책임자 등의 안전 및 보건 확보 의무)사업주
            또는 경영책임자 등은 사업주나 법인 또는 기관이 실질적으로 지배,
            운영, 관리하는 사업 도는 사업장에서 종사자의 안전, 보건상의 유해
            또는 위험을 방지하기 위하여 그 사업 또는 사업장의 특성 및 규모 등을
            고려하여 다음 각 호에 다른 조치를 하여야 한다. <br />
            1.재해예방에 필요한 인력 및 예산 등 안전보건관리체계의 구축 및 그
            이행에 관한 조치 <br />
            2.재해 발생 시 재발방지대책의 수립 및 그 이행에 관한 조치
            <br />
            3.중앙행정기관, 지방자치단체가 관계 법령에 따라 개선, 시정 등을 명한
            사항의 이행에 관한 조치 <br />
            제6조(중대산업재해 사업주와 경영책임자 등의 처벌) <br />
            ①중대 산업재해에 이르게 한 사업주 또는 경영책임자 등은 1년 이상의
            징역 또는 10억원 이하의 벌금에 처한다. 이 경우 징역과 벌금을 병과할
            수 있다.
            <br />
            제9조(사업주와 경영책임자 등의 안전 및 보건 확보 의무)
            <br /> ①사업주 또는 경영책임자 등은 사업주나 법인 또는 기관이
            실질적으로 지배, 운영, 관리하는 사업 또는 사업장에서 생산, 제조,
            판매, 유통 중인 원료나 제조물의 설계, 제조, 관리상의 결함으로 인한
            그 이용자 또는 그 밖의 사람의 생명, 신체의 안전을 위하여 다음 각
            호에 따른 조치를 하여야 한다. <br />
            1.재해예방에 필요한 인력, 예산, 점검 등 안전보건관리체계의 구축 및
            그 이행에 관한 조치 <br />
            2. 재해 발생 시 재발방지대책의 수립 및 그 이행에 관한 조치
            <br />
            제11조(중대시민재해의 양벌규정)
            <br /> 법인 또는 기관의 경영책임자 등이 그 법인 또는 기관의 업무에
            관하여 제10조에 해당하는 위반행위를 하면 그 행위자를 벌하는 외에 그
            법인 또는 기관에게 다음 각 호의 구분에 따른 벌금형을 과한다. 다만,
            법인 도는 기관이 그 위반행위를 방지하기 위하여 해당 업무에 관하여
            상당한 주의와 감독을 게을리하지 아니한 경우에는 그러하지 아니하다.
            <br />
            <br />{" "}
            <h6 className="text-blue-800 font-medium">
              - 당사 시스템은 지하시설물을 실시간 관리하는 시스템으로 안전사고가
              발생할 수 없으나, 부득이 안전사고가 발생하더라고 안전사고예방을
              위해 상당한 주의와 감독을 게을리 하지 않음을 입증할 수 있을 것으로
              판단됩니다.{" "}
            </h6>
          </div>
        </details>
      </div>
      <div id="etc" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">기타</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            코위드원 솔루션 사용시 해당하는 가점은 어떻게 되나요?{" "}
          </summary>
          <div className="pt-2">
            2022년 7월 20일 국토부 보도자료에 따르면, 스마트건설 활성화를 위해
            턴키 등 기술형 입찰 심의 시, 스마트 기술에 관한 최소 배점을
            도입(7점)하고, 스마트 기술 적용이 입찰 조건인 스마트 턴키는 10~20점
            배정, 비턴키 사업에도 설계 단계부터 스마트 기술이 반영되도록
            엔지니어링 종심제 평가 항목에 “스마트 기술”을 신설하는 것으로 되어
            있습니다. 당사 시스템은 정부 스마트시티 시범지구인 부산EDC현장과
            세종시 5-1공구에 채택되어 시공 중이며, 정부가 인정하는 스마트 기술로
            당사 시스템을 설계반영 시 가점을 받을 수 있습니다.
          </div>
        </details>{" "}
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            코위드원 솔루션을 설계에 반영 시 수주 확률은 어떤가요?{" "}
          </summary>
          <div className="pt-2">
            제3기 신도시를 비롯하여 신규 택지개발지구, 공단, 재개발 사업 등에
            당사 시스템 도입을 위한 설계가 많이 진행되고 있으며, 당사 시스템을
            설계에 반영할 경우 지하시설물 스마트기술 점수에 많은 영향을 주는
            것으로 나타납니다
          </div>
        </details>
      </div>
    </div>
  );
}
export default Faq;
