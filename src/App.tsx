import NavBar from "./components/navbar/NavBar";
import HomeContainer from "./components/home/HomeContainer";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import { useRef } from "react";

interface CustomRef {
  homeRefPoint: React.RefObject<HTMLInputElement>,
  aboutMeRefPoint: React.RefObject<HTMLInputElement>,
  projectsRefPoint: React.RefObject<HTMLInputElement>,
}

function App() {
  const homeRef = useRef<HTMLInputElement>(null);
  const aboutMeRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);

  const refsCluster = {
    homeRefPoint: homeRef,
    aboutMeRefPoint: aboutMeRef,
    projectsRefPoint: projectsRef,
  };

  const refs = useRef<CustomRef>(refsCluster);

  return (
    <>
      <div className="flex flex-col bg-white">
        <NavBar ref={refs} />
        <HomeContainer ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <Projects ref={projectsRef} />
      </div>
    </>
  )
}

export default App
