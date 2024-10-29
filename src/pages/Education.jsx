import React, { useState } from 'react'; 
import educationData from '../data/education';

const Education = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // State to track the hovered card index

    return (
        <section id="education" className="py-10 px-5 bg-black"> {/* Background set to black */}
        <h2 className="text-5xl md:text-6xl pt-3 pl-6 font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-300 mb-6 relative">
        Education
    </h2>
    
            <ul className="mt-6 flex flex-col items-center"> {/* Center align the cards */}
                {educationData.map((edu, index) => (
                    <li 
                        key={index} 
                        className={`mt-4 flex flex-col items-start w-full max-w-xl p-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out 
                            ${hoveredIndex === index ? 'bg-gray-800 text-white transform scale-105' : 'bg-gray-900 text-gray-200'}`} // Increased width and padding
                        onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index on mouse enter
                        onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered index on mouse leave
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-white">{edu.institution}</h3> {/* Increased font size */}
                        <p className="text-lg font-medium">{edu.degree} - {edu.year}</p>
                        {edu.cgpa && <p className="text-lg font-medium">CGPA: <span className="text-yellow-300">{edu.cgpa}</span></p>}
                        {edu.percentage && <p className="text-lg font-medium">Percentage: <span className="text-yellow-300">{edu.percentage}</span></p>}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;
