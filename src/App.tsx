import NavBar from "./components/navbar/NavBar";
import HomeContainer from "./components/home/HomeContainer";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <div className="flex flex-col bg-white">
        <NavBar />
        <HomeContainer />
        <AboutMe />
        <Projects />
      </div>
    </>
  )
}

export default App
