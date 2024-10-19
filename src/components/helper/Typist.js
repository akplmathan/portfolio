import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed,size,color }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex === text.length-1) {
        clearInterval(typingInterval);
      } else {
        setDisplayText(prevText => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <div>{displayText}</div>;
};

export default TypingAnimation;
