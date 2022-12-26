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
            비용 대금은 어떻게 진행되나요?{" "}
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
      </div>
      <div id="solution" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">솔루션</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            스마트 예방시트, 누수감지센서 등 제품의 수명은 얼마나 되나요?{" "}
          </summary>
          <div className="pt-2">
            시스템 구축비용은 BPS시스템, STS시스템, PSPS시스템 등 시스템
            구축방법에 따라 많은 차이가 있습니다. 현재 상하수도 표준공사비를
            기준할 때 약 3~8%가 증가될 것으로 예상됩니다. 소형관은 비율이 높고
            대형관이 비율이 낮습니다. 다만, 본 시스템을 구축하면 자기마커설치가
            불필요하며 별도로 GIS시스템을 구축할 필요가 없기 때문에 실제
            비용상승은 크지 않습니다
          </div>
        </details>{" "}
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            원격감시장치의 전원은 어떤 것을 사용하나요?{" "}
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
            태양광을 사용할 경우 배터리 잔량을 확인하기 위해 수시로 현장에
            방문해야 하지 않나요?{" "}
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
            여러 종류의 관이 혼합되어 사용되더라도 하나의 망으로 구성하여
            모니터링 할 수 있나요?{" "}
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
            감지선 보수가 어렵지 않나요?{" "}
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
            하수관이나 우수관은 주로 비금속관을 사용하고 지하 5m 이하에 매설되는
            경우가 많은데 관로탐사가 가능한가요?
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
            시스템을 구축하면 지하시설물 수명을 얼마나 연장할 수 있나요?
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
            관리자는 어떤 경로로 알람을 받나요?
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
      </div>
      <div id="rule" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">법대응</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            스마트 도시법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
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
            상수도설계기준은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
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
            기반시설 관리법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
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
            지하안전법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
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
            중대재해처벌법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?{" "}
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
      </div>
      <div id="etc" className="text-[14px] lg:text-[15px]">
        <div className="h-20"></div>
        <div className="text-blue-800 font-bold text-[18px] mb-3">기타</div>
        <details className="border px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            코위드원 솔루션 사용시 해당하는 가점은 어떻게 되나요?{" "}
          </summary>
          <div className="pt-2">
            시스템 구축비용은 BPS시스템, STS시스템, PSPS시스템 등 시스템
            구축방법에 따라 많은 차이가 있습니다. 현재 상하수도 표준공사비를
            기준할 때 약 3~8%가 증가될 것으로 예상됩니다. 소형관은 비율이 높고
            대형관이 비율이 낮습니다. 다만, 본 시스템을 구축하면 자기마커설치가
            불필요하며 별도로 GIS시스템을 구축할 필요가 없기 때문에 실제
            비용상승은 크지 않습니다
          </div>
        </details>{" "}
        <details className="border-l border-r border-b px-4 py-2 cursor-pointer">
          <summary className="font-semibold">
            코위드원 솔루션 설계 적용시 수주 확률이 어땠었나요?{" "}
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
      </div>
    </div>
  );
}
export default Faq;
