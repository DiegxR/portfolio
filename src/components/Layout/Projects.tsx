"use client"
import { projectsArray } from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsArray.map((project, index) => (
        <Project key={index} project={project} index={index}/>
      ))}
    </div>
  );
};

export default Projects;
