import github from "../../../assets/icons/github.svg";
import linkedIn from "../../../assets/icons/linkedIn.svg";
import doc from "../../../assets/icons/doc.svg";

const SocialLinksBar = () => {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col bg-gradient-to-b from-orange-200 to-orange-100 rounded-r-3xl shadow-lg">
                {/* GitHub Link */}
                <a
                    href="https://github.com/APopcorn"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 hover:bg-emerald-100 transition-colors duration-200 active:bg-emerald-50 rounded-tr-3xl"
                >
                    <img className="h-12 w-12" src={github} alt="github" />
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/ernst-padron-7057a7226/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 hover:bg-emerald-100 transition-colors duration-200 active:bg-emerald-50 border-t-2 border-orange-300"
                >
                    <img className="h-12 w-12" src={linkedIn} alt="linkedIn" />
                </a>

                {/* CV/Resume Link */}
                <button
                    className="p-4 hover:bg-emerald-100 transition-colors duration-200 active:bg-emerald-50 border-t-2 border-orange-300 rounded-br-3xl"
                    type="button"
                >
                    <img className="h-12 w-12" src={doc} alt="resume" />
                </button>

                {/* Vertical Divider Line */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-400"></div>
            </div>
        </div>
    );
};

export default SocialLinksBar;
