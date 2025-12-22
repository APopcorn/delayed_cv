import ExpandableTextArea from "./ExpandableTextArea";
import { Link } from "react-router-dom";

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
      
      w-[85%] md:w-[75%] 
      m-8
                  
      bg-gradient-to-b 
      from-project-fade-t 
      to-project-fade-b

      flex flex-col md:grid 
      gap-4 
      md:grid-cols-5
      md:grid-rows-1
      p-6 md:p-10
      "
    >   
      <div className="
        md:col-start-1 md:col-end-3
        md:row-start-1 md:row-end-2
        flex flex-col
      ">
        <h1 className="text-[10vw] md:text-[5vw] font-bold font-mono text-white mb-4">{projectTitle}</h1>
        <div className="text-black text-[1rem] md:text-[1.1rem] mb-6 flex-grow">
          <ExpandableTextArea text={text} />
        </div>
        <Link 
          to={`/project/${projectTitle.toLowerCase()}`}
          className="
            bg-[#5c3a3a]
            text-white
            px-16 py-5
            text-center
            font-medium
            text-[1.1rem]
            hover:bg-[#4a2e2e]
            transition-colors
            inline-block
            w-fit
          "
        >
          To Project page
        </Link>
      </div>
      <a 
        href={link}
        target="_blank" 
        rel="noreferrer"
        className="
          bg-white
          rounded-[2rem]
          md:col-start-3 md:col-end-6
          md:row-start-1 md:row-end-2
          p-8
          flex items-center justify-center
          aspect-[4/3]
          "
      >
        <img className="w-full h-full object-contain" src={img} alt={projectTitle} />
      </a>
    </div>
  );
};

export default ProjectShowcase;
