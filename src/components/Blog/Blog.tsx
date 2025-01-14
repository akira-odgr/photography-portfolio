import { FC } from "react";
import { motion } from "framer-motion";

import { blogData, BlogPost } from "./blogData";
import "./Blog.scss";
import { SlideBottom } from "../../utility/animation";

export const Blog: FC = () => {
    return (
        <section className="blog">
            <div className="section__container blog__container">
                <h2 className="section__header">Blog</h2>
                <div className="blog__grid">
                    {blogData.map((data: BlogPost) => (
                        <motion.div
                            variants={SlideBottom(data.delay)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={data.id}
                            className="blog__grid__card"
                        >
                            <h5>{data.date}</h5>
                            <h4>{data.title}</h4>
                            <p>{data.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    variants={SlideBottom(2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="blog__btn"
                >
                    <button className="btn">view all blogs</button>
                </motion.div>
            </div>
        </section>
    );
};
