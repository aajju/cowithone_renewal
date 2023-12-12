import React, { useState } from "react";
import { arrayToString, sendMessage } from "./\butils";

function Boryeong4ch(props) {
  const { siteId, distance, siteName } = props;
  const keyArray = [];
  const valueArr = [];
  const [noti_msg, setNotiMsg] = useState("클릭 없음"); // 클릭된 버튼 정보 상태값으로 저장

  const generateXMLMessage = (valueArr) => {
    const status1 = valueArr.map((key, index) =>
      key || valueArr[index + 4] ? 2 : 1
    );
    const distance1 = valueArr.map((_, index) =>
      !valueArr[index] && valueArr[index + 4] ? distance : 0
    );
    const btAmt = valueArr.map((key, index) =>
      key || valueArr[index + 4] ? 0 : 22.84
    );

    return `<XML>
      <detector>
        <siteId>${siteId}</siteId>
        <chNum>1</chNum>
        <detNum>1</detNum>
        <status>1</status>
        <distance>${distance1[0]}</distance>
        <btAmt>22.84</btAmt>
      </detector>
      <detector>
        <siteId>${siteId}</siteId>
        <chNum>2</chNum>
        <detNum>1</detNum>
        <status>1</status>
        <distance>${distance1[1]}</distance>
        <btAmt>22.84</btAmt>
      </detector>
      <detector>
        <siteId>${siteId}</siteId>
        <chNum>3</chNum>
        <detNum>1</detNum>
        <status>1</status>
        <distance>${distance1[2]}</distance>
        <btAmt>22.84</btAmt>
      </detector>
      <detector>
        <siteId>${siteId}</siteId>
        <chNum>4</chNum>
        <detNum>1</detNum>
        <status>1</status>
        <distance>${distance1[3]}</distance>
        <btAmt>22.84</btAmt>
      </detector>
      <detector>
        <siteId>${siteId}</siteId>
        <chNum>1</chNum>
        <detNum>2</detNum>
        <status>${status1[0]}</status>
        <distance>0</distance>
        <btAmt>${btAmt[0]}</btAmt>
      </detector>
      <detector>
        <siteId>${siteId}</siteId>
        <chNum>2</chNum>
        <detNum>2</detNum>
        <status>${status1[1]}</status>
        <distance>0</distance>
        <btAmt>${btAmt[1]}</btAmt>
      </detector>
      <detector>
        <siteId>${siteId}</siteId>
        <chNum>3</chNum>
        <detNum>2</detNum>
        <status>${status1[2]}</status>
        <distance>0</distance>
        <btAmt>${btAmt[2]}</btAmt>
      </detector>
      <detector>
        <siteId>${siteId}</siteId>
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

    console.log("선택된 체크박스:");

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
    setNotiMsg(string);
    sendMessage(msg);
  };

  return (
    <div className="m-4 text-2xl">
      <div className="space-y-2">
        <div className="font-semibold">{siteName}</div>
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
        <div className="text-red-500">전송값 : {noti_msg}</div>
      </div>
    </div>
  );
}

export default Boryeong4ch;
