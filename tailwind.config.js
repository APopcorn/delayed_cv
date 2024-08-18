/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    backgroundImage: {
      "home-all":
        "url('/src/assets/svg/background/home/BackgroundWave.svg'), url('/src/assets/TestFormats.png'), url('/src/assets/svg/background/home/BackgroundBubble.svg'), url('/src/assets/svg/background/home/FadingCircleSVG.svg')",

      "hero-personal-photo": "url('/src/assets/TestFormats.png')",

      "hero-bubble":
        "url('/src/assets/svg/background/home/BackgroundBubble.svg')",
      "hero-waves":
        "url('/src/assets/svg/background/home/BackgroundWave.svg')",
      "hero-fading-circle":
        "url('/src/assets/svg/background/home/FadingCircleSVG.svg')",

      "about-all":
        "url('/src/assets/svg/background/aboutMe/AboutTopWave.svg'), url('/src/assets/svg/background/aboutMe/AboutBWave.svg')",

      "about-wave-top":
        "url('/src/assets/svg/background/aboutMe/AboutTopWave.svg')",
      "about-wave-bottom":
        "url('/src/assets/svg/background/aboutMe/AboutBWave.svg')",

      "projects-all":
        "url('/src/assets/svg/background/projects/ProjectsWave.svg'), url('/src/assets/svg/background/projects/ProjectsBWave.svg')",

      "projects-wave-top":
        "url('/src/assets/svg/background/projects/ProjectsWave.svg')",
      "projects-wave-bottom":
        "url('/src/assets/svg/background/projects/ProjectsBWave.svg')",
      "projects-easter": "url('/src/assets/easterEgg.png')",
      
      // company's 
      "company-myloc-construction": "url('src/assets/svg/aboutMe/companys/MylocConstruction.svg')",
      "projects-axis": "url('/src/assets/svg/aboutMe/companys/Axis.svg')",
      "projects-kjell&company": "url('/src/assets/svg/aboutMe/companys/Kjell.svg')",

      // academic
      "projects-lund": "url('/src/assets/svg/aboutMe/academic/Lund.svg')",
      "projects-cyber": "url('/src/assets/svg/aboutMe/academic/Cyber.svg')",
    },
    backgroundPosition: {
      "move-hero":
        "bottom, bottom left, top right 38%, bottom 40% left 40%",
      "move-about": "top, center bottom -1%",
      "move-projects": "top, center bottom -1%",
    },
    backgroundSize: {
      "fit-hero": "contain, contain, auto, auto",
      "fit-about": "contain, contain",
      "fit-projects": "contain, contain",
    },
    colors: {
      "hero-white": "#FFFFFF",
      "hero-pink": "#FFD7D7",
      "hero-orange": "#FF8D24",
      "hero-red": "rgba(255, 117, 73, 1)",
      "navbar-black": "#000000",
      "navbar-blue": "#98CCEF",
      "hero-text": "#565656",
      "fade-t": "rgba(255, 117, 73, 1)",
      "fade-b": "rgba(255, 117, 73, 0.08)",
      "project-fade-t": "rgba(176, 144, 158, 1)",
      "project-fade-b": "rgba(255, 117, 73, 0.2)",
      "name-fade-t": "rgba(255, 0, 0, 1)",
      "name-fade-b": "rgba(255, 141, 36, 0.5)",
      "projects-end": "#C06767",
    },
    fontFamily: {
      "tauri-hero": ["Tauri"],
    },
    gridTemplateColumns: {
      "link-bottom": "auto 10rem",
    },
  },
},
  plugins: [],
}