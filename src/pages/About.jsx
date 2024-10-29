import React from 'react';  
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-10 px-5 bg-black relative overflow-hidden">
        <h2 className="text-5xl md:text-6xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-400 mb-5 pl-5 pb-4">
        About Me
    </h2>
    
            <div className="flex flex-col md:flex-row justify-between items-start">
                <motion.div 
                    className="w-full md:w-1/2 mb-5" 
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.68, -0.55, 0.27, 1.55] }} 
                >
                    <div className="flex flex-col space-y-4"> {/* Added a flex container with spacing */}
                        <motion.p 
                            className="text-xl md:text-2xl leading-relaxed text-white pl-5"
                            initial={{ opacity: 0, y: -50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.68, -0.55, 0.27, 1.55] }}
                        >
                            Hi! I'm Dhiren, a passionate frontend developer with a keen interest in creating interactive and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React, and I'm eager to learn the MERN stack to enhance my skill set further.
                        </motion.p>
                        <motion.p 
                            className="text-xl md:text-2xl leading-relaxed text-white pl-5"
                            initial={{ opacity: 0, y: -50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: 0.6, ease: [0.68, -0.55, 0.27, 1.55] }}
                        >
                            When I'm not coding, I enjoy exploring the latest trends in web design, reading tech blogs, and working on personal projects that challenge my creativity. I'm excited to collaborate on innovative projects that make a difference.
                        </motion.p>
                        <motion.p 
                            className="text-xl md:text-2xl leading-relaxed text-white pl-5 pb-10" // Padding-bottom for spacing
                            initial={{ opacity: 0, y: -50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }}
                        >
                            Let's connect and bring your ideas to life!
                        </motion.p>
                        {/* New Languages and Interests Section */}
                        <motion.div 
                            className="pl-5 text-white"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 0.8, delay: 1.0, ease: [0.68, -0.55, 0.27, 1.55] }}
                        >
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent mb-3">Languages</h3>
                            <p className="text-xl">English, Kannada, Tulu, Hindi</p>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent mt-5 mb-3">Interests</h3>
                            <p className="text-xl">Photo Editing, Drawing, Movies</p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                    className="w-full md:w-1/3 mb-5" 
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 3.1, delay: 0.2, ease: [0.68, -0.55, 0.27, 1.55] }} 
                >
                <h3 className="text-3xl font-bold pl-5 bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text text-transparent transition duration-300">
                Contact Info
            </h3>
            
                    <div className="mt-4 pl-5">
                        <p className="text-xl text-white">📞   Phone : <span className="text-blue-300">+91 93535 08144</span></p>
                        <p className="flex items-center text-xl text-white">
                            <img src="https://img.icons8.com/?size=100&id=37246&format=png&color=ffffff" alt="Mail" className="w-6 h-6 mr-3" />
                             Email :  
                            <a href="mailto:devadigadhiren@gmail.com" className="text-blue-300 ml-2" style={{ textDecoration: 'none' }}>
                                devadigadhiren@gmail.com
                            </a>
                        </p>
                        <p className="text-xl text-white flex items-center">
                            <img
                                src="/icons8-github-80.png" 
                                alt="GitHub"
                                className="h-8 w-8 mr-2" 
                            />
                        GitHub : <a href="https://github.com/Dhiren9025" target="_blank" rel="noopener noreferrer" className="text-blue-300 ml-2" style={{ textDecoration: 'none' }}>Dhiren9025</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
