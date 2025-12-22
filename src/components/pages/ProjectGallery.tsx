import { Link } from "react-router-dom";
import garlic from "../../assets/projects/Garlic.svg";
import patch from "../../assets/projects/Patch.svg";
// import rumbi from "../../assets/projects/Rumbi.svg";
import garlicIcon from "../../assets/icons/garlic.svg";
import planter from "../../assets/projects/Planter.svg";
import keyboard from "../../assets/projects/Keyboard.svg";
import stm32h7 from "../../assets/projects/STM32H7.svg";
import upRumbi from "../../assets/projects/upRumbi.svg";
import stripcad from "../../assets/projects/stripcad.svg";

interface Project {
    id: number;
    name: string;
    image: string;
    link?: string;
    category: "main" | "minor";
}

const ProjectGallery = () => {
    const projects: Project[] = [
        {
            id: 1,
            name: "PATCH",
            image: patch,
            link: "/project/patch",
            category: "main",
        },
        {
            id: 2,
            name: "PLANTER",
            image: planter, 
            link: "/project/planter",
            category: "main",
        },
        {
            id: 3,
            name: "RUMBI",
            image: upRumbi,
            link: "/project/rumbi",
            category: "main",
        },
        {
            id: 4,
            name: "KEYBOARD",
            image: keyboard, 
            link: "/project/keyboard",
            category: "main",
        },
        {
            id: 5,
            name: "STM32H7",
            image: stm32h7,
            link: "/project/stm32h7",
            category: "main",
        },
        {
            id: 6,
            name: "GARLIC",
            image: garlic,
            link: "/project/garlic",
            category: "main",
        },
        {
            id: 7,
            name: "STRIP WEB",
            image: stripcad,
            link: "/project/strip-web",
            category: "minor",
        },
    ];

    const mainProjects = projects.filter((p) => p.category === "main");
    const minorProjects = projects.filter((p) => p.category === "minor");

    return (
        <div className="min-h-screen bg-white 
        
         bg-no-repeat 
        bg-projects-all 
        bg-move-projects 
        bg-fit-projects 

        w-[100%]  
        relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-60 -translate-x-1/2"></div>
            {/* <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-yellow-300 rounded-full opacity-40 translate-x-1/4"></div> */}

            {/* Header */}
            <div className="relative flex justify-between items-center p-6 md:p-8">
                <div className="flex items-center gap-3">
                    <div className="block p-2">
                        <img src={garlicIcon} alt="garlic_icon" />
                    </div>
                    <div className="whitespace-nowrap duration-75 md:text-[2rem] sm:text-[1.75rem] text-[1.3rem] font-mono text-black font-semibold">
                        Delayed Projects
                    </div>
                </div>
                <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                    Home
                </Link>
            </div>

            {/* Title */}
            <h1 className="relative text-center text-5xl md:text-6xl font-bold text-red-400 mt-8 mb-4">
                Project Gallery
            </h1>

            {/* MAIN Section */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-8 mt-12">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-400 mb-8 font-mono">
                    MAIN
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {mainProjects.map((project) => (
                        <Link
                            key={project.id}
                            to={project.link || "/"}
                            onClick={() => window.scrollTo(0, 0)}
                            className="group"
                        >
                            <div className="
                            bg-gradient-to-b from-project-fade-t to-project-fade-b  
                            rounded-[2.5rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                {/* Project Image Container */}
                                <div className="bg-white rounded-[2rem] p-8 flex items-center justify-center aspect-square mb-4">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Project Name */}
                                <div className="text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
                                        {project.name}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* MINOR Section */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-8 mb-20">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-400 mb-8 font-mono">
                    MINOR
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {minorProjects.map((project) => (
                        <Link
                            key={project.id}
                            to={project.link || "/"}
                            onClick={() => window.scrollTo(0, 0)}
                            className="group"
                        >
                            <div className="bg-gradient-to-b from-project-fade-t to-project-fade-b rounded-[2.5rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                {/* Project Image Container */}
                                <div className="bg-white rounded-[2rem] p-8 flex items-center justify-center aspect-square mb-4">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Project Name */}
                                <div className="text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
                                        {project.name}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        
        </div>
    );
};

export default ProjectGallery;
