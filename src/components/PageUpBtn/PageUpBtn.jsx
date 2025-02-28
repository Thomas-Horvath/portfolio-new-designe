import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const PageUpBtn = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
     
    });
  };

  return (
    <button className="scrollUp" onClick={scrollToTop} title="Ugrás a lap tetejére">
  <FaArrowUp />
    </button>
  );
};

export default PageUpBtn;
