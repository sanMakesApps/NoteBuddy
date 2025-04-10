import React, { useState, useRef } from "react";

const ToolTip = ({ children, noteText, position = "top" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsHovered(true), 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {isHovered && (
        <div
          className={`absolute z-50 ${positionClasses[position]} w-60 p-3 bg-gray-800 text-white text-sm rounded-md shadow-lg`}
        >
          {noteText}
        </div>
      )}
    </div>
  );
};
export default ToolTip;
