import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

function Timeline({ events }) {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <motion.div
                    key={index}
                    className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                    <motion.div
                        className="event-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h3>{event.year}</h3>
                        <p>{event.description}</p>
                    </motion.div>
                    <motion.div
                        className="event-image"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.4 }}
                    >
                        <img src={event.image} alt={`Event ${event.year}`} />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}

export default Timeline;
