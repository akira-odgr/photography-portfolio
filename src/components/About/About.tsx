import aboutImg from "../../assets/images/about.png";
import { motion } from "framer-motion";

import "./About.scss";
import { SlideBottom } from "../../utility/animation";

export const About = () => {
    return (
        <section className="about">
            <div className="section__container about__container">
                <motion.div
                    variants={SlideBottom(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="about__image"
                >
                    <img src={aboutImg} alt="about.png" />
                </motion.div>
                <div className="about__content">
                    <motion.h2
                        variants={SlideBottom(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="section__header"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        variants={SlideBottom(1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Hi, I'm Alina Lee, a passionate Photographer and
                        Filmmaker dedicated to capturing moments that tell
                        stories. I specialize in creating stunning visuals that
                        resonate emotionally and creatively.
                    </motion.p>
                    <motion.p
                        variants={SlideBottom(1.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Whether it's through the lens of a camera or the framing
                        of a cinematic shot, I strive to bring authenticity and
                        artistry to every project.
                    </motion.p>
                    <motion.div
                        variants={SlideBottom(2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="about__content__btn"
                    >
                        <button className="btn">view may works</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
