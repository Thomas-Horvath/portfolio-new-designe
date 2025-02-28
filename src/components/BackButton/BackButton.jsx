import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  const navigate = useNavigate();
  const { translations } = useContext(LanguageContext);


  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className='btn back-btn' onClick={goBack}>
      <IoIosArrowBack /> {translations.backButton}
    </button>
  );
};

export default BackButton;
