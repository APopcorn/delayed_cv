import ExpandableTextArea from "./ExpandableTextArea";

interface ProjectShowcaseProps {
  projectTitle: any;
  text: any;
  link: any;
  img: any;
}

const ProjectShowcase = ({ projectTitle, text, link, img }: ProjectShowcaseProps) => {
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
        col-start-1	col-end-3
        row-start-1	row-end-3
        m-10
      ">
        <a 
          href={link}
          target="_blank" 
          rel="noreferrer"
        >
          <h1 className="md:text-[5vw] text-[8vw]">{projectTitle}</h1>
        </a>
        <ExpandableTextArea text={text} />
      </div>
      <a 
        href={link}
        target="_blank" 
        rel="noreferrer"
        className="
          bg-white
          rounded-[2rem]
          col-start-3	col-end-6
          row-start-1	row-end-3
          m-10
          aspect-[4/3]
          "
      >
        <div className="m-8">
          <img className="flex" src={img} alt={projectTitle} />
        </div>
      </a>
    </div>
  );
};

export default ProjectShowcase;
