import React from "react";
import { motion } from "framer-motion";

const MotionText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row gap-4">
      {text.split(' ').map((item, itemIndex) => {
        return (
          <div key={itemIndex} >
            {item.split("").map((letter, index) => {
              return (
                <motion.span
                  className="p-[2px] select-none cursor-pointer "
                  key={`${itemIndex}${index}${letter}`}
                  whileHover={{
                    scale: 1.2,
                    color: "#F4EC8E",
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)", 
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  style={{
                    display: "inline-block",
                    transition: "text-shadow 0.1s ease-in-out", 
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MotionText;
