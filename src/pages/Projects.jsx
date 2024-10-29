import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-10 px-5 bg-white">
        <h2 className="text-5xl md:text-6xl font-bold text-left pl-5 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-200 mb-8">
    
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center"> {/* 5 columns for large screens */}
                {Array.isArray(projects) && projects.length > 0 ? (
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No projects available.</p>
                )}
            </div>
        </section>
    );
};

export default Projects;
