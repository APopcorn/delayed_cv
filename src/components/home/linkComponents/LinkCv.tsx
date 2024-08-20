import doc from "../../../assets/icons/doc.svg";

const LinkCv = () => {
  return (
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
        <img className="h-[3rem] p-2" src={doc} alt="doc" />
      </button>
  );
};

export default LinkCv;
