import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import flagHu from '../../assets/img/hungarian-flag.png';
import flagEn from '../../assets/img/great-britain-flag.png';

const LanguageSelector = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

 

  return (

    <div className="language-selector">
      <div className="language-icon"
        onClick={() => switchLanguage('hu')}>
        <img
          className={language === 'hu' ? 'language-active' : ''}
          src={flagHu}
          alt="Magyar zászló"
        />
      </div>
      <div className="language-icon"
        onClick={() => switchLanguage('en')}>
        <img
          className={language === 'en' ? 'language-active' : ''}
          src={flagEn}
          alt="Angol zászló"
        />
      </div>

    </div>
  );
};

export default LanguageSelector;
