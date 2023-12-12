export const arrayToString = (arr) => {
  if (arr.length === 0) {
    return "초기화(모두 정상)";
  } else {
    return arr.join(", ");
  }
};

export const sendMessage = async (message) => {
  try {
    const response = await fetch("http://3.38.180.149:8080/dtxiot/sensor/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ xmlText: message }),
    });

    if (response.ok) {
      console.log("메시지를 성공적으로 전송했습니다.");
    } else {
      throw new Error("메시지 전송 실패");
    }
  } catch (error) {
    console.error(error);
  }
};
