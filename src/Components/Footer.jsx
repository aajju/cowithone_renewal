import logoPath from "../assets/img/logo.png";

function Footer() {
  return (
    <div className="bg-[#ECECEC99] px-[20px] py-[40px] lg:px-[150px] lg:py-[80px] space-y-4">
      <img src={logoPath} alt="Cowithone" width="200" className="py-1" />
      <div className="text-[14px] lg:text-[16px] space-y-1">
        <h6>(주) 코위드원 | 대표이사 윤상조</h6>
        <h6>사업자등록번호 135-86-15365</h6>
        <h6> 수원시 영통구 대학4로17, 에이스 광교타워 207호</h6>
      </div>
      <div>
        <h6 className="font-bold">고객센터</h6>
        <div className="space-y-1 text-[14px] lg:text-[16px] pt-1">
          <h6>전화 : 031-212-5565</h6>
          <h6>이메일 : ㅇㅇㅇ@cowithone.com</h6>
        </div>
      </div>
      <div className="text-[12px] lg:text-[14px] text-center">
        Copyright ⓒ 2011 - 2023 COWITHONE. All rights reserved.
      </div>
    </div>
  );
}
export default Footer;
