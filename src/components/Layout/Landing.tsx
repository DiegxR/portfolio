import React from "react";
import ShinyButton from "../magicui/shiny-button";
import { useViewContext } from "@/lib/context/ViewContext";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import Image from "next/image";
const Landing = () => {
  const { toggleView, stationRef } = useViewContext();
  return (
    <div ref={stationRef} className="w-full">
      <header className="w-full fixed z-[50] h-[80px] bg-slate-600/40 py-1 px-16 flex items-center justify-between">
        <span
          onClick={() => toggleView()}
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
              Desarrollador especializado en crear experiencias web innovadoras y soluciones tecnológicas de vanguardia, con formación academica de diferentes centros educativos universitarios, bootcamps y diferentes iniciativas, participando como estudiante y como asesor personalizado de acompañamiento academico
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#proyectos"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: project * 0.1 }}
                className="bg-gradient-to-br from-slate-600/70 to-slate-800/90 backdrop-blur-[0.2px] border-gray-700/95  border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Proyecto+${project}`}
                  alt={`Proyecto ${project}`}
                  width={400}
                  height={200}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Proyecto {project}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Una breve descripción del proyecto y las tecnologías
                    utilizadas
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Ver Detalles
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="habilidades" className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Next.js",
              "TypeScript",
              "MongoDB",
              "GraphQL",
              "Docker",
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
        <p>&copy; 2024 Juan Desarrollador. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Landing;
