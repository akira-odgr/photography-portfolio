import { CSSProperties } from "react";
import HeroImg from "./assets/images/hero-bg.jpg";
import HeroVideo from "./assets/videos/bgVideo.mp4";
import "./App.scss";

import { Navbar } from "./components/Nav/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Portfolio } from "./components/Portfolio/Portfolio";

// const bgImage: CSSProperties = {
//     backgroundImage: `url(${HeroImg})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "bottom",
//     backgroundSize: "cover",
//     position: "relative",
// };

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
            {/* image */}
            {/* <div style={bgImage}>
                <Navbar />
                <Hero />
            </div> */}

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
        </>
    );
};
