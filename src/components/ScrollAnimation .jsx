import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollAnimation = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  const variants = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 0.5, y: 50 },
  };

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <motion.div
        initial="down"
        animate={scrollDirection === "down" ? "down" : "up"}
        variants={variants}
        transition={{ duration: 0.5 }}
        style={{
          background: "purple",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Scroll {scrollDirection === "down" ? "Down" : "Up"}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
