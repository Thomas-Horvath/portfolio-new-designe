import { useEffect, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entryList) => {
      setEntries(entryList);
    }, options);

    const elements = document.querySelectorAll('[data-observe]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [options]);

  return entries;
};

export default useIntersectionObserver;
