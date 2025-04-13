
import React, { useState, useEffect } from "react";

const MousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener("mousemove", handleMouseMove);
    
    // Track hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseOver);
      el.addEventListener('mouseleave', handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseOver);
        el.removeEventListener('mouseleave', handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div 
        className="pointer-events-none fixed z-50 rounded-full bg-primary/30 mix-blend-difference"
        style={{
          height: isHovering ? '50px' : '30px',
          width: isHovering ? '50px' : '30px',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out',
        }}
      />
      
      {/* Subtle trailing effect */}
      <div 
        className="pointer-events-none fixed z-50 rounded-full bg-accent/20"
        style={{
          height: '15px',
          width: '15px',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s linear, left 0.15s ease-out, top 0.15s ease-out',
        }}
      />
    </>
  );
};

export default MousePointer;
