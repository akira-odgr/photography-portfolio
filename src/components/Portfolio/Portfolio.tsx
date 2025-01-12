import portfolioImg1 from "../../assets/images/portfolio-1.png";
import portfolioImg2 from "../../assets/images/portfolio-2.png";
import portfolioImg3 from "../../assets/images/portfolio-3.png";
import portfolioImg4 from "../../assets/images/portfolio-4.png";
import portfolioImg5 from "../../assets/images/portfolio-5.png";
import portfolioImg6 from "../../assets/images/portfolio-6.png";
import portfolioImg7 from "../../assets/images/portfolio-7.png";

import "./portfolio.scss";

const portfolioImages = [
    [portfolioImg1, portfolioImg2, portfolioImg3],
    [portfolioImg4, portfolioImg5],
    [portfolioImg6, portfolioImg7],
];

export const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="section__container portfolio__container">
                <h2 className="section__header">Portfolio</h2>
                <div className="portfolio__grid">
                    {portfolioImages.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            {row.map((imgSrc, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={imgSrc}
                                    alt={`Portfolio ${rowIndex}-${imgIndex}`}
                                />
                            ))}
                        </div>
                    ))}
                    {/* <div>
                        <img src={portfolioImg1} alt="" />
                        <img src={portfolioImg2} alt="" />
                        <img src={portfolioImg3} alt="" />
                    </div>
                    <div>
                        <img src={portfolioImg4} alt="" />
                        <img src={portfolioImg5} alt="" />
                    </div>
                    <div>
                        <img src={portfolioImg6} alt="" />
                        <img src={portfolioImg7} alt="" />
                    </div> */}
                </div>
            </div>
        </section>
    );
};
