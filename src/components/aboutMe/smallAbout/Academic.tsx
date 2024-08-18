import lth from "/src/assets/svg/aboutMe/academic/Lund.svg"
import cyber from "/src/assets/svg/aboutMe/academic/Cyber.svg"

const Academic = () => {
  return (
    <div
      className="
        col-start-3	col-end-4
        row-start-2	row-end-3
        rounded-[1.5rem]            
        bg-gradient-to-b 
        from-fade-t 
        to-fade-b
        text-hero-text
        p-10
        mb-5
        mb:mb-0
        w-[100%]
      "
    >
      <h1 className="text-[2rem]">Academic</h1>
      <div className="flex flex-nowrap lg:flex-row flex-col gap-4 mb-4 mt-4">
        <img
          className="w-[7rem]"
          src={lth}
          alt="Lund"
        />
        <div>
          Academic Faculty of Engineering (LTH), Lund University
          studying Computer science
          <br />
          2021 - present
        </div>
      </div>
      <div className="flex flex-nowrap lg:flex-row flex-col gap-4">
        <img
          className="w-[7rem]"
          src={cyber}
          alt="Cyber"
        />
        <div>
          Cybergymnasiet <br />
          Natural Science Programme <br />
          2017 - 2020
        </div>
      </div>
    </div>
  );
};

export default Academic;
