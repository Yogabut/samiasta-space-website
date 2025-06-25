import { useRef } from "react";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <>
      <style jsx>{`
        .card-spotlight {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          background: linear-gradient(to right, #05025f, #020427);
          border: 1px solid #374151; /* Thinner, lighter border */
          transition: all 0.3s ease;
        }
        
        .card-spotlight::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            var(--spotlight-color, rgba(255, 255, 255, 0.25)),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 3; /* Higher z-index to ensure it's above content */
        }
        
        .card-spotlight:hover::before {
          opacity: 1;
        }
        
        .card-spotlight:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3); /* Darker shadow for dark theme */
        }
        
        .card-spotlight > * {
          position: relative;
          z-index: 2;
        }

        /* Dark content styling */
        .card-spotlight .dark-content {
          background: rgba(2, 2, 44, 0.95);
          border-radius: 12px;
          position: relative;
          z-index: 1;
        }
      `}</style>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        className={`card-spotlight ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default SpotlightCard;