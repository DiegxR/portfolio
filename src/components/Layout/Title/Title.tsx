"use client";
import React from "react";
import MotionText from "../../MotionText";
import Image from "next/image";
import { motion } from "framer-motion";
import { useViewContext } from "@/lib/context/ViewContext";
import AmbientSound from "@/components/Sounds/AmbientSound";
import ShinyButton from "@/components/magicui/shiny-button";
import ShimmerButton from "@/components/magicui/shimmer-button";
const Title = () => {
  const { viewState, transition } = useViewContext();
  return (
    <div className="md:w-[50%] animate-out w-[100%] font-bold text-[40px] text-white flex-col h-screen flex justify-center relative gap-5 items-center">
      <AmbientSound/>
      <motion.div
        animate={
          transition
            ? { y: -650, opacity: '0' }
            : {
                y: [0, -15, 0],
              }
        }
        transition={
          transition
            ? { duration: 1.3, ease: "easeInOut" }
            : {
                duration: 2, // Duración de la animación
                repeat: Infinity, // Repetir indefinidamente
                ease: "easeInOut", // Tipo de interpolación
              }
        }
        className="group flex border-black hover:border-white border-2 items-center justify-center bg-white hover:bg-black rounded-full overflow-hidden w-[280px] h-[280px]"
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
      <motion.div  animate={transition ? {paddingTop: 850, opacity: '0'}: {}} transition={transition ? { duration: 1.3, ease: "easeInOut" } :{}} className="flex group flex-col items-center">
        <ShimmerButton shimmerColor="transparent" shimmerDuration="5s" background="transparent" shimmerSize="1px"  className="bg-transparent top-36 group-hover:p-20 absolute z-[-5] w-[520px] h-[680px]" />
        
        <h1 className="justify-center font-custom1 mt-10">
          <MotionText text="JUAN DIEGO ROJAS" />
        </h1>
        <MotionText text="FullStack Developer" />
        <div className="flex select-none cursor-pointer mt-20 gap-5">
          <motion.span
            className="icon-[ph--linkedin-logo-bold] "
            whileHover={{
              scale: 1.2,
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
      </motion.div>
    </div>
  );
};

export default Title;
