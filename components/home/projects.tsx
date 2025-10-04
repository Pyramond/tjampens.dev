import React from "react";
import { getI18n } from "@/locales/server";
import Project from "@/components/home/project";
import ProjectType from "@/types/project"
import data from "@/public/data/projects.json"

const Projects: React.FC = async () => {

    const t = await getI18n();

    return (
        <div className="flex flex-col items-center gap-15">
            <h2 className="text-3xl lg:text-5xl font-oswald mt-20 lg:mt-40"> {t("project-title")} </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto gap-10 lg:gap-15 items-stretch">
                {data.map((project: ProjectType, index: number) => (
                    <Project title={project.title} year={project.year} fr={project.fr} en={project.en} source={project.source} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Projects