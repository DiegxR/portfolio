import React from "react";
import { motion } from "framer-motion";

const MotionText = ({ text, tracking , rotate, className }: { text: string, tracking?: string, rotate?: boolean, className?: string }) => {
  return (
    <div className={`flex justify-center flex-row flex-wrap ${tracking ? `gap-x-[${tracking}]`: 'gap-x-4'}`}>
      {text.split(' ').map((item, itemIndex) => {
        return (
          <div key={itemIndex} >
            {item.split("").map((letter, index) => {
              return (
                <motion.span
                  className={`p-[2px] select-none cursor-pointer ${className}`}
                  key={`${itemIndex}${index}${letter}`}
                  whileHover={{
                    scale: 1.2,
                    rotate: rotate ? 5 : 0,
                    color: "#F4EC8E",
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)", 
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
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
