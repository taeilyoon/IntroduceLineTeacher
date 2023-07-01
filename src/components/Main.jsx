"use client";

import React from "react";
import MainLogo from "public/icons/HTSImage.svg";
import Image from "next/image";

function Main() {
  return (
    <div className="flex-grow bg-main-texture bg-inherit bg-cover  pb-8">
      <div className="flex flex-col xl:flex-row w-full h-full justify-center  px-2 xl:px-28 mt-8 xl:justify-between items-center ">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col xl:flex-row gap-6 w-full items-center xl:justify-between">
            <div className="flex  max-[360px]:text-3xl  text-4xl font-bold text-[#545454] ">
              추세선생- <span className="text-black">HTS</span>
            </div>
            <div className=" self-center ">
              <button className="flex text-xl items-center bg-[#54AC35] text-white font-bold border-0 py-1  px-3 focus:outline-none hover:bg-gray-200 rounded ">
                다운로드
              </button>
            </div>
          </div>
          <div className=" pl-0 xl:pl-16 font-bold text-lg  w-max[360px]: gap-4 flex flex-col self-center justify-center w-full text-center xl:text-left  max-[360px]:text-base  max-[360px]:font-extrabold mb-2 ">
            <div>테마의 추세와 테마종목별 추세현황을 한눈에</div>
            <div>자동추세선을 이용한 기술적분석 자동화 차트솔루션</div>

            <div>분할매매 정보와 전략보고서를 실시간 제공</div>
            <div>상승각도를 판정, 기준각 유효성 평가 시스템</div>
          </div>
        </div>
        <div>
          <Image src={MainLogo} width={500} height={500} alt="htsImage" />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full h-full justify-center  px-2 xl:px-28 mt-8 xl:justify-between items-center">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col xl:flex-row gap-6 w-full items-center xl:justify-between">
            <div className="flex  max-[360px]:text-3xl  text-4xl font-bold text-[#545454] ">
              추세선생- <span className="text-black">HTS</span>
            </div>
            <div className=" self-center ">
              <button className="flex text-xl items-center bg-[#54AC35] text-white font-bold border-0 py-1  px-3 focus:outline-none hover:bg-gray-200 rounded ">
                다운로드
              </button>
            </div>
          </div>
          <div className=" pl-0 xl:pl-16 font-bold text-lg  w-max[360px]: gap-4 flex flex-col self-center justify-center w-full text-center xl:text-left  max-[360px]:text-base  max-[360px]:font-extrabold mb-2 ">
            <div>테마의 추세와 테마종목별 추세현황을 한눈에</div>
            <div>자동추세선을 이용한 기술적분석 자동화 차트솔루션</div>

            <div>분할매매 정보와 전략보고서를 실시간 제공</div>
            <div>상승각도를 판정, 기준각 유효성 평가 시스템</div>
          </div>
        </div>
        <div>
          <Image src={MainLogo} width={500} height={500} alt="htsImage" />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full h-full justify-center  px-2 xl:px-28 mt-8 xl:justify-between items-center">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col xl:flex-row gap-6 w-full items-center xl:justify-between">
            <div className="flex  max-[360px]:text-3xl  text-4xl font-bold text-[#545454] ">
              추세선생- <span className="text-black">HTS</span>
            </div>
            <div className=" self-center ">
              <button className="flex text-xl items-center bg-[#54AC35] text-white font-bold border-0 py-1  px-3 focus:outline-none hover:bg-gray-200 rounded ">
                다운로드
              </button>
            </div>
          </div>
          <div className=" pl-0 xl:pl-16 font-bold text-lg  w-max[360px]: gap-4 flex flex-col self-center justify-center w-full text-center xl:text-left  max-[360px]:text-base  max-[360px]:font-extrabold mb-2 ">
            <div>테마의 추세와 테마종목별 추세현황을 한눈에</div>
            <div>자동추세선을 이용한 기술적분석 자동화 차트솔루션</div>

            <div>분할매매 정보와 전략보고서를 실시간 제공</div>
            <div>상승각도를 판정, 기준각 유효성 평가 시스템</div>
          </div>
        </div>
        <div>
          <Image src={MainLogo} width={500} height={500} alt="htsImage" />
        </div>
      </div>
    </div>
  );
}

export default Main;

// "use client";

// import React from "react";
// import HTSImage from "public/icons/HTSImage.svg";

// import Image from "next/image";

// function Main() {
//   return (
//     <div classNameName="flex-grow ">
//       <div className="flex flex-col w-full h-full justify-between px-28 mt-8 bg-main-texture bg-inherit bg-cover">
//         <div className="container px-5 py-24 mx-auto flex flex-wrap">
//           <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
//             <div className="flex flex-row flex-none w-full sm:p-4 px-4 mb-6">
//               <h1 className="title-font font-medium text-xl mb-2 text-gray-900 w-full">
//                 <div className="flex w-full  text-4xl font-bold text-[#545454] flex-none">
//                   추세선생- <span className="text-black">HTS</span>
//                 </div>
//               </h1>
//               <div className="leading-relaxed flex-none self-center justify-end">
//                 <button className="flex text-lg items-center bg-[#54AC35] text-white font-bold border-0 py-1  px-3 focus:outline-none hover:bg-gray-200 rounded ">
//                   다운로드
//                 </button>
//               </div>
//             </div>
//             <div className="flex flex-col gap-6 pl-16 font-bold text-lg">
//               <div className=" ">
//                 테마의 추세와 테마종목별 추세현황을 한눈에
//               </div>
//               <div className=" ">
//                 자동추세선을 이용한 기술적분석 자동화 차트솔루션
//               </div>
//               <div className=" ">분할매매 정보와 전략보고서를 실시간 제공</div>
//               <div className=" ">
//                 상승각도를 판정, 기준각 유효성 평가 시스템
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
//             <Image
//               src={HTSImage}
//               className="object-cover object-center w-full h-full"
//               alt="stats"
//             />
//           </div>
//         </div>

//         {/* //////////////////////////////// */}
//         <div className="container px-5 py-24 mx-auto flex flex-wrap">
//           <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
//             <div className="w-full sm:p-4 px-4 mb-6">
//               <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
//                 <div className="flex w-full  text-4xl font-bold text-[#545454]">
//                   추세선생- <span className="text-black">HTS</span>
//                 </div>
//               </h1>
//               <div className="leading-relaxed">
//                 <button className="flex text-lg items-center bg-[#54AC35] text-white font-bold border-0 py-1  px-3 focus:outline-none hover:bg-gray-200 rounded ">
//                   다운로드
//                 </button>
//               </div>
//             </div>
//             <div className="flex flex-col gap-6">
//               <div className=" ">
//                 테마의 추세와 테마종목별 추세현황을 한눈에
//               </div>
//               <div className=" ">
//                 자동추세선을 이용한 기술적분석 자동화 차트솔루션
//               </div>
//               <div className=" ">분할매매 정보와 전략보고서를 실시간 제공</div>
//               <div className=" ">
//                 상승각도를 판정, 기준각 유효성 평가 시스템
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
//             <Image
//               src={HTSImage}
//               className="object-cover object-center w-full h-full"
//               alt="stats"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;
