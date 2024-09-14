"use client";
import React from "react";
import Title from "./Title/Title";
import Menu from "./Menu/Menu";
import { motion } from "framer-motion";
import { useViewContext } from "@/lib/context/ViewContext";
import Meteors from "../magicui/meteors";
import ShimmerButton from "../magicui/shimmer-button";
import ShinyButton from "../magicui/shiny-button";
import CarSound from "../Sounds/CarSound";

const IntroPage = () => {
  const { transition, viewState, toggleView } = useViewContext();
  return (
    <>
      <motion.div
        animate={{ opacity: transition ? 1 : 0 }} // Cambia la opacidad según el estado
        transition={{ duration: 3, ease: "easeOut" }} // Duración y tipo de transición
        className="absolute opacity-0 bg-black w-full h-full top-0 left-0 z-[99]"
      ></motion.div>
      <motion.div
        animate={{ opacity: viewState ? 1 : 0 }} // Cambia la opacidad según el estado
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute top-[230px] left-0 z-[99] -translate-x-[500px] w-[100%] lg:block"
      >
        <Meteors number={viewState ? 10 : 0} />
      </motion.div>
      {!viewState ? (
        <section className="flex flex-col md:flex-row absolute w-screen z-[99]">
          <Title />
          <section className="w-[50%] h-screen flex items-center justify-center ">
            <Menu />
          </section>
        </section>
      ) : (
        <div className="flex flex-col md:flex-row absolute w-screen z-[99]">
          <CarSound />
          <header className="w-full h-[150px] p-5 px-20 flex items-center justify-between">
            <span onClick={()=> toggleView()} className="icon-[system-uicons--home] text-white text-2xl cursor-pointer hover:"></span>
            <div>
              <ShinyButton className="bg-white" text="Mis Proyectos" />
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default IntroPage;
