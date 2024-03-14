import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-0"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/1.png"
          title="StockChart"
          description="StockChart is a CRUD application which can help visualise and analyse the NIFTY 50 and NIFTY BANK chart with JWT based user Authentication"
        />
        <ProjectCard
          src="/3.png"
          title="Exercise-o-pedia"
          description="A web-app encyclopedia of exercises made using React and RapidAPI"
        />
        <ProjectCard
          src="/4.png"
          title="Fit-Track"
          description="A user-friendly MERN-stack application that enables individuals to easily track and manage their daily fitness routines."
        />
      </div>
    </div>
  );
};

export default Projects;
