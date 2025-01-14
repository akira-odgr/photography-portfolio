import { CSSProperties } from "react";
import HeroVideo from "./assets/videos/bgVideo.mp4";
import "./App.scss";

import { Navbar } from "./components/Nav/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

const bgContainer: CSSProperties = {
    position: "relative",
};

const bgVideo: CSSProperties = {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    zIndex: -10,
};

export const App = () => {
    return (
        <>
            {/* video */}
            <div style={bgContainer}>
                <video
                    src={HeroVideo}
                    autoPlay
                    loop
                    muted
                    style={bgVideo}
                ></video>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Portfolio />
            <Blog />
            <Contact />
            <Footer />
        </>
    );
};
