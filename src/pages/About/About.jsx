import React, { useState, useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoBox from './InfoBox/InfoBox';
import { img, pdf } from '../../assets/assets.js';
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaFileArrowDown } from "react-icons/fa6";

const About = () => {
    const { translations } = useContext(LanguageContext);
    const [openBoxIndex, setOpenBoxIndex] = useState(null);


    const handleBoxClick = (index) => {
        setOpenBoxIndex(openBoxIndex === index ? null : index);
    };



    // Az első elem ref-je
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    return (
        <section className="about section-link" id="about" data-observe>
            <motion.div
                className="main-heading about-main-heading hidden"
                ref={ref1}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: inView1 ? 1 : 0.8, opacity: inView1 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>{translations.about.headingTitle}</h2>
                <span>{translations.about.headingSpan}</span>
            </motion.div>
            <div className="about-container">
                <div className="about-left">
                    <div className="about-img">
                        <img src={img.public_pic} alt="profilkép" />
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-section">
                        <h3>{translations.about.mainTitle}</h3>
                        <p dangerouslySetInnerHTML={{ __html: translations.about.firstParagraph }} />
                        <p dangerouslySetInnerHTML={{ __html: translations.about.secundParagraph }} />
                        <p dangerouslySetInnerHTML={{ __html: translations.about.thirdParagraph }} />
                        <p dangerouslySetInnerHTML={{ __html: translations.about.forthParagraph }} />
                        {/* <p dangerouslySetInnerHTML={{ __html: translations.about.fifthParagraph }} /> */}
                        <p dangerouslySetInnerHTML={{ __html: translations.about.sixthParagraph }} />

                    </div>
                </div>
                {/* <img src={img.wave_yellow_reverse} alt="fordított sárga hullám háttér"
                    className="wave-yellow-reverse" /> */}

                <div className="more-info-container">
                    <div className="info-group-wrapper">
                        <h2>{translations.aboutInfo.title}</h2>
                        <InfoBox
                            title={translations.aboutInfo.firstInfoTitle}
                            content={translations.aboutInfo.firstInfoContent}
                            isOpen={openBoxIndex === 0}
                            onClick={() => handleBoxClick(0)}
                        />
                        <InfoBox
                            title={translations.aboutInfo.secundInfoTitle}
                            content={translations.aboutInfo.secundInfoContent}
                            isOpen={openBoxIndex === 1}
                            onClick={() => handleBoxClick(1)}
                        />
                        <InfoBox
                            title={translations.aboutInfo.thirdInfoTitle}
                            content={translations.aboutInfo.thirdInfoContent}
                            isOpen={openBoxIndex === 2}
                            onClick={() => handleBoxClick(2)}
                        />
                        <InfoBox
                            title={translations.aboutInfo.forthInfoTitle}
                            content={translations.aboutInfo.forthInfoContent}
                            isOpen={openBoxIndex === 3}
                            onClick={() => handleBoxClick(3)}
                        />
                        <InfoBox
                            title={translations.aboutInfo.fifthInfoTitle}
                            content={translations.aboutInfo.fifthInfoContent}
                            isOpen={openBoxIndex === 4}
                            onClick={() => handleBoxClick(4)}
                        />
                    </div>
                </div>

                {/* <img src={img.wave_yellow} alt="sárga hullám háttér " className="wave-yellow" /> */}
                <div className="btn-group">
                    <HashLink to="/#contact" className="btn about-btn">{translations.about.contactButton}<FaArrowRight /></HashLink>
                    <a download target="_blank" href={pdf.CV} className="btn-secund" rel="noreferrer">
                    <FaFileArrowDown />{translations.about.cvButton}</a>
                </div>
            </div>
        </section>
    );
};

export default About;
