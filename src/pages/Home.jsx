import React from 'react'; 
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section
            id="home"
            className="flex items-center justify-center h-screen bg-black bg-cover bg-center"
        >
            <div className="text-center text-white p-5">
                <motion.h2 
                    className="text-6xl font-bold mb-4" // Added bottom margin for mobile view only
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-white">Welcome to my</span>
                    <span className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg px-4">
                        Portfolio
                    </span>
                </motion.h2>
                <motion.p 
                    className="mt-2 text-5xl p-5" // Increased font size for the description
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.1, color: '#00ffcc' }} // Add hover effect
                >
                    Hi! I'm Dhiren, a passionate frontend developer.
                </motion.p>
                <div className="mt-4 space-x-4 p-5">
                    {/* Download CV button */}
                    <motion.a 
                        href="/cv/Dhiren Devadiga.pdf"
                        download
                        aria-label="Download CV"
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r  from-purple-700 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <img src="https://img.icons8.com/?size=100&id=83988&format=png&color=ffffff" alt="Download Icon" className="w-6 h-6 mr-2" />
                        Download CV
                    </motion.a>
                    {/* View CV button */}
                    <motion.a 
                        href="/cv/Dhiren Devadiga.pdf" // Ensure this path is correct
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View CV"
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <img src="https://img.icons8.com/?size=100&id=1FzpiPnS9i6w&format=png&color=ffffff" alt="View Icon" className="w-6 h-6 mr-2" />
                        View CV
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Home;
