// src/components/Presentation.js
import React from 'react';
import { motion } from 'framer-motion';

const Presentation = ({ handleDownloadCV, translations }) => {
    return (
        <section className="presentation section-normal" id="presentation">
            <div className="presentation-content" data-aos="fade-up">
                <motion.div
                    className="text-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="title">Imène Ghoudane</h1>
                    <p className="description">Étudiante en informatique</p>
                    <p className="location">📍Lille et ses alentours</p>
                    <motion.button
                        className="cv-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleDownloadCV}
                    >
                        {translations.downloadCv}
                    </motion.button>
                </motion.div>
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/photoImene.png`}
                        alt="Imène Ghoudane"
                        className="circular-img"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Presentation;
