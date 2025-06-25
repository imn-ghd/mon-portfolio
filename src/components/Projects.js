import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Site vitrine HTML/CSS/JavaScript",
            description: "Site vitrine pour l'organisation de concerts avec intégration d'éléments interactifs.",
            technologies: "HTML, CSS, JavaScript",
            image: `${process.env.PUBLIC_URL}/siteVitrine.png`
        },
        {
            title: "Marathon web",
            description: "Création d'un site web en Laravel lors d'un challenge de 36h en équipe.",
            technologies: "Laravel, PHP",
            image: `${process.env.PUBLIC_URL}/marathon.png`
        },
        {
            title: "Site vitrine Elec Éco Habitation",
            description: "Création d'un site vitrine pour un artisan électricien avec envoi de demande de devis via formulaire.",
            technologies: "HTML, CSS, JavaScript, PHP",
            image: `${process.env.PUBLIC_URL}/elec.png`
        },
        {
            title: "GestionDepenses",
            description: "Application web pour gérer les dépenses avec système d'authentification.",
            technologies: "Angular, PHP",
            image: `${process.env.PUBLIC_URL}/GestionDepense.png`
        },
        {
            title: "Portfolio personnel",
            description: "Portfolio personnel interactif.",
            technologies: "React.js (JSX), CSS, JavaScript",
            image: `${process.env.PUBLIC_URL}/portfolio.png`
        },
        {
            title: "Site de location de voitures",
            description: "Application web de réservation et gestion de véhicules (projet SAE).",
            technologies: "Angular, Laravel",
            image: `${process.env.PUBLIC_URL}/speedloc.png`
        },
        {
            title: "Gestion de Recettes",
            description: "Application web pour gérer et partager des recettes avec authentification.",
            technologies: "Laravel, PHP",
            image: `${process.env.PUBLIC_URL}/MamyLens.png`
        },
        {
            title: "Automatic Judge",
            description: "Juge automatique développé en SAE permettant de tester automatiquement des fichiers sources (Java, C...) avec compilation et évaluation.",
            technologies: "Java, Bash, C, Python",
            image: `${process.env.PUBLIC_URL}/juge.jpeg`
        }
    ];

    return (
        <section className="projects-section section-normal" id="projects">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Mes Projets
            </motion.h2>
            <motion.div
                className="projects-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">{project.technologies}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
