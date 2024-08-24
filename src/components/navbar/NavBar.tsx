import ContactMeButton from "./ContactMeButton";
import garlic from "../../assets/icons/garlic.svg"
import { forwardRef, useRef, useEffect, useState } from "react";

interface CustomRef {
  homeRefPoint: React.RefObject<HTMLInputElement>,
  aboutMeRefPoint: React.RefObject<HTMLInputElement>,
  projectsRefPoint: React.RefObject<HTMLInputElement>,
}

const NavBar = (_props: any, ref: any) => {
  const {
    homeRefPoint: homeRef,
    aboutMeRefPoint: aboutMeRef,
    projectsRefPoint: projectsRef,
  } = ref.current;

  const navBarRef = useRef(null);

  const [homeVisible, setHomeVisible] = useState<boolean>();
  const [aboutMeVisible, setAboutMeVisible] = useState<boolean>();
  const [projectsVisible, setProjectsVisible] = useState<boolean>();

  useEffect(() => {
    const homeObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHomeVisible(entry.isIntersecting);
    });
    if (homeRef.current) {
      homeObserver.observe(homeRef.current);
    }


    const aboutMeObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutMeVisible(entry.isIntersecting);
    });
    if (aboutMeRef.current) {
    aboutMeObserver.observe(aboutMeRef.current);
    }
    const projectObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setProjectsVisible(entry.isIntersecting);
    });
    if (projectsRef.current) {
    projectObserver.observe(projectsRef.current);
    }
  }, []);

  const homeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const aboutMeClick = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const projectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navBarRef}
      className="bg-transparent flex flex-row items-center justify-between sticky top-0"
    >
      <div className="block p-2">
        <img src={garlic} alt="garlic_icon" />
      </div>

      <div className="whitespace-nowrap duration-75 md:text-[2rem] sm:text-[1.75rem] text-[1.3rem] font-mono text-black font-semibold">
        Delayed Projects
      </div>

      <ul className="lg:flex hidden flex-row justify-evenly	w-[100%] text-black">
        <li>
          <button 
            className={`${homeVisible ? "after:w-[100%]" : ""}   
            relative 
            ease-out 
            hover:text-slate-800

            after:content-[""] 
            after:bottom-[-3px] 
            after:left-0 
            after:bg-emerald-100
            after:hover:bg-emerald-200
            after:absolute 
            after:h-[6px] 
            after:w-[0px]
            after:rounded-sm 
            after:duration-300 

            text-[1.25rem]
            `}
            onClick={homeClick}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            className={`${aboutMeVisible ? "after:w-[100%]" : ""}   
            relative 
            ease-out 
            hover:text-slate-800

            after:content-[""] 
            after:bottom-[-3px] 
            after:left-0 
            after:bg-emerald-100
            after:hover:bg-emerald-200
            after:absolute
            after:h-[6px] 
            after:w-[0px]
            after:rounded-sm 
            after:duration-300 

            text-[1.25rem]
            `}
            onClick={aboutMeClick}
          >
            About Me
          </button>
        </li>
        <li>
          <button 
            className={`${projectsVisible ? "after:w-[100%]" : ""}   
            relative 
            ease-out
            hover:text-slate-800

            after:content-[""] 
            after:bottom-[-3px] 
            after:left-0 
            after:bg-emerald-100
            after:hover:bg-emerald-200
            after:absolute 
            after:h-[6px] 
            after:w-[0px]
            after:rounded-sm 
            after:duration-300 

            text-[1.25rem]
            `}
            onClick={projectsClick}
          >
            Projects
          </button>
        </li>
      </ul>
          
      <div className="p-2">
        <ContactMeButton />
      </div>
    </nav>
  );
};

export default forwardRef<CustomRef, any>(NavBar);
