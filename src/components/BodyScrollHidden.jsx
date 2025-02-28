import { useEffect } from 'react';

const useBodyStyles = (isModalOpen) => {
  useEffect(() => {
    let scrollPosition = 0;

    if (isModalOpen) {

      scrollPosition = window.scrollY;

      document.body.style.position = 'fixed';
      document.querySelector('.header').style.position = 'fixed';
      document.querySelector('.header').style.top = '0';

      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';

    } else {
      // Visszaállítjuk az eredeti stílusokat
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition);
    }

    // Cleanup effect, amikor a komponens megszűnik vagy a modál bezárul
    return () => {
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition); 
    };
  }, [isModalOpen]);
};

export default useBodyStyles;
