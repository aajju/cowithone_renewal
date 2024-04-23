import { useState } from "react";
import { Link } from "react-router-dom";

function Sitetest() {
  const [songpa03_msg, setSongpa03Msg] = useState("클릭 없음"); // 클릭된 버튼 정보 상태값으로 저장

  const [boryeong11_msg, setBoryeong11Msg] = useState("클릭 없음"); // 클릭된 버튼 정보 상태값으로 저장
  const [boryeong12_msg, setBoryeong12Msg] = useState("클릭 없음"); // 클릭된 버튼 정보 상태값으로 저장
  const [boryeong13_msg, setBoryeong13Msg] = useState("클릭 없음"); // 클릭된 버튼 정보 상태값으로 저장
  const [boryeong14_msg, setBoryeong14Msg] = useState("클릭 없음"); // 클릭된 버튼 정보 상태값으로 저장

  const sendMessage = async (message) => {
    try {
      const response = await fetch(
        "http://3.38.180.149:8080/dtxiot/sensor/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ xmlText: message }),
        }
      );

      if (response.ok) {
        // 성공적으로 전송됐을 때 할 일
        console.log("메시지를 성공적으로 전송했습니다.");
      } else {
        throw new Error("메시지 전송 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const messages = {
    songpa03_ok: `<XML><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>3</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    songpa03_det1: `<XML><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>3</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector></XML>`,
    songpa03_det2: `<XML><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>3</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector></XML>`,
    songpa03_det3: `<XML><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>955</distance><btAmt>22.84</btAmt></detector><detector><siteId>songpa03</siteId><chNum>1</chNum><detNum>3</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector></XML>`,

    boryeong11_ok: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_start_ch1: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_start_ch2: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_start_ch12: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_end_ch1: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_end_ch2: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_end_ch12: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector></XML>`,

    boryeong13_ok: `<XML><detector><siteId>boryeong13</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong13</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong13_start_ch1: `<XML><detector><siteId>boryeong13</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong13</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong13_start_ch2: `<XML><detector><siteId>boryeong13</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong13</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong13_start_ch12: `<XML><detector><siteId>boryeong13</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong13</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong13_end_ch1: `<XML><detector><siteId>boryeong13</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>305</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong13</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong13_end_ch2: `<XML><detector><siteId>boryeong13</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong13</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>305</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong13_end_ch12: `<XML><detector><siteId>boryeong13</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>305</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong13</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>305</distance><btAmt>22.84</btAmt></detector></XML>`,

    boryeong12_ok: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong12_start_ch1: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong12_start_ch2: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong12_start_ch3: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong12_start_ch4: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector></XML>`,
    boryeong12_end_ch1: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>750</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong12_end_ch2: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>750</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong12_end_ch3: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>750</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong12_end_ch4: `<XML><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>750</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong12</siteId><chNum>4</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector></XML>`,

    boryeong14_ok: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong14_start_ch1: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong14_start_ch2: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong14_start_ch3: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong14_start_ch4: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector></XML>`,
    boryeong14_end_ch1: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>750</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong14_end_ch2: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>750</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong14_end_ch3: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>750</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong14_end_ch4: `<XML><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>1</detNum><status>1</status><distance>750</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>1</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>2</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>3</chNum><detNum>2</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong14</siteId><chNum>4</chNum><detNum>2</detNum><status>2</status><distance>0</distance><btAmt>0</btAmt></detector></XML>`,
  };

  const sendMessageWithParams = async (message, additionalParam, site) => {
    try {
      await sendMessage(message);

      switch (site) {
        case "songpa03":
          setSongpa03Msg(additionalParam);
          break;

        case "boryeong11":
          setBoryeong11Msg(additionalParam);
          break;
        case "boryeong12":
          setBoryeong12Msg(additionalParam);
          break;
        case "boryeong13":
          setBoryeong13Msg(additionalParam);
          break;
        case "boryeong14":
          setBoryeong14Msg(additionalParam);
          break;
        default:
          // 처리할 사이트가 없을 때의 기본 동작
          console.log("hahah");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center px-2">
      <div className="flex-col justify-center items-center">
        {/* 송파현장 */}
        <div className="my-[50px] mt-[10px]  lg:px-[150px] flex-col ">
          <div className="flex items-center gap-6">
            <div className="text-3xl font-bold">송파현장</div>
            <button
              className="bg-slate-800 text-white px-6 lg:px-20 py-3"
              onClick={() =>
                sendMessageWithParams(messages.songpa03_ok, "ok", "songpa03")
              }
            >
              ok
            </button>
          </div>
          <div className="flex items-center pt-4">
            <h1 className="pr-2 text-xl">테스트위치 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.songpa03_det1,
                    "AC 장비",
                    "songpa03"
                  )
                }
              >
                AC 장비
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.songpa03_det2,
                    "태양광1",
                    "songpa03"
                  )
                }
              >
                태양광1
              </button>{" "}
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.songpa03_det3,
                    "태양광2",
                    "songpa03"
                  )
                }
              >
                태양광2
              </button>
            </div>
          </div>

          <div className="mt-6 font-semibold text-red-500">
            최근클릭 : {songpa03_msg}
          </div>
        </div>

        {/* 율암교 */}
        <div className="my-[50px] mt-[10px]  lg:px-[150px] flex-col ">
          <div className="flex items-center gap-6">
            <div className="text-3xl font-bold">율암교</div>
            <button
              className="bg-slate-800 text-white px-6 lg:px-20 py-3"
              onClick={() =>
                sendMessageWithParams(
                  messages.boryeong11_ok,
                  "ok",
                  "boryeong11"
                )
              }
            >
              ok
            </button>
          </div>
          <div className="flex items-center pt-4">
            <h1 className="pr-2 text-xl">AC전원 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong11_start_ch1,
                    "ac전원 ch1",
                    "boryeong11"
                  )
                }
              >
                ch1
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong11_start_ch2,
                    "ac전원 ch2",
                    "boryeong11"
                  )
                }
              >
                ch2
              </button>{" "}
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong11_start_ch12,
                    "ac전원 ch1&2",
                    "boryeong11"
                  )
                }
              >
                ch1&2
              </button>
            </div>
          </div>
          <div className="flex items-center pt-4 ">
            <h1 className="pr-2 text-xl">점검구 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong11_end_ch1,
                    "점검구 ch1",
                    "boryeong11"
                  )
                }
              >
                ch1
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong11_end_ch2,
                    "점검구 ch2",
                    "boryeong11"
                  )
                }
              >
                ch2
              </button>{" "}
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong11_end_ch12,
                    "점검구 ch1&2",
                    "boryeong11"
                  )
                }
              >
                ch1&2
              </button>
            </div>
          </div>
          <div className="mt-6 font-semibold text-red-500">
            최근클릭 : {boryeong11_msg}
          </div>
        </div>

        {/* 지우교 은해교 */}
        <div className="my-[50px]  lg:px-[150px] flex-col ">
          <div className="flex items-center gap-6">
            <div className="text-3xl font-bold">지우교~은해교</div>
            <button
              className="bg-slate-800 text-white px-6 lg:px-20 py-3"
              onClick={() =>
                sendMessageWithParams(
                  messages.boryeong12_ok,
                  "ok",
                  "boryeong12"
                )
              }
            >
              ok
            </button>
          </div>
          <div className="flex items-center pt-4 ">
            <h1 className="pr-2 text-xl">AC전원 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong12_start_ch1,
                    "ac전원 ch1",
                    "boryeong12"
                  )
                }
              >
                ch1
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong12_start_ch2,
                    "ac전원 ch2",
                    "boryeong12"
                  )
                }
              >
                ch2
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong12_start_ch3,
                    "ac전원 ch3",
                    "boryeong12"
                  )
                }
              >
                ch3
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong12_start_ch4,
                    "ac전원 ch4",
                    "boryeong12"
                  )
                }
              >
                ch4
              </button>
            </div>
          </div>
          <div className="flex items-center pt-4">
            <h1 className="pr-2 text-xl">태양광 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong12_end_ch1,
                    "태양광 ch1",
                    "boryeong12"
                  )
                }
              >
                ch1
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong12_end_ch2,
                    "태양광 ch2",
                    "boryeong12"
                  )
                }
              >
                ch2
              </button>{" "}
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong12_end_ch3,
                    "태양광 ch3",
                    "boryeong12"
                  )
                }
              >
                ch3
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong12_end_ch4,
                    "태양광 ch4",
                    "boryeong12"
                  )
                }
              >
                ch4
              </button>{" "}
            </div>
          </div>
          <div className="mt-6 font-semibold text-red-500">
            최근클릭 : {boryeong12_msg}
          </div>
        </div>

        {/* sk주유소 */}
        <div className="my-[50px]  lg:px-[150px] flex-col ">
          <div className="flex items-center gap-6">
            <div className="text-3xl font-bold">sk주유소</div>
            <button
              className="bg-slate-800 text-white px-6 lg:px-20 py-3"
              onClick={() =>
                sendMessageWithParams(
                  messages.boryeong13_ok,
                  "ok",
                  "boryeong13"
                )
              }
            >
              ok
            </button>
          </div>
          <div className="flex items-center pt-4">
            <h1 className="pr-2 text-xl">AC전원 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong13_start_ch1,
                    "ac전원 ch1",
                    "boryeong13"
                  )
                }
              >
                ch1
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong13_start_ch2,
                    "ac전원 ch2",
                    "boryeong13"
                  )
                }
              >
                ch2
              </button>{" "}
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong13_start_ch12,
                    "ac전원 ch1&2",
                    "boryeong13"
                  )
                }
              >
                ch1&2
              </button>
            </div>
          </div>
          <div className="flex items-center pt-4 ">
            <h1 className="pr-2 text-xl">점검구 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong13_end_ch1,
                    "점검구 ch1",
                    "boryeong13"
                  )
                }
              >
                ch1
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong13_end_ch2,
                    "점검구 ch2",
                    "boryeong13"
                  )
                }
              >
                ch2
              </button>{" "}
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong13_end_ch12,
                    "점검구 ch1&2",
                    "boryeong13"
                  )
                }
              >
                ch1&2
              </button>
            </div>
          </div>
          <div className="mt-6 font-semibold text-red-500">
            최근클릭 : {boryeong13_msg}
          </div>
        </div>

        {/* 지티삼거리 */}
        <div className="my-[50px]  lg:px-[150px] flex-col ">
          <div className="flex items-center gap-6">
            <div className="text-3xl font-bold">지티삼거리</div>
            <button
              className="bg-slate-800 text-white px-6 lg:px-20 py-3"
              onClick={() =>
                sendMessageWithParams(
                  messages.boryeong14_ok,
                  "ok",
                  "boryeong14"
                )
              }
            >
              ok
            </button>
          </div>
          <div className="flex items-center pt-4 ">
            <h1 className="pr-2 text-xl">AC전원 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong14_start_ch1,
                    "ac전원 ch1",
                    "boryeong14"
                  )
                }
              >
                ch1
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong14_start_ch2,
                    "ac전원 ch2",
                    "boryeong14"
                  )
                }
              >
                ch2
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong14_start_ch3,
                    "ac전원 ch3",
                    "boryeong14"
                  )
                }
              >
                ch3
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong14_start_ch4,
                    "ac전원 ch4",
                    "boryeong14"
                  )
                }
              >
                ch4
              </button>
            </div>
          </div>
          <div className="flex items-center pt-4">
            <h1 className="pr-2 text-xl">태양광 : </h1>
            <div className="flex gap-3 ">
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong14_end_ch1,
                    "태양광 ch1",
                    "boryeong14"
                  )
                }
              >
                ch1
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong14_end_ch2,
                    "태양광 ch2",
                    "boryeong14"
                  )
                }
              >
                ch2
              </button>{" "}
              <button
                className="bg-slate-300 px-3 lg:px-10 py-3"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong14_end_ch3,
                    "태양광 ch3",
                    "boryeong14"
                  )
                }
              >
                ch3
              </button>
              <button
                className="bg-slate-300 px-3 lg:px-10"
                onClick={() =>
                  sendMessageWithParams(
                    messages.boryeong14_end_ch4,
                    "태양광 ch4",
                    "boryeong14"
                  )
                }
              >
                ch4
              </button>{" "}
            </div>
          </div>
          <div className="mt-6 font-semibold text-red-500">
            최근클릭 : {boryeong14_msg}
          </div>
        </div>

        {/* 설명 */}
        <div className="flex-col text-lg  space-y-4">
          <div className="text-2xl font-semibold">설명(사용법)</div>
          <div> ok버튼 : 해당 사이트 모든 채널 정상값으로 세팅</div>
          <div>
            ch버튼 : 해당 채널만 비정상 값으로 세팅, 나머지 채널은 다 정상으로
            세팅{" "}
          </div>
          <div>
            * (주의) ac전원 ch1 클릭한뒤, 점검구 ch2 클릭하면 → 점검구 ch2만
            비정상..(ac전원 ch1은 정상)
          </div>

          <div>
            밑에 빨간메시지 보고 내가 가장 마지막으로 뭘 클릭했는지 확인가능...
            현재 DTX 상태 유추 가능
          </div>

          <div>
            채널4개 구간에서.. 채널1이랑 채널3 끊어서 보여주세요 → 못보여줌
          </div>
        </div>
        <Link to={"/sitetest-check"}>
          <div className="bg-orange-400 w-full p-4 text-center mt-10 text-white text-xl">
            커스텀 페이지로 이동
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sitetest;
