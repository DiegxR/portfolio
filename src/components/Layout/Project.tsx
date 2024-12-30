import { Project as Projecttype } from "@/types/proyects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Project = ({
  project,
  index,
}: {
  project: Projecttype;
  index: number;
}) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-slate-600/70 to-slate-800/90 backdrop-blur-[0.2px] border-gray-700/95  border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={project.details[0].images[0]}
        alt={`${project.name} Image`}
        width={400}
        height={200}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl text-white font-semibold mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-white mb-4">{project.description}.</p>
        <a
          onClick={() => router.push(`/projectDetail/${index}`)}
          href="#"
          className="inline-block mx-auto bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Ver Detalles
        </a>
        <div className="absolute flex right-0 top-0">
          {project.tags.includes("FrontEnd") ? (
             <div
             key={index}
             className="text-white font-semibold bg-gradient-to-br from-slate-600/70 to-blue-800/90 backdrop-blur-[0.2px] border-slate-300/95 px-2"
           >
             FrontEnd
           </div>
          ) : (
            <></>
          )}
          {project.tags.includes("BackEnd") ? (
            <div
            key={index}
            className="text-white font-semibold bg-gradient-to-br from-slate-600/70 to-black/90 backdrop-blur-[0.2px] border-slate-300/95 px-2"
          >
            BackEnd
          </div>
           
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
