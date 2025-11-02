import { Link } from "react-router-dom";
import garlic from "../../assets/icons/garlic.svg";

const GalleryButton = () => {
    return (
        <>
            <Link
                to="/project-gallery"
                className="
          md:h-[57px] 
          md:px-[54px]
          md:rounded-md  
          
          font-semibold 
          text-white 

          rounded-full
          duration-300 
          bg-black 
          drop-shadow-md 
          hover:bg-emerald-100
          hover:text-black
          active:duration-30
          active:bg-white
          active:text-black

          flex
          items-center
          justify-center
          "
            >
                <p className="md:block hidden">Project Gallery</p>
                <img
                    className="md:hidden h-[40px] p-2"
                    src={garlic}
                    alt="gallery"
                />
            </Link>
        </>
    );
};

export default GalleryButton;
