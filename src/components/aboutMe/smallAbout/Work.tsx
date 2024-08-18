import axis from "/src/assets/svg/aboutMe/companys/Axis.svg"
import myloc from "/src/assets/svg/aboutMe/companys/MylocConstruction.svg"
import kjell from "/src/assets/svg/aboutMe/companys/Kjell.svg"

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
      p-10
      mb-5
      mb:mb-0
      w-[100%]
      "
    >
      <div
        className="
        md:grid 
        md:grid-cols-5
        md:grid-rows-4
        h-[90%]
        items-center
        "
      >
        <h1
          className="
          text-[3rem]
          col-start-3	col-end-4
          row-start-1	row-end-2
          justify-items-center // obs
          md:pb-1 pb-6
          "
        >
          Work
        </h1>
        <>
          <img
            className="col-start-1	col-end-2 row-start-2 row-end-3"
            src={axis}
            alt="axis"
          />
          <div className="text-[1.25rem] pl-5 col-start-2 col-end-6 row-start-2 row-end-3 md:pb-1 pb-6">
            <strong>Axis PTZ-fw</strong> <br />
            Part-time worker <br />
            2022 - now;
            <br />
            Working in the oc constructions <br />
            Sommer worker <br />
            2021 - 2022 <br />
            Working as front-end developer using React and
            typescript and student task fores doing varies task
          </div>
        </>
        <>
          <img
            className="col-start-1	col-end-2 row-start-3 row-end-4"
            src={myloc}
            alt="myloc-construction"
          />
          <div className="text-[1.25rem] pl-5 col-start-2 col-end-6 row-start-3 row-end-4 md:pb-1 pb-6">
            <strong>Myloc constructions</strong> <br />
            Sommer worker <br />
            2021 - 2022 <br />
            Working as front-end developer using React and
            typescript and server-preference tester using Jmeter.
          </div>
        </>
        <>
          <img
            className="col-start-1	col-end-2 row-start-4 row-end-5"
            src={kjell}
            alt="kjell&company"
          />
          <div className="text-[1.25rem] pl-5 col-start-2 col-end-6 row-start-4 row-end-5 md:pb-1 pb-6">
            <strong>Kjell & Company</strong> <br />
            Worker <br />
            2020 - 2021
          </div>
        </>
      </div>
    </div>
  );
};

export default Work;
