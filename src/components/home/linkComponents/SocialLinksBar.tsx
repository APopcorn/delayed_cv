import github from "../../../assets/icons/github.svg";
import linkedIn from "../../../assets/icons/linkedIn.svg";
import doc from "../../../assets/icons/doc.svg";

const SocialLinksBar = () => {
    return (
        <div className="absolute top-[35%] left-2  md:top-[70%]">
            <div className="flex flex-col ">
                {/* GitHub Link */}
                <a
                    href="https://github.com/APopcorn"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4"
                >
                    <img className="h-14 w-14" src={github} alt="github" />
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/ernst-padron-7057a7226/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4"
                >
                    <img className="h-14 w-14" src={linkedIn} alt="linkedIn" />
                </a>

                {/* CV/Resume Link */}
                <button
                    className="p-4"
                    type="button"
                >
                    <img className="h-14 w-14" src={doc} alt="resume" />
                </button>

                {/* Vertical Divider Line */}
                <div className="absolute right-0 top-8 bottom-8 w-[6px] bg-[#FF7B51] rounded"></div>
            </div>
        </div>
    );
};

export default SocialLinksBar;
