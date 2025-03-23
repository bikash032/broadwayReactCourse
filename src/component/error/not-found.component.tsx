import { Link } from "react-router";

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br">
                <h1 className="text-9xl font-extrabold text-gray-800 drop-shadow-lg">
                    404
                </h1>
                <p className="text-xl text-gray-600 mt-4">
                    Oops! The page you're looking for doesn't exist.
                </p>

                {/* Illustration */}
                <div className="mt-8 ">
                    <img
                        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                        alt="Page Not Found"
                        className="w-64 md:w-80 rounded-4xl"
                    />
                </div>

                {/* Home Button */}
                <Link
                    to="/dashboard"
                    className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    Go Home
                </Link>
            </div>
        </>
    );
};
export default NotFound;
