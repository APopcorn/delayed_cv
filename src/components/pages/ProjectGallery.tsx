import { Link } from "react-router-dom";
import garlic from "../../assets/projects/Garlic.svg";
import patch from "../../assets/projects/Patch.svg";
import rumbi from "../../assets/projects/Rumbi.svg";

interface Project {
    id: number;
    name: string;
    image: string;
    link?: string;
}

const ProjectGallery = () => {
    // Sample projects - you can replace with your actual project data
    const projects: Project[] = [
        {
            id: 1,
            name: "PATCH",
            image: garlic,
            link: "/project/patch",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-100 to-purple-200 relative">
            {/* Header */}
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                    <span className="font-mono text-gray-800">
                        Onion Project
                    </span>
                </div>
                <Link
                    to="/"
                    className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition inline-block"
                >
                    Home
                </Link>
            </div>

            {/* Title */}
            <h1 className="text-center text-4xl md:text-5xl font-bold text-red-500 mt-8 mb-12">
                Project Gallery
            </h1>

            {/* Project Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={project.link || "/"}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                {/* Project Image Container */}
                                <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl p-8 flex items-center justify-center aspect-square mb-4">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-contain drop-shadow-lg"
                                    />
                                </div>

                                {/* Project Name */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-black text-white bg-gradient-to-r from-orange-400 to-pink-400 rounded-full py-2 px-6 inline-block tracking-wider">
                                        {project.name}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-64">
                <svg
                    viewBox="0 0 1440 320"
                    className="absolute bottom-0 w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#b39ddb"
                        fillOpacity="0.8"
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default ProjectGallery;
