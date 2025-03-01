import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    const { translations } = useContext(LanguageContext);
    return (

        <footer className="footer">
        <div className="footer-linear"></div>
            <div className="footer-content-container">
                <div className="footer-social-media">
                    <Link className="soc-icon" to="https://www.facebook.com/profile.php?id=61565723620011" target="_blank">
                        <FaFacebook /></Link>
                    <Link className="soc-icon" to="https://www.linkedin.com/in/thomashorvathweb/" target="_blank">
                        <FaLinkedin /></Link>
                    <Link className="soc-icon" to="https://github.com/Thomas-Horvath" target="_blank">
                        <FaGithub /></Link>
                </div>
                <div className="footerInfo">
                    <Link to="/info/policy">{translations.footer.policy}</Link>
                    <Link to="/info/impresszum">{translations.footer.impressum}</Link>
                    <Link to="/info/cookies">{translations.footer.cookies}</Link>
                </div>
            </div>

            <div className="copyright-container">
                <p className="text">Copyright &copy; 2025</p>
                <p> {translations.footer.additionalText}</p>
            </div>
        </footer>

    )
}

export default Footer;