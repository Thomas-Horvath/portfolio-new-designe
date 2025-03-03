
import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";


const Home = () => {
  const { translations } = useContext(LanguageContext);
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);


        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

  }, [])




  useEffect(() => {
    setIsLoaded(false); // Animáció újraindítása navigációkor
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, [location.pathname]); // Figyeli az útvonal változását



  
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
          animate={isLoaded ? "visible" : {}}
          variants={animationVariants}
          transition={{ duration: 0.8 }}
          className="home-title"
        >
          {translations.home.name}
        </motion.h1>

        <motion.div
          className="content-container"
          initial="hidden"
          animate={isLoaded ? "visible" : {}}
          variants={animationVariantsLeft}
          transition={{ duration: 0.8 }}
        >

          <motion.p
            initial="hidden"
            animate={isLoaded ? "visible" : {}}
            variants={animationVariantsLeft}
            transition={{ duration: 0.8 }}
            className="home-paragraph"
          >
            {translations.home.profession1}
          </motion.p>

          <motion.p
            initial="hidden"
            animate={isLoaded ? "visible" : {}}
            variants={animationVariantsLeft}
            transition={{ duration: 0.8 }}
            className="home-paragraph"
          >
            &nbsp;-&nbsp;
          </motion.p>

          <motion.p
            initial="hidden"
            animate={isLoaded ? "visible" : {}}
            variants={animationVariantsLeft}
            transition={{ duration: 0.8 }}
            className="home-paragraph"
          >
            {translations.home.profession2}
          </motion.p>

        </motion.div>
        <motion.h3
          initial="hidden"
          animate={isLoaded ? "visible" : {}}
          variants={animationVariantsRight}
          transition={{ duration: 0.8 }}
          className="home-subtitle"
        >
          {translations.home.subTitle}
        </motion.h3>

        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : {}}
          variants={animationVariantsLeft}
          transition={{ duration: 0.8 }}
        >
          <HashLink to="/#contact" className="btn home-btn">
            <FaPaperPlane />{translations.home.buttonText}
          </HashLink>
        </motion.div>

        <motion.div
          className="scroller"
          initial="hidden"
          animate={isLoaded ? "visible" : {}}
          variants={animationVariantsBottom}
          transition={{ duration: 0.8 }}
        >

          <ul className="tag-list scroller__inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Python</li>
            <li>UI/UX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Python</li>
            <li>UI/UX</li>
          </ul>
        </motion.div>

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

        <motion.div
          className="home-down-arrow"
          initial="hidden"
          animate={isLoaded ? "visible" : {}}
          variants={animationVariantsBottom}
          transition={{ duration: 0.8 }}>
          <BsArrowDownShort />
        </motion.div>


      </section>

    </>
  );
}

export default Home;
