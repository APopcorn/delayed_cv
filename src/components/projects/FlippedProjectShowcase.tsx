import ExpandableTextArea from "./ExpandableTextArea";

interface ProjectShowcaseProps {
  projectTitle: any;
  text: any;
  img: any;
}

const FlippedProjectShowcase = ({ projectTitle, text, img }: ProjectShowcaseProps) => {
  return (
    <div className="
      rounded-[2rem] 
      text-hero-text 
      
      w-[75%] 
      m-8
                  
      bg-gradient-to-b 
      from-project-fade-t 
      to-project-fade-b

      md:grid 
      gap-4 
      grid-cols-5
      grid-rows-2 
      "
    >   
      <div className="
        col-start-4	col-end-6
        row-start-1	row-end-3
        m-10
      ">
        <h1 className="md:text-[5vw] text-[8vw]">{projectTitle}</h1>
        <ExpandableTextArea text={text} />
      </div>
      <div className="
        bg-white
        rounded-[2rem]
        col-start-1	col-end-4
        row-start-1	row-end-3
        m-10
        aspect-[4/3]
        ">
        <img src={img} alt="Garlic" />
      </div>
    </div>
  );
};

export default FlippedProjectShowcase;
