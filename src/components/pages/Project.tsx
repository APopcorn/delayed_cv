import { Link, Outlet } from "react-router-dom";
import garlicIcon from "../../assets/icons/garlic.svg";
import GalleryButton from "../navbar/GalleryButton";

const Project = () => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
 
            <nav
                className="bg-transparent flex flex-row items-center justify-between sticky top-0 z-40"
            >
                <div className="flex items-center gap-3">
                    <div className="block p-2">
                        <img src={garlicIcon} alt="garlic_icon" />
                    </div>
                    <div className="whitespace-nowrap duration-75 md:text-[2rem] sm:text-[1.75rem] text-[1.3rem] font-mono text-black font-semibold">
                        Delayed Projects
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <Link
                        to="/"
                        className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/project-gallery"
                        className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition mr-4"
                    >
                        Project Gallery
                    </Link>
                </div>
                
          
            </nav>

            {/* Child routes render here */}
            <Outlet />
        </div>
    );
};

export default Project;
