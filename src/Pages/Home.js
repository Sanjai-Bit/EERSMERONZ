import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import robo from '../image/robo.json'
import Lottie from "lottie-react";
const Home = () => {
  return (
    <div
      id="Home"
      className=" relative max-w-[100vw] min-h-[100vh]  bg-black  text-center "
    >
      
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className=" absolute -top-40 scale-[2] bg-primary/20 rounded-full blur-3xl w-1/2 h-1/2 max-sm:-top-28 "></div>
      </div>
      <div className="relative flex items-center justify-center flex-col">

        <p className=" text font-mokoto mt-40 max-sm:mt-28 text-[150px] max-sm:tracking-normal tracking-wide max-sm:text-6xl ">Ersmeronz</p>

        <p className=" relative text-primary  w-1/2 max-sm:w-full max-sm:mt-2 max-sm:text-xs  -mt-10 max-sm:px-10 tracking-widest    z-10">
          A National-Level Techno Fest
        </p>
        <div className="text-4xl max-sm:mt-5 mt-10 max-sm:text-sm max-sm:px-5 flex items-center justify-center flex-col gap-2">
          <p className="text font-bold text-4xl max-sm:text-xl">MARCH 01 & 02 - 2024</p>
        </div>

        <Lottie animationData={robo} className=" w-60 max-sm:w-full max-sm:-mt-10 " />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd9ZRc35oRtCPh-wgbRFazPwDvP__uDQ4R00bek8DIbkFpaHw/viewform"

          className="  max-sm:z-40 max-sm:-mt-10    w-80 max-sm:w-60 max-sm:p-1 relative z-10 hover:bg-primary hover:bg-none hover:text-black   bg text-primary  shadow-2xl shadow-primary   ring-4 ring-offset-2 ring-offset-primary ring-primary/30 p-3 px-5 text-lg font-light rounded-full  "
        >
          Register Now
        </a>
              <div className=" max-sm:flex-col max-sm:gap-10 max-sm:mt-20 w-[100vw] max-sm:h-20  pb-40   h-96  flex items-center   justify-between px-40  z-30   max-sm:px-2">
        <div className=" text-3xl max-sm:text-base  max-sm:px-5 flex items-center justify-center flex-col gap-2  "><FaArrowTrendUp className=" max-sm:hidden text-primary" /><svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="  hidden text-primary text-3xl max-sm:inline "
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 19h2V6l6.394 2.74a1 1 0 01.606.92V19h2v2H1v-2h2V5.65a1 1 0 01.594-.914l7.703-3.424A.5.5 0 0112 1.77V19z" />
    </svg><p className=" text">Bannari Amman <br></br> Institute of Technology</p></div>
        <div className="   max-sm:text-base  text-3xl flex items-center justify-center flex-col gap-2   "><FaArrowTrendUp className=" max-sm:hidden text-primary" /><svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className=" hidden max-sm:inline text-3xl text-primary"
      
    >
      <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm96-16c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z" />
    </svg><p className=" text">Department of Electronics <br></br> and Instrumentation Engineering</p></div>
      </div>
      </div>

    </div>

  );
};

export default Home;
