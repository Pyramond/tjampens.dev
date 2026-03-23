"use client"

import React, { useState } from "react";
import ProjectType from "@/types/project";
import Project from "./project";


interface Props {
    projects: ProjectType[];
    btnLabelMore: string;
    btnLabelLess: string;
    titleLabel: string;
}

const ProjectsClient: React.FC<Props> = ({ projects, btnLabelMore, btnLabelLess, titleLabel }) => {

    const [showAll, setShowAll] = useState(false);

    const displayedProjects = showAll ? projects : projects.slice(0, 6);


    return (
        <div className="flex flex-col items-center gap-15">

            <h2 className="text-3xl lg:text-5xl font-oswald mt-20 lg:mt-40 text-center"> {titleLabel} </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto gap-10 lg:gap-15 items-stretch">
                {displayedProjects.map((project: ProjectType, index: number) => (
                    <Project title={project.title} year={project.year} fr={project.fr} en={project.en} source={project.source} stack={project.stack} key={index} />
                ))}
            </div>

            <button onClick={() => setShowAll(!showAll)} className="bg-white text-black p-1.5 rounded-md cursor-pointer text-lg hover:bg-transparent hover:text-white transition-all duration-300 border-2 border-white">
                {showAll ? btnLabelLess : btnLabelMore}
            </button>
        </div>
    )
}


export default ProjectsClient;