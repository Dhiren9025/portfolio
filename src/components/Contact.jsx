import React from 'react';

// Skill icons using direct URLs
const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/ffffff/html-5.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/ffffff/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/ffffff/javascript.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/48/ffffff/react-native.png' },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/ffffff/tailwindcss.png' },
    { name: 'Git & GitHub', icon: 'https://img.icons8.com/color/48/ffffff/git.png' },
    { name: 'APIs', icon: 'https://img.icons8.com/color/48/ffffff/api.png' },
    { name: 'Responsive Design', icon: '/icons8-responsive-design-100.png' }, // Updated URL
    { name: 'C', icon: '/icons8-c-programming-48.png' },
    { name: 'Java', icon: 'https://img.icons8.com/color/48/ffffff/java-coffee-cup-logo.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/ffffff/python.png' }, // Python icon from Icons8
    { name: 'Chat GPT', icon: 'https://img.icons8.com/?size=100&id=TUk7vxvtu6hX&format=png&color=ffffff' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-10 px-5 bg-black"> {/* Background color set to black */}
        <h2 className="text-5xl md:text-6xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-300 mb-4 px-4">
        Skills
    </h2>
     {/* Left-aligned red heading */}
            <div className="mt-6 text-center">
                <p className="text-white text-left px-10 text-2xl pb-5">Here are some of the technologies and skills I am proficient in:</p>
                <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map(skill => (
                        <li key={skill.name} className="flex flex-col items-center relative"> {/* Added relative positioning */}
                            <div className="transition-transform transform hover:scale-110"> {/* Move hover effect to a wrapper div */}
                                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
                            </div>
                            <span className="text-white">{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
