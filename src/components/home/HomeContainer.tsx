import LinkGit from "./linkComponents/LinkGit"
import LinkCv from "./linkComponents/LinkCv"
import LinkLinkedIn from "./linkComponents/LinkLinkedIn"
import { forwardRef } from "react";

const HomeContainer = (_props: any, ref: any) => {
  return (
    <div ref={ref} className="bg-hero-white overflow-hidden">
      <div className="bg-home-all bg-no-repeat bg-fit-hero bg-move-hero w-[100%] h-[100svh]">
        <div className="select-none text-hero-text whitespace-nowrap font-mono">
          <div className="
            absolute
            top-[17%]
            left-[25%]
            text-[5vw]

            md:top-[17%]
            md:left-[43%]
            md:text-[3vw]

            bg-gradient-to-b 
            from-name-fade-t 
            to-name-fade-b
            inline-block 
            text-transparent 
            bg-clip-text
            duration-100	
          ">
            Welcome
          </div>
          <div className="
            absolute
            top-[20%]
            left-[5%]
            text-[7.5vw]
            
            md:top-[22%]
            md:left-[33%]
            md:text-[5.5vw]
            
            bg-gradient-to-b 
            from-name-fade-t 
            to-name-fade-b
            inline-block 
            text-transparent 
            bg-clip-text
            duration-100	
          ">
            I'm Ernst Padron,
          </div>
          <div className="
            absolute
            top-[25%]
            left-[8%]
            text-[7.5vw]

            md:top-[32%]
            md:left-[36%]
            md:text-[5.5vw]

            bg-gradient-to-b 
            from-name-fade-t 
            to-name-fade-b
            inline-block 
            text-transparent 
            bg-clip-text
            duration-100	
          ">
            Software Engineer
          </div>

          <div className="flex flex-wrap justify-center gap-x-[10%] absolute inset-x-0 bottom-[5%]">
            <LinkGit />
            <LinkCv />
            <LinkLinkedIn />
          </div>

        </div>
      </div>
    </div>
  );
};

export default forwardRef(HomeContainer);
