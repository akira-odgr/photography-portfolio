import contactImg from "../../assets/images/contact.png";

export const Contact = () => {
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
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your Email" />
                        </div>
                        <input type="text" placeholder="Your Message" />
                        <button>send it</button>
                    </form>
                </div>
                <div className="contact__image">
                    <img src={contactImg} alt="contact" />
                </div>
            </div>
        </section>
    );
};
