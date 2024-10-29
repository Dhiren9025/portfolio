import React from 'react';
import '../styles/flipCard.css'; // Assuming it's in src/styles folder

const ProjectCard = ({ project }) => {
    const { title, description, link, github, image, technologies } = project; // Added technologies

    return (
        <div className="w-70 h-[32rem] perspective card-flip"> {/* Added 'card-flip' */}
            <div className="relative w-full h-full transform-style-3d">
                
                {/* Front Side */}
                <div className="absolute inset-0 bg-gray-800 shadow-lg p-4 rounded-lg backface-hidden">
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-52 object-cover mb-4 rounded" // Increased image height here
                        />
                    )}
                    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                    <p className="text-gray-200 mb-4">{description}</p>
                    {technologies && Array.isArray(technologies) && technologies.length > 0 && (
                        <p className="text-gray-300 mb-2">
                            <strong>Technologies:</strong> {technologies.join(', ')}
                        </p>
                    )}
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gray-900 text-white p-4 rounded-lg backface-hidden rotate-y-180 flex flex-col items-center justify-center space-y-4">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg"
                            aria-label={`Live demo for ${title}`} // Accessibility
                        >
                            Live Demo
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg"
                            aria-label={`GitHub repository for ${title}`} // Accessibility
                        >
                            <img
                                src="/icons8-github-80.png" // GitHub icon link
                                alt="GitHub"
                                className="w-5 h-5 mr-2" // Adjust size as necessary
                            />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
