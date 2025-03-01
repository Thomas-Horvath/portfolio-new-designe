import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const ScrollingText = () => {
  const words = ['PHP', 'Python', 'JavaScript', 'CSS', 'SQL'];

  // Animáció, ami folyamatosan mozgatja a szöveget balra
  const animation = useSpring({
    from: { transform: 'translateX(100%)' }, // Kezdés a jobb szélen
    to: { transform: 'translateX(-100%)' },  // Mozgás balra
    loop: true, // Végtelen ciklus
    config: { duration: 5000 }, // Animáció sebessége
  });

  return (
    <div
      style={{
        overflow: 'hidden',
        backgroundColor: '#333',
        padding: '10px 0',
        width: '100%',
      }}
    >
      <animated.div
        style={{
          ...animation,
          display: 'flex',
          whiteSpace: 'nowrap',
        }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              color: 'white',
              fontSize: '1.5rem',
              padding: '0 20px',
            }}
          >
            {word}
          </span>
        ))}
        {/* Ismétlődő szavak */}
        {words.map((word, index) => (
          <span
            key={index + words.length}
            style={{
              color: 'white',
              fontSize: '1.5rem',
              padding: '0 20px',
            }}
          >
            {word}
          </span>
        ))}
      </animated.div>
    </div>
  );
};

export default ScrollingText;
