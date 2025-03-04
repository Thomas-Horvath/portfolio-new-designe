import { useEffect } from 'react';

const useBodyStyles = (isModalOpen) => {
  useEffect(() => {
    let scrollPosition = 0;
  
    if (isModalOpen) {

      scrollPosition = window.scrollY;
      console.log(scrollPosition);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    }

    // Cleanup effect, amikor a komponens megszűnik vagy a modál bezárul
    return () => {
      document.body.style.position = '';
      document.body.style.top = 0;
      window.scrollTo(0, scrollPosition);
    };
  }, [isModalOpen]);
};

export default useBodyStyles;
