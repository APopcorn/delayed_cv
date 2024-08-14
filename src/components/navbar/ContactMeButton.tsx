import mail from "../../assets/icons/mail.svg";

const ContactMeButton = () => {
  return (
    <>
      <button
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
          "
        type="submit"
      >
        <p className="md:block hidden">
          Contact Me
        </p>
        <img className="md:hidden h-[40px] p-2" src={mail} alt="mail" />
      </button>
    </>
  );
};

export default ContactMeButton;
