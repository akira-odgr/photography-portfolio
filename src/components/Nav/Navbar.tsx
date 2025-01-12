import { FC, useState } from "react";
import navHeaderLogo from "../../assets/images/logo.png";

import "./Navbar.scss";

export const Navbar: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleFlare = (): void => {
        setIsActive((prevActive) => !prevActive);
        setIsOpen((prevOpen) => !prevOpen);
    };

    return (
        <nav className="nav">
            <div className="nav__header">
                <a href="#" className="nav__header__logo">
                    <img src={navHeaderLogo} alt="Logo" />
                </a>
                <div
                    className={`nav__header__menu-btn ${
                        isActive ? "is-active" : ""
                    }`}
                    onClick={toggleFlare}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul
                className={`nav__links ${isOpen ? "open" : ""}`}
                onClick={toggleFlare}
            >
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};
