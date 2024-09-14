"use client";
import React, { useEffect } from "react";
import { useViewContext } from "@/lib/context/ViewContext";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { motion } from "framer-motion";

const Menu = () => {
  const { toggleView, transition } = useViewContext();
  useEffect(() => {
    console.log(transition)
  }, [transition])
  
  return (
    <motion.div
      animate={{
        opacity: transition ? '0' : 0,
        x: transition ? "-500px" : 0,
      }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="opacity-95"
    >
      <ShimmerButton onClick={toggleView}>
        <span className="font-semibold">Conoce más</span>
      </ShimmerButton>
    </motion.div>
  );
};

export default Menu;
