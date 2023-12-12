import React, { useState } from "react";

function Boryeong11() {
  const keyArray = [];
  const [boryeong11_msg, setBoryeong11Msg] = useState("클릭 없음"); // 클릭된 버튼 정보 상태값으로 저장

  const messages = {
    boryeong11_ok: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_1: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_2: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_3: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_4: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_5: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_6: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_7: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_8: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_9: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_10: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>1</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_11: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>424</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_12: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_13: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_14: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
    boryeong11_15: `<XML><detector><siteId>boryeong11</siteId><chNum>1</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector><detector><siteId>boryeong11</siteId><chNum>2</chNum><detNum>1</detNum><status>2</status><distance>0</distance><btAmt>22.84</btAmt></detector></XML>`,
  };
  const messageValues = Object.values(messages);

  const [checkboxes, setCheckboxes] = useState({
    START_1ch: false,
    START_2ch: false,
    END_1ch: false,
    END_2ch: false,
  });

  const arrayToString = (arr) => {
    if (arr.length === 0) {
      return "초기화(모두 정상)";
    } else {
      return arr.join(", ");
    }
  };

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

  const handleCheckboxChange = (checkbox) => {
    setCheckboxes({
      ...checkboxes,
      [checkbox]: !checkboxes[checkbox],
    });
  };

  const handleSendToServer = () => {
    let i = 0;
    let string = "";
    // const keyArray = [];
    console.log("선택된 체크박스:");
    // console.log(
    //   Object.entries(checkboxes)[0][0],
    //   Object.entries(checkboxes)[0][1]
    // );
    Object.entries(checkboxes).forEach(([key, value]) => {
      if (value) {
        keyArray.push(key);
        switch (key) {
          case "START_1ch":
            i += 8;
            break;
          case "START_2ch":
            i += 4;
            break;
          case "END_1ch":
            i += 2;
            break;
          case "END_2ch":
            i += 1;
            break;
          default:
            console.log("error");
        }
        console.log(key, i);
      }
    });
    // 여기에 선택된 체크박스를 서버로 보내는 로직 추가
    console.log(i);
    // console.log(keyArray[0]);
    string = arrayToString(keyArray);
    setBoryeong11Msg(string);
    // console.log(messageValues[i]);
    sendMessage(messageValues[i]);
  };

  return (
    <div className="m-4 text-2xl">
      <div className="space-y-2">
        <div className="font-semibold">율암교</div>
        {Object.entries(checkboxes).map(([key, value], index) => (
          <label key={index} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleCheckboxChange(key)}
              className="rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mr-2"
            />
            <span className="text-gray-700">{key}</span>
          </label>
        ))}
        <div className="flex gap-2">
          <button
            className="w-full bg-blue-600 text-white py-2"
            onClick={handleSendToServer}
          >
            서버로 보내기
          </button>
          {/* <button
            className="w-full bg-blue-200 text-black py-2"
            onClick={() =>
              setCheckboxes({
                START_1ch: false,
                START_2ch: false,
                END_1ch: false,
                END_2ch: false,
              })
            }
          >
            초기화
          </button> */}
        </div>
        <div className="text-red-500">전송값 : {boryeong11_msg}</div>
      </div>
    </div>
  );
}

export default Boryeong11;
