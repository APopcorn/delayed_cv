import ContactMeButton from "./ContactMeButton";
import garlic from "../../assets/icons/garlic.svg"

const NavBar = () => {
  return (
    <nav
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
          <button className={`relative text-[1.25rem]`}>
            Home
          </button>
        </li>
        <li>
          <button className={`relative text-[1.25rem]`}>
            About Me
          </button>
        </li>
        <li>
          <button className={`relative text-[1.25rem]`}>
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

export default NavBar;
