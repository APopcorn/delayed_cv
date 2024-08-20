import github from "../../../assets/icons/github.svg";

const LinkGit = () => {
  return (
    <a 
      href="https://github.com/APopcorn" 
      target="_blank" 
      rel="noreferrer"
    >
      <button
        className="
          p-1
          rounded-[0.5rem]
          bg-hero-orange 
          drop-shadow-md
          hover:bg-emerald-100
          duration-200
          active:bg-emerald-50
          "
        type="submit"
      >
        <img className="h-[3rem] p-2" src={github} alt="github" />
      </button>
    </a>
  );
};

export default LinkGit;
