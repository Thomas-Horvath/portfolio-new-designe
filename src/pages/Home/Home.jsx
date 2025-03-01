
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";
import ScrollingText from '../../components/ScrollText/ScrollText';

const Home = () => {
  const { translations } = useContext(LanguageContext);






  // Animációs konfigurációk
  const animationVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const animationVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const animationVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const animationVariantsBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="home section-link" id="home" data-observe>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.6 }}
          className="home-title"
        >
          {translations.home.name}
        </motion.h1>

        <motion.div
          className="content-container"
          initial="hidden"
          animate="visible"
          variants={animationVariantsLeft}
          transition={{ duration: 0.6 }}
        >

          <motion.p
            initial="hidden"
            animate="visible"
            variants={animationVariantsLeft}
            transition={{ duration: 0.6 }}
            className="home-paragraph"
          >
            {translations.home.profession1}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={animationVariantsLeft}
            transition={{ duration: 0.6 }}
            className="home-paragraph"
          >
            &nbsp;-&nbsp;
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={animationVariantsLeft}
            transition={{ duration: 0.6 }}
            className="home-paragraph"
          >
            {translations.home.profession2}
          </motion.p>

        </motion.div>
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={animationVariantsRight}
          transition={{ duration: 0.6 }}
          className="home-subtitle"
        >
          {translations.home.subTitle}
        </motion.h3>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariantsBottom}
          transition={{ duration: 0.6 }}

        >
          <HashLink to="/#contact" className="btn home-btn">
            <FaPaperPlane />{translations.home.buttonText}
          </HashLink>
        </motion.div>


        {/* <ScrollingText /> */}


        <div className="home-social-media">
          <Link
            className="soc-icon"
            to="https://www.facebook.com/profile.php?id=61565723620011"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            className="soc-icon"
            to="https://www.linkedin.com/in/thomashorvathweb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="soc-icon"
            to="https://github.com/Thomas-Horvath"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
        </div>
        <div className="home-down-arrow"><BsArrowDownShort /></div>

      </section>

    </>
  );
}

export default Home;
