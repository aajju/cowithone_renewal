import React, { useState } from "react";

function Boryeong12() {
  const keyArray = [];

  const valueArr = [];
  const [boryeong12_msg, setBoryeong12Msg] = useState("클릭 없음"); // 클릭된 버튼 정보 상태값으로 저장

  const arrayToString = (arr) => {
    if (arr.length === 0) {
      return "초기화(모두 정상)";
    } else {
      return arr.join(", ");
    }
  };

  const generateXMLMessage = (valueArr) => {
    const status1 = valueArr.map((key, index) =>
      key || valueArr[index + 4] ? 2 : 1
    );
    const distance = valueArr.map((_, index) =>
      valueArr[index + 4] ? 750 : 0
    );
    const btAmt = valueArr.map((key, index) =>
      key || valueArr[index + 4] ? 0 : 22.84
    );

    return `<XML>
      <detector>
        <siteId>boryeong12</siteId>
        <chNum>1</chNum>
        <detNum>1</detNum>
        <status>1</status>
        <distance>${distance[0]}</distance>
        <btAmt>22.84</btAmt>
      </detector>
      <detector>
        <siteId>boryeong12</siteId>
        <chNum>2</chNum>
        <detNum>1</detNum>
        <status>1</status>
        <distance>${distance[1]}</distance>
        <btAmt>22.84</btAmt>
      </detector>
      <detector>
        <siteId>boryeong12</siteId>
        <chNum>3</chNum>
        <detNum>1</detNum>
        <status>1</status>
        <distance>${distance[2]}</distance>
        <btAmt>22.84</btAmt>
      </detector>
      <detector>
        <siteId>boryeong12</siteId>
        <chNum>4</chNum>
        <detNum>1</detNum>
        <status>1</status>
        <distance>${distance[3]}</distance>
        <btAmt>22.84</btAmt>
      </detector>
      <detector>
        <siteId>boryeong12</siteId>
        <chNum>1</chNum>
        <detNum>2</detNum>
        <status>${status1[0]}</status>
        <distance>0</distance>
        <btAmt>${btAmt[0]}</btAmt>
      </detector>
      <detector>
        <siteId>boryeong12</siteId>
        <chNum>2</chNum>
        <detNum>2</detNum>
        <status>${status1[1]}</status>
        <distance>0</distance>
        <btAmt>${btAmt[1]}</btAmt>
      </detector>
      <detector>
        <siteId>boryeong12</siteId>
        <chNum>3</chNum>
        <detNum>2</detNum>
        <status>${status1[2]}</status>
        <distance>0</distance>
        <btAmt>${btAmt[2]}</btAmt>
      </detector>
      <detector>
        <siteId>boryeong12</siteId>
        <chNum>4</chNum>
        <detNum>2</detNum>
        <status>${status1[3]}</status>
        <distance>0</distance>
        <btAmt>${btAmt[3]}</btAmt>
      </detector>
    </XML>`;
  };

  const [checkboxes, setCheckboxes] = useState({
    START_1ch: false,
    START_2ch: false,
    START_3ch: false,
    START_4ch: false,
    END_1ch: false,
    END_2ch: false,
    END_3ch: false,
    END_4ch: false,
  });

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
    let msg = "";
    let string = "";

    // const valueArr = [];
    console.log("선택된 체크박스:");
    // console.log(
    //   Object.entries(checkboxes)[0][0],
    //   Object.entries(checkboxes)[0][1]
    // );
    Object.entries(checkboxes).forEach(([key, value]) => {
      valueArr[i] = value;
      i += 1;
      if (value) {
        keyArray.push(key);
      }
    });

    console.log(valueArr);
    msg = generateXMLMessage(valueArr);
    console.log(msg);
    string = arrayToString(keyArray);
    setBoryeong12Msg(string);
    sendMessage(msg);
  };

  return (
    <div className="m-4 text-2xl">
      <div className="space-y-2">
        <div className="font-semibold">지우교~은해교</div>
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
        </div>
        <div className="text-red-500">전송값 : {boryeong12_msg}</div>
      </div>
    </div>
  );
}

export default Boryeong12;
