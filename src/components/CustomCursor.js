import React, { useEffect, useState } from 'react';
import '../customCursor.css';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
      const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      setCursorPosition({
        top: clientY + scrollY - 10,
        left: clientX + scrollX - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="page-cursor cursor-active"
      style={{ top: cursorPosition.top, left: cursorPosition.left }}
    ></div>
  );
};

export default CustomCursor;