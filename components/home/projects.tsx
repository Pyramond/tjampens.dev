import React from "react";
import data from "@/public/data/projects.json"
import ProjectsClient from "@/components/home/ProjectsClient";
import { getI18n } from "@/locales/server";

const Projects: React.FC = async () => {


    const t = await getI18n();

    return (
        <div>
            <ProjectsClient projects={data} btnLabelMore={t("project-btn-more")} btnLabelLess={t("project-btn-less")} titleLabel={t("project-title")} />
        </div>
    )
}

export default Projects