import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Skills from './components/Contact';


const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Home />
                <About />
                <Projects />
                <Education />
                <Skills /> 
                
            </main>
            <Footer />
        </div>
    );
};

export default App;
