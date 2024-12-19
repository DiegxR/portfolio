import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Projects = () => {
  const projectsArray = [
    {
      name: "Blooma io",
      description:
        "Gestor de proyectos de diseño y desarrollo tanto para empresas como para freelance donde encontrarás todo lo necesario para tus trabajos, proyectos y ofertas",
      details: "",
      technologies: ["", ""],
      images: [
        "https://drive.google.com/uc?id=1IpACbPLs42wkiV2pZ-eEwl6OusnjidN3",
        "https://drive.google.com/file/d//view?usp=drive_link",
        "https://drive.google.com/uc?id=1JL0xkkLg2E1ckdre1f1PsvIorY7aNiie",
      ],
    },
    {
      name: "LatamVerify",
      description:
        "Plataforma para consulta de antecedentes y diferentes reportes de más de 16 países en Latam",
      details: "",
      technologies: ["", ""],
      images: [
        "https://drive.google.com/uc?id=1jtrzmSKeHpDzImbgXCHedR9ZC1JTuGCe",
        "https://drive.google.com/uc?id=1JL0xkkLg2E1ckdre1f1PsvIorY7aNiie",
        "https://drive.google.com/uc?id=1JL0xkkLg2E1ckdre1f1PsvIorY7aNiie",
      ],
    },
    {
      name: "White Car",
      description:
        "Plaforma de transporte especializada para tu mascota completamente legal y de la mejor calidad, conductores y vehículos certificados",
      details: "",
      technologies: ["", ""],
      images: [
        "https://drive.google.com/uc?id=1OE_n_KLHkrui4UDbNsGKgMvKrZK0Vjcf",
        "https://drive.google.com/file/d//view?usp=drive_link",
        "https://drive.google.com/uc?id=1JL0xkkLg2E1ckdre1f1PsvIorY7aNiie",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsArray.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gradient-to-br from-slate-600/70 to-slate-800/90 backdrop-blur-[0.2px] border-gray-700/95  border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            src={project.images[0]}
            alt={`${project.name} Image`}
            width={400}
            height={200}
            className="w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl text-white font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-white mb-4">
              {project.description}.
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
  );
};

export default Projects;
