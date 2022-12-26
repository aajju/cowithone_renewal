/* global kakao */
import React, { useEffect } from "react";

const { kakao } = window;

const MapContainer = () => {
  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.30016107093741, 127.04689796582203),
      level: 4,
    };
    const kakaoMap = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      37.30016107093741,
      127.04689796582203
    );

    // 마커를 생성합니다

    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(kakaoMap);

    var iwContent =
        '<div style="padding:8px;">코위드원 <br><a href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,510301,1055817&rt1=&rt2=%EC%BD%94%EC%9C%84%EB%93%9C%EC%9B%90&rtIds=,11186485,37.30016107093741,127.04689796582203" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      // '<a href="https://map.kakao.com/?urlX=510301.0&amp;urlY=1055817.0&amp;itemId=11186485&amp;q=%EC%BD%94%EC%9C%84%EB%93%9C%EC%9B%90&amp;srcid=11186485&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank"><span class="roughmap_lebel_text">코위드원</span></a>',
      iwPosition = new kakao.maps.LatLng(37.30016107093741, 127.04689796582203); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(kakaoMap, marker);

    kakaoMap.setDraggable(false);
    //줌 막기
    kakaoMap.setZoomable(false);
  }, []);

  return (
    <div
      className="mx-auto w-full  py-16"
      // style={{
      //   width: "100%",
      //   display: "inline-block",
      //   marginLeft: "5px",
      //   marginRight: "5px",
      // }}
    >
      <div
        id="map"
        className="w-full h-[400px] lg:h-[500px]"
        // style={{ width: "99%", height: "500px" }}
      ></div>
    </div>
  );
};

export default MapContainer;
