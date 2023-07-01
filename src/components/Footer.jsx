import React from "react";

function Footer() {
  return (
    <footer className="border-t-2 border-[#545454] p-8   text-sm xl:text-base text-black ">
      <div className="flex flex-col w-full h-full gap-1 justify-center items-center sm:items-start text-center sm:text-left">
        <div className="flex flex-row  gap-1 xl:gap-8">
          <div>RED PLUS</div>
          <div>(주)레드플러스</div>
        </div>

        <div className="flex flex-col xl:flex-row  gap-1 xl:gap-8">
          <div>대표이사:박 현</div>
          <div>개인정보책임관리자 :박 현</div>
          <div>사업자번호:672-81-02966</div>
        </div>

        <div className="flex flex-col xl:flex-row gap-1 xl:gap-8">
          <div>사무실 : 광주광역시 동구 중앙로 183, B1층</div>
          <div>전화번호 : 031 893 2116</div>
          <div>E - Mail : redplus0419@gmail.com</div>
        </div>

        <div className="flex flex-col xl:flex-row gap-1 xl:gap-8">
          <div>Copyright ⓒ 2023 RED PLUS Co., Ltd. All Right Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
