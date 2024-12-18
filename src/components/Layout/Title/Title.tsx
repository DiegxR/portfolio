"use client";
import React from "react";
import MotionText from "../../MotionText";
import Image from "next/image";
import { motion } from "framer-motion";
import { useViewContext } from "@/lib/context/ViewContext";
import AmbientSound from "@/components/Sounds/AmbientSound";

const Title = () => {
  const { viewState, transition } = useViewContext();
  return (
    <motion.div
      animate={transition ? { translateX: 850, opacity: "0" } : {}}
      transition={transition ? { duration: 1.3, ease: "easeInOut" } : {}}
      className="md:w-[50%]  animate-out w-[100%] font-bold text-[40px] text-white flex-col h-screen flex justify-center relative gap-1 items-center"
    >
      <motion.div
        animate={transition ? { paddingTop: 850, opacity: "0" } : {}}
        transition={transition ? { duration: 1.3, ease: "easeInOut" } : {}}
        className="absolute min-w-[600px]  bg-gradient-to-br from-gray-900/20 to-gray-800/90 backdrop-blur-[0.2px] border-[0.1px] z-[-99] border-gray-700/95 w-[30vw] rounded-[40px] h-[63vh]"
      ></motion.div>
      <AmbientSound />
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2, // Duración de la animación
          repeat: Infinity, // Repetir indefinidamente
          ease: "easeInOut", // Tipo de interpolación
        }}
        className="group flex  border-black hover:border-white border-2 items-center justify-center bg-white hover:bg-black rounded-full overflow-hidden w-[280px] h-[280px]"
      >
        <Image
          className="bg-white m-auto mt-5 group-hover:hidden"
          width={200}
          height={200}
          alt=""
          src="/profile.jpg"
        />
        <Image
          className="bg-white m-auto mt-5  hidden group-hover:block"
          width={200}
          height={200}
          alt=""
          src="/profileBlack.jpg"
        />
      </motion.div>
      <div className="flex group flex-col items-center">
        <h1
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          className="justify-center px-5 mt-8"
        >
          <MotionText className="arrayFont text-[35px]" text="Desarrollador FullStack" />
        </h1>
        <p className="text-[20px] px-4 mt-2 w-[550px]" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          <MotionText className="arrayFont" text="Transformando ideas en código y experiencias innovadoras." />
        </p>
        <div className="flex select-none cursor-pointer mt-8 mb-2 gap-10">
          <motion.span
            className="icon-[ph--linkedin-logo-bold] "
            whileHover={{
              scale: 1.2,
              rotate: 5.3,
              color: "#0A66C2",
              textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
              transition: { type: "spring", stiffness: 300 },
            }}
            style={{
              display: "inline-block",
              transition: "text-shadow 0.1s ease-in-out",
            }}
          ></motion.span>
          <motion.span
            className="icon-[bi--github]"
            whileHover={{
              scale: 1.2,
              rotate: -5.3,
              color: "gray",
              textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
              transition: { type: "spring", stiffness: 300 },
            }}
            style={{
              display: "inline-block",
              transition: "text-shadow 0.1s ease-in-out",
            }}
          ></motion.span>
          <motion.span
            className="icon-[mdi--whatsapp]"
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
            className="icon-[simple-icons--gmail]"
            whileHover={{
              scale: 1.2,
              rotate: -5.3,
              color: "red",
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
    </motion.div>
  );
};

export default Title;
