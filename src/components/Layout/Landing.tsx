"use client";
import React, { LegacyRef, RefObject, useEffect, useRef } from "react";
import ShinyButton from "../magicui/shiny-button";
import { useViewContext } from "@/lib/context/ViewContext";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Projects from "./Projects";
import Meteors from "../magicui/meteors";
const Landing = () => {
  const { toggleView, stationRef, viewState, transition, setStationRef } =
    useViewContext();
  const ref = useRef<any>();
  setStationRef(ref);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (container) {
        container.scrollTop += e.deltaY; // Controla el desplazamiento vertical
        e.preventDefault(); // Evita el comportamiento predeterminado
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{ opacity: transition ? 1 : 0 }} // Cambia la opacidad según el estado
        transition={{ duration: 3, ease: "easeOut" }} // Duración y tipo de transición
        className="absolute opacity-0 bg-black w-full h-full top-0 left-0 z-[50]"
      ></motion.div>
      <motion.div
        animate={{ opacity: viewState ? 1 : 0 }} // Cambia la opacidad según el estado
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute top-[230px] left-0 z-[50] -translate-x-[500px] w-[100%] lg:block"
      >
        <Meteors number={15} />
      </motion.div>
      <div ref={containerRef} className="flex overflow-y-scroll h-screen flex-col md:flex-row absolute w-full z-[98]">
        <div ref={ref} className="w-full">
          <header className="w-full fixed z-[99] h-[80px] bg-slate-600/40 py-1 px-16 flex items-center justify-between">
            <span
              onClick={() => (transition ? "" : toggleView())}
              className="icon-[system-uicons--home] text-white text-2xl cursor-pointer hover:"
            ></span>
            <div className="flex items-center gap-5">
              <Button className="px-2 py-1 bg-black text-white font-normal w-[100px] rounded-[8px] h-[38px]">
                Inicio
              </Button>
              <ShinyButton className="bg-white" text="Mis Proyectos" />
            </div>
          </header>
          <main className="container mx-auto overflow-x-hidden w-full relative px-4 py-16">
            <section id="inicio" className="mb-32 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/placeholder.svg?height=200&width=200&text=JD"
                  alt="Foto de perfil"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-8"
                />
                <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  Desarrollador full stack
                </h1>
                <p className="text-xl text-white mb-8 max-w-[80%] mx-auto">
                  ¿Necesitas desarrollos especializados para tu producto o
                  empresa? Me destaco por construir soluciones innovadoras,
                  ordenadas y escalables que se adapten a las necesidades de tus
                  ideas.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#proyectos"
                    className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Ver Proyectos
                  </a>
                  <a
                    href="#contacto"
                    className="bg-transparent hover:bg-white/10 text-white font-bold py-2 px-4 rounded-lg border border-white transition-colors duration-300"
                  >
                    Contactar
                  </a>
                </div>
              </motion.div>
            </section>
            <section id="proyectos" className="mb-32">
              <h2 className="text-3xl text-white font-bold mb-12 text-center">
                Proyectos Destacados
              </h2>
              <Projects />
            </section>

            <section id="habilidades" className="mb-32">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Habilidades Técnicas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  "JavaScript",
                  "Typescript",
                  "Node.js",
                  "Java",
                  "Next js",
                  "Nest js",
                  "Spring Boot",
                  ". Net",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-600/70 to-slate-800/90 backdrop-blur-[0.2px] border-gray-700/95 text-white border border-black rounded-lg p-4"
                  >
                    <p className="text-center font-semibold">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </main>

          <footer className="mt-32 py-8 text-center bg-black/70 backdrop-blur-sm text-white">
            <p>
              &copy; 2024 Juan Diego Rojas Desarrollador Full Stack. Todos los derechos reservados.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Landing;
