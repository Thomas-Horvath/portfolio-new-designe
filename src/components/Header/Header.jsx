import React, { useState} from 'react';

import { HashLink } from 'react-router-hash-link';
import Navbar from '../Navbar/Navbar';
import LogoLight from '../../assets/img/Logo_Thomas_main_color.svg';
import { FaBars } from "react-icons/fa6";

import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);




  const toggleMenu = () => {
    if (window.innerWidth <= 992) {
      setIsOpen(!isOpen);
    }
  };




  return (
    <header className="header">
      <div className="header-container">
        <HashLink to="/#" className="logo">
          <img
            className="nav-logo-img js-main-logo"
            src={LogoLight}
            alt="fehér színű logo"
          />
        </HashLink>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className="icons">
          <LanguageSelector />
          <div className="icon-container hamburger-btn-open js-hamburger-open-btn" onClick={toggleMenu}>
         <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
