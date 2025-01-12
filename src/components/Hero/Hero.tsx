import { FC } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.png";
import { SlideBottom, SlideRight } from "../../utility/animation";

import { AnimatedH1 } from "../../utility/textAnimation";

import "./Hero.scss";

export const Hero: FC = () => {
    const text = "Photographer & Film Maker";
    return (
        <section className="hero">
            <div className="section__container hero__container">
                <motion.div
                    variants={SlideRight(0)}
                    initial="hidden"
                    animate="visible"
                    className="hero__image"
                >
                    <img src={heroImg} alt="heroImg" />
                </motion.div>
                <div className="hero__content">
                    {/* <motion.h1
                        variants={SlideBottom(0.5)}
                        initial="hidden"
                        animate="visible"
                    >
                        Photographer & Film Maker
                    </motion.h1> */}
                    <AnimatedH1 text={text} />
                    <motion.h2
                        variants={SlideBottom(1)}
                        initial="hidden"
                        animate="visible"
                    >
                        Los Angles, USA
                    </motion.h2>
                    <motion.div
                        variants={SlideBottom(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="hero__content__btn"
                    >
                        <button className="btn">hire me</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
