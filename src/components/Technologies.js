import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
    const techList = [
        { src: "/html.png", alt: "HTML" },
        { src: "/css.png", alt: "CSS" },
        { src: "/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png", alt: "JavaScript" },
        { src: "/python_94570.png", alt: "Python" },
        { src: "/php.png", alt: "PHP" },
        { src: "/angular.png", alt: "Angular" },
        { src: "/java.png", alt: "Java" },
        { src: "/spring.png", alt: "Spring" },
        { src: "/mysql.png", alt: "MySQL" },
        { src: "/postgresql.png", alt: "PostgreSQL" },
        { src: "/gitlab.png", alt: "GitLab" },
        { src: "/git.png", alt: "GitHub" },
        { src: "/docker.png", alt: "Docker" },
        { src: "/insomnia.png", alt: "Insomnia" },
        { src: "/vscode.png", alt: "VSCode" },
        { src: "/ide.png", alt: "JetBrains" },
        { src: "/kotlin.png", alt: "Kotlin" },
        { src: "/react.png", alt: "React" }
    ];

    return (
        <section id="technologies" className="section section-inverse">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Technologies
            </motion.h2>
            <motion.div
                className="technologies-grid"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {techList.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <img
                            src={`${process.env.PUBLIC_URL}${tech.src}`}
                            alt={tech.alt}
                        />
                        <p>{tech.alt}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Technologies;
