// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">À propos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#parcours" className="nav-link">Mon Parcours</a>
                    </li>
                    <li className="nav-item">
                        <a href="#technologies" className="nav-link">Technologies</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">Projets</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;