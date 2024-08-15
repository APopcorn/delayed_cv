import NavBar from "./components/navbar/NavBar";
import HomeContainer from "./components/home/HomeContainer";

function App() {
  return (
    <>
      <div className="flex flex-col bg-white">
        <NavBar />
        <HomeContainer />
      </div>
    </>
  )
}

export default App
