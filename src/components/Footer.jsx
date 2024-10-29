import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-6 sm:p-8 mt-4"> {/* Adjusted padding for smaller screens */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-12"> {/* Adjusted layout for mobile and larger screens */}
                <p className="flex items-center">
                    <img src="https://img.icons8.com/?size=100&id=37246&format=png&color=ffffff" alt="Mail" className="w-6 h-6 mr-3" />
                    Contact: 
                    <a href="mailto:devadigadhiren@gmail.com" className="text-blue-400 hover:underline ml-1"> devadigadhiren@gmail.com</a>
                </p>
                <p className="flex items-center">
                    <img src="https://img.icons8.com/?size=100&id=13616&format=png&color=ffffff" alt="Phone" className="w-6 h-6 mr-3" />
                    Phone: 
                    <a href="tel:+919353508144" className="text-blue-400  ml-1"> +91 93535 08144</a>
                </p>
                <p className="flex items-center">
                    <img src="/icons8-github-80.png" alt="GitHub" className="w-6 h-6 mr-3" />
                    GitHub: 
                    <a href="https://github.com/Dhiren9025" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1"> GitHub Profile</a>
                </p>
            </div>
            <div className="text-center mt-4"> {/* Increased margin-top for better spacing */}
                <p>© {new Date().getFullYear()} Dhiren G Devadiga. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
