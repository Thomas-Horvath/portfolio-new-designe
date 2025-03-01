import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useIntersectionObserver = (options) => {
  const [entries, setEntries] = useState([]);
  const location = useLocation(); // Figyeljük az útvonal változását
  

  useEffect(() => {
    const observer = new IntersectionObserver((entryList) => {
      setEntries(entryList);
    }, options);

    const elements = document.querySelectorAll('[data-observe]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [ location.pathname]);

  return entries;
};

export default useIntersectionObserver;
