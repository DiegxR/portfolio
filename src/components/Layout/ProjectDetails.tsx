"use client";
import { projectsArray } from "@/lib/projects";
import { Detail, Project } from "@/types/proyects";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import ImageCarousel from "../ImageCarousel";
import {Tooltip} from "@nextui-org/react";
const ProjectDetails = () => {
  const router = useRouter();
  const [project, setProject] = useState<Project>();
  const param = useParams();
  useEffect(() => {
    if (param.id) {
      setProject(projectsArray.find((_, index) => index === Number(param.id)));
    }
  }, [param]);

  return (
    <div className="absolute z-[99] w-screen h-screen flex flex-col justify-center items-center">
      <div
        onClick={() => router.push("/landing")}
        className="absolute top-8 left-8 hover:bg-gray-400 rounded-md px-2 pt-1"
      >
        <span className="icon-[material-symbols--arrow-left-alt] text-white text-[30px] cursor-pointer"></span>
      </div>
      <h4 className="text-white text-[40px] -translate-y-8 font-bold">
        {project?.name}
      </h4>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 * 0.1 }}
        className="bg-gradient-to-br p-5 w-[75%] relative h-[80vh] from-slate-600/70 to-slate-800/90 backdrop-blur-[0.2px] border-gray-700/95  border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <Tabs
          className="w-full flex h-fit justify-center"
          items={project?.details}
        >
          {project?.details.map((item: Detail) => (
            <Tab className="w-full h-full" key={item.title} title={item.title}>
              <Card className="w-full h-full">
                <section className="flex flex-col py-10 gap-[5%] px-[2vw] w-full h-full items-center justify-between">
                  <div className="w-[100%] flex h-[40vh] pt-5 overflow-y-auto flex-col justify-center">
                    <p className="text-white">{item.description}</p>
                  </div>
                  <div className="flex flex-col w-[100%] h-full items-center">
                    <ImageCarousel images={item.images} />
                    <div className="mt-10 flex gap-5 items-center">
                      <p className="text-white">Tecnologías:</p>
                      {item.icons.map((icon, index) => (
                        <div
                          key={index}
                          className="flex flex-col justify-center text-center gap-1"
                        >
                          <span className={`text-[50px] ${icon.icon}`}></span>
                          <p className="text-white text-[10px]">{icon.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-400 hover:text- group text-white absolute bottom-8 left-3"
                  href={item.link}
                >
                <Tooltip classNames={{content: "bg-slate-500/30 px-3", base: " rounded-[1px]"}} className="select-none text-white" content={`Echa un vistazo directo en este link`}>
                  <span className="icon-[hugeicons--link-square-01] group-hover:text-lime-400  text-3xl"></span>
                </Tooltip>
                </a>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
