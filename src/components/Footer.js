import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    © {new Date().getFullYear()} | Développé par Imène Ghoudane
                </p>
                <div className="footer-links">
                    <a
                        href="https://www.linkedin.com/in/imene-ghoudane"
                        className="footer-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:imene.ghoudane@gmail.com"
                        className="footer-link"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
