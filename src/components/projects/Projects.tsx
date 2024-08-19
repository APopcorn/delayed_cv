import ProjectShowcase from "./ProjectShowcase";
import FlippedProjectShowcase from "./FlippedProjectShowcase";
import patch from "/src/assets/projects/Patch.svg"
import rumbi from "/src/assets/projects/Rumbi.svg"
import garlic from "/src/assets/projects/Garlic.svg"

const Projects = () => {
  return (
    <div
      className="
        bg-no-repeat 
        bg-projects-all 
        bg-move-projects 
        bg-fit-projects 

        w-[100%]  
        flex flex-col items-center"
    >
      <h1 className="select-none text-[6.5vw]">Projects</h1>
      <ProjectShowcase projectTitle={"Patch"} text={"At the center of this cosmic narrative, a majestic crescent moon rises high in the starry expanse, its silvery curves adorned with delicate filigree that seems to shimmer like stardust. The lunar surface is etched with intricate patterns, echoing the ancient myths and legends of our collective imagination."} img={patch} />
      <FlippedProjectShowcase projectTitle={"Rumbi"} text={"As you gaze upon this embroidered masterpiece, the boundaries between reality and fantasy blur, and the whispers of wonder become a gentle hum, reminding us that magic is always present, waiting to be discovered. This magnet becomes a cherished keepsake, a symbol of our innate curiosity and our deep connection to the mysteries of the universe."} img={rumbi} />
      <ProjectShowcase projectTitle={"Garlic"} text={"The embroidered design is set against a soft, gradient blue background, evoking the infinite vastness of space. Delicate strands of yarn are woven together in an intricate dance, creating a textured depth that invites you to explore every nook and cranny. The magnet's surface seems almost tactile, as if you could reach out and touch the shimmering threads or the lunar landscape itself."} img={garlic} />
    </div>
  );
};

export default Projects;
