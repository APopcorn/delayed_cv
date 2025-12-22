// import AboutMeBig from "./AboutMeBig";
import AboutMeCluster from "./AboutMeCluster";
import { forwardRef } from "react";

const AboutMe = (_props: any, ref: any) => {
  return (
    <div
      ref={ ref }
      className="
        bg-about-all 
        bg-move-about 
        bg-contain 
        bg-no-repeat 
        bg-white 
        w-[100%] flex flex-col items-center"
    >
      <h1 className="select-none text-[6.5vw] font-bold font-mono self-start pl-8 md:pl-16 text-white">ABOUT ME</h1>
      {/* <AboutMeBig /> */}
      <AboutMeCluster />
    </div>
  );
};

export default forwardRef(AboutMe);
