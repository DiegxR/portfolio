"use client";
import React, { useEffect } from "react";
import Title from "./Title/Title";
import Menu from "./Menu/Menu";
import { motion } from "framer-motion";
import { useViewContext } from "@/lib/context/ViewContext";
import Meteors from "../magicui/meteors";
import MotionText from "../MotionText";
import { useRouter } from "next/navigation";


const IntroPage = () => {
  const { transition, viewState } = useViewContext();
  const router = useRouter()
  useEffect(() => {
   if(viewState){
    setTimeout(() => {
      router.push("/landing")
    }, 1000);
   }
  }, [viewState, router])
  
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
        <>
          <section className="flex flex-col md:flex-row absolute w-screen z-[99]">
            <div
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              className="absolute  flex justify-center w-full animate-in top-14 z-[99]"
            >
              <div className="bg-gradient-to-br from-slate-900/30 rounded-[20px] to-slate-800/30 backdrop-blur-[0.2px] shadow-sm shadow-slate-600 px-5 py-2">
                <MotionText
                  rotate
                  className="text-white arrayFont font-extrabold text-[25px] decoration-slice"
                  text="JUAN DIEGO ROJAS"
                />
              </div>
            </div>
            <Title />
            <section className="w-[50%] h-screen flex items-center justify-center ">
              <Menu />
            </section>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default IntroPage;
