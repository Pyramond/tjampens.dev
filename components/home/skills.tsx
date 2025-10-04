import React from "react";
import { getI18n } from "@/locales/server";
import SkillPill from "@/components/ui/skill-pill";
import data from "@/public/data/skills.json";


const Skills: React.FC = async () => {

    const t = await getI18n();

    return (
        <div className="flex flex-col items-center gap-10 w-[100%]">
            <h2 className="text-3xl lg:text-5xl font-oswald mt-20 lg:mt-40 mb-10"> {t("skills-title")} </h2>

            <h3 className="text-3xl"> {t("skills-language")} </h3>
            <div className="flex flex-row gap-3 justify-center w-[50%] flex-wrap mb-10">
                {data["languages"].map((language: string, index: number) => (
                    <SkillPill name={language} key={index} />
                ))}
            </div>

            <h3 className="text-3xl"> {t("skills-library")} </h3>
            <div className="flex flex-row gap-3 justify-center w-[50%] flex-wrap mb-10">
                {data["library"].map((language: string, index: number) => (
                    <SkillPill name={language} key={index} />
                ))}
            </div>

            <h3 className="text-3xl"> {t("skills-tools")} </h3>
            <div className="flex flex-row gap-3 justify-center w-[50%] flex-wrap mb-10">
                {data["tools"].map((language: string, index: number) => (
                    <SkillPill name={language} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Skills