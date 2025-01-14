import {
    RiFacebookFill,
    RiInstagramLine,
    RiPinterestLine,
    RiTwitterFill,
    RiYoutubeFill,
} from "react-icons/ri";

import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="section__container footer__container">
                <div className="footer__col">
                    <h4 className="section__header">Get In Touch</h4>
                    <p>
                        Reach out for inquiries, collaborations, or just to say
                        hello—I'd love to connect with you.
                    </p>
                </div>
                <div className="footer__col">
                    <h4>Where's My Office?</h4>
                    <p>
                        123 Creative Lane, Vision City, Artland 56789, United
                        States.
                    </p>
                </div>
                <div className="footer__col">
                    <h4 className="section__header">My Social Links</h4>
                    <ul className="footer__col__socials">
                        <li>
                            <a href="#">
                                <RiFacebookFill />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiTwitterFill />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiPinterestLine />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiInstagramLine />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiYoutubeFill />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bar">
                Copyright &copy; 2024 Web Design Mastery. All rights reserved.
            </div>
        </footer>
    );
};
