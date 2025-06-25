import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
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
                className="technologies-list"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div className="technologies-row">
                    <img src={`${process.env.PUBLIC_URL}/html.png`} alt="HTML" />
                    <img src={`${process.env.PUBLIC_URL}/css.png`} alt="CSS" />
                    <img src={`${process.env.PUBLIC_URL}/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png`} alt="JavaScript" />
                    <img src={`${process.env.PUBLIC_URL}/python_94570.png`} alt="Python" />
                    <img src={`${process.env.PUBLIC_URL}/php.png`} alt="PHP" />
                    <img src={`${process.env.PUBLIC_URL}/angular.png`} alt="Angular" />
                </div>
                <div className="technologies-row">
                    <img src={`${process.env.PUBLIC_URL}/java.png`} alt="Java" />
                    <img src={`${process.env.PUBLIC_URL}/spring.png`} alt="Spring" />
                    <img src={`${process.env.PUBLIC_URL}/mysql.png`} alt="MySQL" />
                    <img src={`${process.env.PUBLIC_URL}/postgresql.png`} alt="PostgreSQL" />
                    <img src={`${process.env.PUBLIC_URL}/gitlab.png`} alt="GitLab" />
                    <img src={`${process.env.PUBLIC_URL}/git.png`} alt="GitHub" />
                </div>
                <div className="technologies-row">
                    <img src={`${process.env.PUBLIC_URL}/docker.png`} alt="Docker" />
                    <img src={`${process.env.PUBLIC_URL}/insomnia.png`} alt="Insomnia" />
                    <img src={`${process.env.PUBLIC_URL}/vscode.png`} alt="VSCode" />
                    <img src={`${process.env.PUBLIC_URL}/ide.png`} alt="JetBrains" />
                    <img src={`${process.env.PUBLIC_URL}/kotlin.png`} alt="Kotlin" />
                    <img src={`${process.env.PUBLIC_URL}/react.png`} alt="React" />
                </div>
            </motion.div>
        </section>
    );
};

export default Technologies;
