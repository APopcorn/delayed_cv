import linkedIn from "../../../assets/icons/linkedIn.svg";

const LinkLinkedIn = () => {
  return (
    <a
      href="https://www.linkedin.com/in/ernst-padron-7057a7226/"
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
        <img className="h-[3rem] p-2" src={linkedIn} alt="linkedIn" />
      </button>
    </a>
  );
};

export default LinkLinkedIn;
