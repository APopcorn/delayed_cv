import axis from "/src/assets/svg/aboutMe/companys/Axis.svg"
import myloc from "/src/assets/svg/aboutMe/companys/MylocConstruction.svg"
import kjell from "/src/assets/svg/aboutMe/companys/Kjell.svg"
import LFS from "/src/assets/svg/aboutMe/companys/LFS.svg"

const Work = () => {
  return (
    <div
      className="
      col-start-1	col-end-3
      row-start-1	row-end-3
      rounded-[1.5rem]            
      bg-gradient-to-b 
      from-fade-t 
      to-fade-b
      text-hero-text 
      p-8 md:p-10
      mb-5
      mb:mb-0
      w-[100%]
      "
    >
      <h1
        className="
        text-[2.5rem] md:text-[3rem]
        text-center
        font-bold
        font-mono
        pb-6 md:pb-8
        text-white
        "
      >
        WORK
      </h1>

      <div className="flex flex-col gap-4">
        {/* Lund Formale Student */}
        <div className="flex items-start gap-4">
          <div className="bg-white rounded-2xl p-3 flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <img
              className="w-full h-full object-contain"
              src={LFS}
              alt="myloc-construction"
            />
          </div>
          <div className="text-[1rem] md:text-[1.1rem] text-black flex-1">
            <strong>Lund Formale Student</strong> <br />
            <strong>Embedded</strong> <br />
            2025 - now
            <br /><br />
            Responsible for the STM32H7 side firmware of the front control unit supporting the torque vectoring model. Duties included planning, software architecture design, subsystem integration, and validation.
          </div>
        </div>

        <hr className="border-t-4 border-[#FFD1A7] my-4 rounded" />

        {/* Axis PTZ-fw */}
        <div className="flex items-start gap-4">
          <div className="bg-white rounded-2xl p-3 flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <img
              className="w-full h-full object-contain"
              src={axis}
              alt="axis"
            />
          </div>
          <div className="text-[1rem] md:text-[1.1rem] text-black flex-1">
            <strong>Axis PTZ-fw</strong> <br />
            Part-time worker <br />
            2022 - now
            <br /><br />
            Part-time worker in the PTZ-firmware student pool. Working on openEmbedded systems, full-stack and testing equipment. 

          </div>
        </div>

        <hr className="border-t-4 border-[#FFD1A7] my-4 rounded" />

        {/* Myloc constructions */}
        <div className="flex items-start gap-4">
          <div className="bg-white rounded-2xl p-3 flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <img
              className="w-full h-full object-contain"
              src={myloc}
              alt="myloc-construction"
            />
          </div>
          <div className="text-[1rem] md:text-[1.1rem] text-black flex-1">
            <strong>Myloc constructions</strong> <br />
            Sommer worker <br />
            2021 - 2022
            <br /><br />
            Developed a statistics page for a logistics system fitting smart TVs. Made load tests for their web portal using Jmeter. 
          </div>
        </div>

        <hr className="border-t-4 border-[#FFD1A7] my-4 rounded" />

        {/* Kjell & Company */}
        <div className="flex items-start gap-4">
          <div className="bg-white rounded-2xl p-3 flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <img
              className="w-full h-full object-contain"
              src={kjell}
              alt="kjell&company"
            />
          </div>
          <div className="text-[1rem] md:text-[1.1rem] text-black flex-1">
            <strong>Kjell & Company</strong> <br />
            Worker <br />
            2020 - 2021
            <br /><br />
            Sales associate for home electronics and on-site support for troubleshooting and installations. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
