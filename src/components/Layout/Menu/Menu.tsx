"use client";
import React, { useEffect, useState } from "react";
import { useViewContext } from "@/lib/context/ViewContext";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { motion } from "framer-motion";

import MotionText from "@/components/MotionText";
import ButtonTap from "@/components/ui/ButtonTap";

const Menu = () => {
  const { toggleView, transition } = useViewContext();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
  }, []);

  return (
    <motion.div
      animate={{
        opacity: !transition ? "95" : "0",
        x: !transition ? 0 : "-500px",
      }}
      transition={{ duration: 3, ease: "easeOut" }}
      className={``}
    >
      <div className="flex relative flex-col w-[100%]  pb-8 pt-4 border-[0.1px] rounded-[30px]  bg-gradient-to-br from-slate-600/70 to-slate-800/90 backdrop-blur-[0.2px] border-gray-700/95 justify-center gap-10">
        <div className="absolute h-[100px] mt-56 inset-0 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
        </div>
        <div className="text-background flex flex-col text-xl justify-center font-custom1 text-center font-bold">
          <div
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            className="mx-auto z-[99] text-3xl mb-10"
          >
            <MotionText className="arrayFont" text="Experiencia three js" />
          </div>

          <div className="flex mx-auto w-[100%] max-w-[500px] gap-1 flex-wrap justify-center  ">
            <div className="flex flex-col  z-[99] gap-10">
              <div className="px-5">
                <MotionText
                  className="z-[99]  text-[17px]"
                  text="Mueve el cursos del mouse por la pantalla para interactuar, Click y Scroll para hacer zoom y movimiento"
                />
              </div>
              <div className="flex text-2xl px-10 justify-around">
                {" "}
                <motion.span
                  className="icon-[mdi--mouse-move-vertical] cursor-pointer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5.3,
                    color: "#4FCC57",
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  style={{
                    display: "inline-block",
                    transition: "text-shadow 0.1s ease-in-out",
                  }}
                ></motion.span>
                <motion.span
                  className="icon-[mdi--mouse-left-click-outline] cursor-pointer"
                  whileHover={{
                    scale: 1.2,
                    rotate: -5.3,
                    color: "#4FCC57",
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  style={{
                    display: "inline-block",
                    transition: "text-shadow 0.1s ease-in-out",
                  }}
                ></motion.span>
                <motion.span
                  className="icon-[basil--mouse-alt-outline] cursor-pointer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5.3,
                    color: "#4FCC57",
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  style={{
                    display: "inline-block",
                    transition: "text-shadow 0.1s ease-in-out",
                  }}
                ></motion.span>
              </div>
            </div>
          </div>
        </div>

        <ShimmerButton
          className="w-[50%] mt-4 py-2 rounded-none mx-auto"
          onClick={toggleView}
        >
          <span className="font-semibold px-14">Conoce más</span>
        </ShimmerButton>
      </div>
    </motion.div>
  );
};

export default Menu;
