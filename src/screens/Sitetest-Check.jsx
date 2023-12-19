import React from "react";
import { Link } from "react-router-dom";
import Fieldtest2ch1det from "../Components/\bFieldtest_2ch_1det";
import Fieldtest4ch2det from "../Components/Fieldtest_4ch_2det";

function SitetestCheck() {
  return (
    <div className="m-4">
      <div className="space-y-10 flex-col text-lg">
        <Fieldtest2ch1det
          siteId={"boryeong11"}
          distance={465}
          siteName={"율암교"}
        />
        <Fieldtest4ch2det
          siteId={"boryeong12"}
          distance={750}
          siteName={"지우교~은해교"}
        />
        <Fieldtest2ch1det
          siteId={"boryeong13"}
          distance={305}
          siteName={"sk주유소"}
        />
        <Fieldtest4ch2det
          siteId={"boryeong14"}
          distance={760}
          siteName={"지티삼거리"}
        />
      </div>
      {/* 설명 */}
      <div className="flex-col text-lg  space-y-4 mt-10">
        <div className="text-2xl font-semibold">설명(사용법)</div>
        <div> 단선한걸 체크해야함!!!! </div>
        <div>start : AC전원 위치에서 끊었을때...</div>
        <div>end : 점검구 or 태양광에서 끊었을때...</div>

        <div>
          밑에 빨간메시지 보고 내가 가장 마지막으로 뭘 클릭했는지 확인가능...
          현재 DTX 상태 유추 가능
        </div>

        <div>* 하나도 체크 안하고 서버로 보내기 = 모든 값 정상으로 초기화</div>
      </div>
      <Link to={"/sitetest"}>
        <div className="bg-orange-400 w-full p-4 text-center mt-10 text-white text-xl">
          심플페이지로 이동
        </div>
      </Link>
    </div>
  );
}

export default SitetestCheck;
