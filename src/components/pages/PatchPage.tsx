import { useState, useEffect, useRef } from "react";
import patch from "../../assets/projects/Patch.svg";

const PatchPage = () => {
    const [activeSection, setActiveSection] = useState("intro");

    const introRef = useRef<HTMLDivElement>(null);
    const demoRef = useRef<HTMLDivElement>(null);
    const technicalRef = useRef<HTMLDivElement>(null);
    const softwareRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const correctingRef = useRef<HTMLDivElement>(null);
    const preprocessingRef = useRef<HTMLDivElement>(null);
    const contourRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<HTMLDivElement>(null);
    const gcodeRef = useRef<HTMLDivElement>(null);
    const hardwareRef = useRef<HTMLDivElement>(null);
    const firmwareRef = useRef<HTMLDivElement>(null);
    const gcodecommandsRef = useRef<HTMLDivElement>(null);
    const designRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: "intro", ref: introRef },
                { id: "demo", ref: demoRef },
                { id: "technical", ref: technicalRef },
                { id: "software", ref: softwareRef },
                { id: "image", ref: imageRef },
                { id: "correcting", ref: correctingRef },
                { id: "preprocessing", ref: preprocessingRef },
                { id: "contour", ref: contourRef },
                { id: "path", ref: pathRef },
                { id: "gcode", ref: gcodeRef },
                { id: "hardware", ref: hardwareRef },
                { id: "firmware", ref: firmwareRef },
                { id: "gcodecommands", ref: gcodecommandsRef },
                { id: "design", ref: designRef },
            ];

            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                if (section.ref.current) {
                    const { offsetTop, offsetHeight } = section.ref.current;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { id: "intro", label: "Intro", ref: introRef },
        { id: "demo", label: "Demo", ref: demoRef },
        { id: "technical", label: "Technical", ref: technicalRef },
        { id: "software", label: "Software", ref: softwareRef, indent: 1 },
        { id: "image", label: "Image", ref: imageRef, indent: 2 },
        { id: "correcting", label: "Correcting distortions", ref: correctingRef, indent: 3 },
        { id: "preprocessing", label: "Images pre-prossessing", ref: preprocessingRef, indent: 3 },
        { id: "contour", label: "Contour Detection", ref: contourRef, indent: 3 },
        { id: "path", label: "Find Path", ref: pathRef, indent: 3 },
        { id: "gcode", label: "Make GCode", ref: gcodeRef, indent: 3 },
        { id: "hardware", label: "Hardware", ref: hardwareRef, indent: 1 },
        { id: "firmware", label: "Firmware (Marlin)", ref: firmwareRef, indent: 2 },
        { id: "gcodecommands", label: "GCode commands", ref: gcodecommandsRef, indent: 3 },
        { id: "design", label: "Design", ref: designRef },
    ];

    return (
        <>
            {/* Main Content Container */}
            <div className="relative w-full min-h-screen bg-home-wavs-only bg-no-repeat bg-fit-hero-only bg-move-hero-only">
                <div className="relative flex max-w-[1800px] mx-auto">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="hidden lg:block w-64 self-start sticky top-24 pl-8 pt-8">
                    <h2 className="font-medium text-base mb-4">
                        Project Name
                    </h2>
                    <nav className="space-y-1">
                        {navItems.map((item) => {
                            const indentClass = 
                                item.indent === 3 ? "pl-12" :
                                item.indent === 2 ? "pl-8" :
                                item.indent === 1 ? "pl-4" : "";
                            const textSize = item.indent && item.indent >= 2 ? "text-xs" : "text-sm";
                            
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.ref)}
                                    className={`
                                        block w-full text-left py-1 transition-colors
                                        ${indentClass}
                                        ${textSize}
                                        ${
                                            activeSection === item.id
                                                ? "text-orange-500 font-medium"
                                                : "text-gray-700 hover:text-gray-900"
                                        }
                                    `}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 px-4 md:px-8 pb-20">
                    {/* Hero Section */}
                    <div className="relative mb-16 pt-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-red-400 mb-8">
                            Onion Patch Project
                        </h1>
                        <div className="bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center max-w-4xl mx-auto">
                            <img
                                src={patch}
                                alt="Patch Project"
                                className="w-full max-w-2xl object-contain"
                            />
                        </div>
                    </div>

                    {/* Intro Section */}
                    <section
                        ref={introRef}
                        className="mb-16 scroll-mt-32"
                        id="intro"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold  mb-8">
                            Intro
                        </h2>
                        <div className="bg-gradient-to-br from-orange-400 to-pink-300 rounded-3xl p-8 md:p-12 shadow-xl">
                            <h3 className="text-2xl font-bold  mb-4">
                                The Main Onion Project
                            </h3>
                            <p className=" text-lg leading-relaxed">
                                The project idea is to create a polyvalent control module that can be installed into multiple software without any problem. This software without any problem. This software without any problem.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-pink-300 to-orange-200 rounded-3xl p-8 md:p-12 shadow-xl mt-8">
                            <h3 className="text-2xl font-bold  mb-4">
                                The Main Onion Project
                            </h3>
                            <p className=" text-lg leading-relaxed">
                                The project idea is to create a polyvalent control module that can be installed into multiple The problem is that the people in this planet cannot find any way to create a new software without any problem.
                            </p>
                        </div>
                    </section>

                    {/* Demo Section */}
                    <section
                        ref={demoRef}
                        className="mb-16 scroll-mt-32"
                        id="demo"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold  mb-8">
                            Demo
                        </h2>
                        <div className="bg-gradient-to-br from-orange-300 to-pink-200 rounded-3xl p-8 md:p-12 shadow-xl">
                            <p className=" text-lg leading-relaxed">
                                Demo content will go here. You can add videos, images, or interactive demonstrations of your project.
                            </p>
                        </div>
                    </section>

                    {/* Technical Section */}
                    <section
                        ref={technicalRef}
                        className="mb-16 scroll-mt-32"
                        id="technical"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold  mb-8">
                            Technical
                        </h2>

                        {/* Software Subsection */}
                        <div
                            ref={softwareRef}
                            className="mb-8 scroll-mt-32"
                            id="software"
                        >
                            <h3 className="text-3xl font-bold text-black mb-4 ml-4">
                                Software
                            </h3>
                        </div>

                        {/* Image Subsection */}
                        <div
                            ref={imageRef}
                            className="mb-8 scroll-mt-32"
                            id="image"
                        >
                            <h4 className="text-2xl font-bold text-black mb-4 ml-8">
                                Image
                            </h4>
                        </div>

                        {/* Correcting distortions */}
                        <div
                            ref={correctingRef}
                            className="mb-8 scroll-mt-32"
                            id="correcting"
                        >
                            <h5 className="text-xl font-medium text-black mb-3 ml-12">
                                Correcting distortions
                            </h5>
                            <div className="bg-gradient-to-br from-orange-500 to-red-400 rounded-3xl p-8 md:p-12 shadow-xl">
                                <p className=" text-lg leading-relaxed">
                                    We use a board to detect the distortions from the object, we try detecting. To remove the distortion from the images the camera wants to be calibrated. To do this we used...
                                </p>
                            </div>
                        </div>

                        {/* Images pre-processing */}
                        <div
                            ref={preprocessingRef}
                            className="mb-8 scroll-mt-32"
                            id="preprocessing"
                        >
                            <h5 className="text-xl font-medium text-black mb-3 ml-12">
                                Images pre-processing
                            </h5>
                            <div className="bg-gradient-to-br from-orange-400 to-red-300 rounded-3xl p-8 md:p-12 shadow-xl">
                                <p className=" text-lg leading-relaxed">
                                    Image pre-processing content goes here...
                                </p>
                            </div>
                        </div>

                        {/* Contour Detection */}
                        <div
                            ref={contourRef}
                            className="mb-8 scroll-mt-32"
                            id="contour"
                        >
                            <h5 className="text-xl font-medium text-black mb-3 ml-12">
                                Contour Detection
                            </h5>
                            <div className="bg-gradient-to-br from-orange-500 to-pink-400 rounded-3xl p-8 md:p-12 shadow-xl">
                                <p className=" text-lg leading-relaxed">
                                    Contour detection content goes here...
                                </p>
                            </div>
                        </div>

                        {/* Find Path */}
                        <div
                            ref={pathRef}
                            className="mb-8 scroll-mt-32"
                            id="path"
                        >
                            <h5 className="text-xl font-medium text-black mb-3 ml-12">
                                Find Path
                            </h5>
                            <div className="bg-gradient-to-br from-red-400 to-pink-400 rounded-3xl p-8 md:p-12 shadow-xl">
                                <p className=" text-lg leading-relaxed">
                                    Path finding content goes here...
                                </p>
                            </div>
                        </div>

                        {/* Make GCode */}
                        <div
                            ref={gcodeRef}
                            className="mb-8 scroll-mt-32"
                            id="gcode"
                        >
                            <h5 className="text-xl font-medium text-black mb-3 ml-12">
                                Make GCode
                            </h5>
                            <div className="bg-gradient-to-br from-orange-600 to-red-500 rounded-3xl p-8 md:p-12 shadow-xl">
                                <p className=" text-lg leading-relaxed">
                                    GCode generation content goes here...
                                </p>
                            </div>
                        </div>

                        {/* Hardware Subsection */}
                        <div
                            ref={hardwareRef}
                            className="mb-8 scroll-mt-32"
                            id="hardware"
                        >
                            <h3 className="text-3xl font-bold text-black mb-4 ml-4">
                                Hardware
                            </h3>
                        </div>

                        {/* Firmware (Marlin) */}
                        <div
                            ref={firmwareRef}
                            className="mb-8 scroll-mt-32"
                            id="firmware"
                        >
                            <h4 className="text-2xl font-bold text-black mb-4 ml-8">
                                Firmware (Marlin)
                            </h4>
                        </div>

                        {/* GCode commands */}
                        <div
                            ref={gcodecommandsRef}
                            className="mb-8 scroll-mt-32"
                            id="gcodecommands"
                        >
                            <h5 className="text-xl font-medium text-black mb-3 ml-12">
                                GCode commands
                            </h5>
                            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 md:p-12 shadow-xl">
                                <p className=" text-lg leading-relaxed">
                                    Hardware specifications and GCode command implementation details will go here.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Design Section */}
                    <section
                        ref={designRef}
                        className="mb-16 scroll-mt-32"
                        id="design"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold  mb-8">
                            Design
                        </h2>
                        <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl p-8 md:p-12 shadow-xl">
                            <p className=" text-lg leading-relaxed">
                                Design decisions, mockups, and visual elements will be displayed here.
                            </p>
                        </div>
                    </section>
                </main>
                </div>
            </div>
        </>
    );
};

export default PatchPage;
