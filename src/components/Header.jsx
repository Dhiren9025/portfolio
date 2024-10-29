import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 sm:p-6 shadow-lg fixed w-full top-0 z-50"
        >
            <div className="container mx-auto flex justify-between items-center">
                <motion.h1 
                    className="text-2xl sm:text-4xl font-bold tracking-wide mr-1" // Smaller font size for mobile
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                 Portfolio
                </motion.h1>
                <nav>
                    <ul className="flex space-x-4 sm:space-x-8"> {/* Horizontal layout without stacking */}
                        {['Home', 'About', 'Projects', 'Education', 'Skills'].map((section) => (
                            <motion.li
                                key={section}
                                whileHover={{ scale: 1.1, color: '#ffd700', rotate: 5 }} // Scale, color change, and rotation on hover
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <a 
                                    href={`#${section.toLowerCase()}`} 
                                    className="text-sm sm:text-lg font-medium hover:text-yellow-400 transition duration-300 ease-in-out" // Responsive text size
                                >
                                    {section}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
