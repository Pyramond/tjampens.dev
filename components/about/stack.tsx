import React from "react";
import { getI18n } from "@/locales/server";
import SkillPill from "@/components/ui/skill-pill";

const Stack: React.FC = async () => {

    const t = await getI18n();
    const stack: string[] = ["TypeScript", "NextJS", "ReactJS", "TailwindCSS", "MagicUI", "Motion"];


    return (
        <div className="m-5 flex flex-col items-center gap-10 w-[100%]">
            <h2 className="text-3xl lg:text-5xl font-oswald mt-10 lg:mt-15 items-center" > {t("stackTitle")} </h2>

            <div className="flex flex-col lg:flex-row flex-wrap gap-3 mt-5">
                {stack.map((item: string, i: number) => (
                    <SkillPill name={item} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Stack;