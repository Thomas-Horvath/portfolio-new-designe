
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";


const Home = () => {
  const { translations } = useContext(LanguageContext);

  
  
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

  }, [])



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

        <div className="scroller" data-speed="fast">
          <ul className="tag-list scroller__inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Python</li>
            <li>UI/UX</li>
          </ul>
        </div>

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
