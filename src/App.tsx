import NavBar from "./components/navbar/NavBar";
import HomeContainer from "./components/home/HomeContainer";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <>
      <div className="flex flex-col bg-white">
        <NavBar />
        <HomeContainer />
        <AboutMe />
      </div>
    </>
  )
}

export default App
