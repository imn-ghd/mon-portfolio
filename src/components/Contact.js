import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            value: "imene.gh59@gmail.com",
            action: "mailto:imene.gh59@gmail.com"
        },
        {
            icon: "💼",
            title: "LinkedIn",
            value: "Imène Ghoudane",
            action: "https://www.linkedin.com/in/imene-ghoudane"
        },
        {
            icon: "📱",
            title: "Téléphone",
            value: "06 95 93 XX XX",
            action: "tel:+33695938471"
        }
    ];

    return (
        <section className="section section-normal" id="contact">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Contact
            </motion.h2>
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {contactInfo.map((info, index) => (
                    <motion.div
                        key={index}
                        className="contact-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => window.open(info.action, '_blank')}
                    >
                        <div className="contact-icon">{info.icon}</div>
                        <h3>{info.title}</h3>
                        <p>{info.value}</p>
                    </motion.div>
                ))}
            </motion.div>
            <motion.p
                className="contact-message"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                N'hésitez pas à me contacter pour toute opportunité professionnelle
            </motion.p>
        </section>
    );
};
export default Contact;
