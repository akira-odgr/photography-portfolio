import { motion } from "framer-motion";
import contactImg from "../../assets/images/contact.png";

import "./Contact.scss";
import { SlideBottom } from "../../utility/animation";
import { ChangeEvent, FC, useState } from "react";

export const Contact: FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section className="contact">
            <div className="section__container contact__container">
                <div className="contact__content">
                    <h2 className="section__header">Contact Me</h2>
                    <p>
                        Have a project in mind or need a photographer or
                        filmmaker to bring your vision to life? I'd love to hear
                        from you!
                    </p>
                    <form action="/">
                        <div className="input__row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                            />
                        </div>
                        <input
                            type="text"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                        />
                        <button className="btn">send it</button>
                    </form>
                </div>
                <div className="contact__image">
                    <motion.img
                        variants={SlideBottom(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        src={contactImg}
                        alt="contact"
                    />
                </div>
            </div>
        </section>
    );
};
