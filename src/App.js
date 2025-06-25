// src/App.js
import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Parcours from './components/Parcours';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Footer from "./components/Footer";

const App = () => {
    const handleDownloadCV = () => {
        const cvUrl = `${process.env.PUBLIC_URL}/CV.pdf`;
        window.open(cvUrl, '_blank');
    };

    const translations = {
        downloadCv: "Télécharger mon CV"
    };

    return (
        <div className="app">
            <Header />
            <main>
                <Presentation
                    handleDownloadCV={handleDownloadCV}
                    translations={translations}
                />
                <About />
                <Parcours />
                <Technologies />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
};

export default App;
