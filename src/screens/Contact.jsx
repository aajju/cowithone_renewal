import MapContainer from "../Components/MapContainer";
function Contact() {
  return (
    <div className="mx-auto mb-20">
      <h1 className="font-bold text-center text-[24px] lg:text-[35px] py-8 lg:py-10 lg:pt-16">
        코위드원에 궁금한 점이 있으면
        <br className="lg:hidden" /> 편하게 연락주세요
      </h1>

      <div className="text-center pt-4 space-y-4">
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]">이메일</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            help@cowithone.com
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]">전화</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            031-212-5565
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]">팩스</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            031-8014-5929
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]">주소</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            경기도 수원시 대학4로 17,
            <br className="lg:hidden" /> 에이스광교타워 207호
          </div>
        </div>
      </div>
      <MapContainer />
    </div>
  );
}
export default Contact;
