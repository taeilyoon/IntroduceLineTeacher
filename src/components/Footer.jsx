import React from "react";

function Footer() {
  return (
    <footer className="border-t-2 border-[#545454] p-8 text-sm xl:text-base text-black ">
      <div className="flex flex-col w-full h-full gap-1 justify-center items-center xl:items-start text-center xl:text-left">
        <div className="flex flex-row gap-1 xl:gap-8">
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_1}</div>
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_2}</div>
        </div>

        <div className="flex flex-col xl:flex-row gap-1 xl:gap-8">
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_3}</div>
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_4}</div>
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_5}</div>
        </div>

        <div className="flex flex-col xl:flex-row gap-1 xl:gap-8">
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_6}</div>
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_7}</div>
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_8}</div>
        </div>

        <div className="flex flex-col xl:flex-row gap-1 xl:gap-8">
          <div>{process.env.NEXT_PUBLIC_FOOTER_CONTENT_9}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
