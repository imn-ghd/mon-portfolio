// src/components/Parcours.js
import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../Timeline';

const Parcours = () => {
    const events = [
        { year: '2022', description: 'Obtention du Baccalauréat général scientifique avec mention bien.', image: `${process.env.PUBLIC_URL}/bac.jpeg` },
        { year: '2022-2024', description: "Animatrice en centre de loisir à la mairie d'Armentières", image: `${process.env.PUBLIC_URL}/mairie.jpeg` },
        { year: '2023-2024', description: "Étudiante en première année de BUT à l'iut de Lens", image: `${process.env.PUBLIC_URL}/iut.jpeg` },
        { year: '2024-2025', description: "Étudiante en deuxième année de BUT à l'iut de Lens", image: `${process.env.PUBLIC_URL}/iut.jpeg` },
        { year: 'Mai - Juillet 2025', description: "Stage en développement web", image: `${process.env.PUBLIC_URL}/stage.jpeg` },
    ];

    return (
        <section id="parcours" className="section section-normal">
            <motion.h2
                className="section-title parcours-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Mon Parcours
            </motion.h2>
            <Timeline events={events} />
        </section>
    );
};

export default Parcours;
