
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBlog } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const navItems = [
    { icon: <FaHome size={24} />, label: "Home" },
    { icon: <FaUser size={24} />, label: "Profile" },
    { icon: <SiGoogleanalytics size={24} />, label: "Portfolio" },
    { icon: <FaBriefcase size={24} />, label: "Services" },
    { icon: <FaEnvelope size={24} />, label: "Contact" },
    { icon: <FaBlog size={24} />, label: "Blog" },
];
const Home = () => {
    return (<>
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="fixed top-0 left-0 w-16 h-screen bg-dark-blue p-4 space-y-4 flex flex-col items-center">
                {/* Logo */}
                <div className="flex items-center justify-center mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 0a10 10 0 0110 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 18a8 8 0 100-16A8 8 0 0010 18zm1-12a1 1 0 11-2 0v4a1 1 0 112 0V8z" />
                    </svg>
                </div>

                {/* Navigation Icons */}
                <ul className="space-y-6 flex-1 flex flex-col items-center">
                    {navItems.map((item, index) => (
                        <li key={index} className="group relative">
                            <a
                                href="#"
                                className="flex items-center justify-center p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                aria-label={item.label}
                            >
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                    {item.icon}
                                </span>
                                <span className="absolute left-full ml-4 px-3 py-2 rounded-md bg-gray-800 text-white opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200 text-sm">
                                    {item.label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="ml-16 flex-1 ">
                <section className="py-20 container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-black to-dark-blue min-h-screen">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hi! I'm Philip</h1>
                        <p className="text-xl mb-4 text-blue-300">UI/UX Designer</p>
                        <p className="text-gray-300 mb-6 max-w-md">
                            As a passionate UI/UX designer, I thrive on creating beautiful and intuitive digital experiences that delight users.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="btn-primary bg-blue-600 hover:bg-blue-700 text-white rounded px-6 py-3 transition-colors duration-200">
                                My Resume
                            </button>
                            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white rounded px-6 py-3 transition-colors duration-200">
                                Watch Video
                            </button>
                        </div>
                        <div className="mt-10 flex items-center space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5 9 5v6a2 2 0 01-2 2H9a2 2 0 01-2-2zm0 0V9a2 2 0 012-2 2 2 0 012 2zm0 0V9a2 2 0 00-2-2 2 2 0 00-2 2zm0 0V9a2 2 0 012-2 2 2 0 012 2z" />
                            </svg>
                            <div>
                                <h2 className="text-2xl font-bold text-white">20+</h2>
                                <p className="text-sm text-gray-300">Winning awards</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative">
                            <img
                                src="https://source.unsplash.com/random/600x600"
                                alt="Philip"
                                className="h-64 w-64 md:h-80 md:w-80 object-cover rounded-full shadow-lg border-4 border-blue-500"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-3 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>)
}

export default Home