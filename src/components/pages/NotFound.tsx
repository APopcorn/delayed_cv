import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-home-all bg-cover bg-center flex items-center justify-center">
            <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl p-12 md:p-16 shadow-2xl max-w-2xl mx-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
                    404
                </h1>
                <p className="text-2xl md:text-3xl text-white text-center font-medium">
                    Project is currently under work
                </p>
                <div className="flex justify-center mt-8">
                    <Link
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="bg-white text-orange-500 font-bold px-16 py-5 rounded-full hover:bg-orange-100 transition-colors text-lg"
                    >
                        back to safety
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
