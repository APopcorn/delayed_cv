import AboutMeBig from "./AboutMeBig";
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
      <h1 className="select-none text-[6.5vw]">About Me</h1>
      <AboutMeBig />
      <AboutMeCluster />
    </div>
  );
};

export default forwardRef(AboutMe);
