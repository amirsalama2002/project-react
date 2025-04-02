import React, { useState, useEffect } from "react";

const Scroop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // وظيفة التمرير إلى الأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "10px",
            background: "#123456",
            color: "white",
            border: "none",
            outline:"none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize:"1rem",
          }}
        >
          ↑ scroll To Top
          
        </button>
      )}
    </div>
  );
};

export default Scroop;
