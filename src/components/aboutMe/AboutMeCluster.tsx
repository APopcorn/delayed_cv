import ProgrammingLanguages from "./smallAbout/ProgrammingLanguages";
import Work from "./smallAbout/Work";
import Academic from "./smallAbout/Academic";

const AboutMeCluster = () => {
  return (
    <div
      className="
        lg:grid 
        lg:gap-4 
        lg:grid-cols-3
        lg:grid-rows-2 
        w-[72%]

        flex
        flex-wrap
        "
    >
      <Work />
      <ProgrammingLanguages />
      <Academic />
    </div>
  );
};

export default AboutMeCluster;
