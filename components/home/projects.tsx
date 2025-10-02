import React from "react";
import {getI18n} from "@/locales/server";

const Projects: React.FC = async () => {

    const t = await getI18n();

    return (
        <div>
            <h2 className="text-3xl sm:text-5xl font-oswald mt-20 sm:mt-50"> {t("project-title")} </h2>
        </div>
    )
}

export default Projects