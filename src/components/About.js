// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const About = () => {
    return (
        <section id="about" className="section section-normal">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                À propos
            </motion.h2>
            <motion.div
                className="about-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            >
                <div className="about-text">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        💻 Développeuse passionnée, toujours prête à relever de nouveaux défis !<br />
                        Étudiante en deuxième année de BUT Informatique, je suis passionnée par le développement
                        web et d'applications 📱.<br /><br />
                        J'aime concevoir des solutions créatives et efficaces, que ce soit pour des projets
                        personnels ou académiques.
                        Curieuse et motivée ✨, je suis constamment à la recherche d'opportunités pour apprendre de
                        nouvelles technologies 🚀 et perfectionner mes compétences.<br />
                        En dehors du code, j'adore voyager 🌍, pratiquer la gymnastique et explorer des univers
                        créatifs 🎨.
                    </motion.p>
                </div>
                <motion.div
                    className="about-images"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <motion.img
                        src={`${process.env.PUBLIC_URL}/gym.jpeg`}
                        alt="Gymnastique"
                        className="loisir-img"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.img
                        src={`${process.env.PUBLIC_URL}/ordinateur.jpeg`}
                        alt="Ordinateur"
                        className="loisir-img loisir-img-ordinateur"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.img
                        src={`${process.env.PUBLIC_URL}/mode.jpeg`}
                        alt="Mode"
                        className="loisir-img"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
