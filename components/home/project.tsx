"use client"

import React from "react";
import Image from "next/image";
import ProjectType from "@/types/project";
import { useCurrentLocale } from "@/locales/client";
import SkillPill from "@/components/ui/skill-pill";

const Project: React.FC<ProjectType> = ({ title, fr, en, year, source, stack }) => {

    const locale = en === "" ? "fr" : useCurrentLocale();
    const SIZE = 25;

    const handleClick = ():void => {
        if(source) {
            window.open(source?.url, "_blank");
        }
    }

    return (
        <div className="flex flex-col h-full p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-lg hover:shadow-[0_0_5px_rgba(255,255,255,0.1)] transition-all duration-300">
            <div className="flex flex-row items-baseline gap-2">
                <h3 className="text-4xl mb-2"> {title} </h3>
                <h4> {year} </h4>
            </div>
            <p className="mb-5"> {locale === "fr" ? fr : en} </p>

            {
                stack ?
                    <div className="flex flex-row flex-wrap gap-2 mb-5">
                        {stack.map((item: string, index: number) => (
                            <SkillPill name={item} key={index} />
                        ))}
                    </div>
                    :
                    null
            }

            {
                source ?
                    <div className="flex justify-center lg:justify-end mt-auto ml-0 lg:ml-4">
                        <button className="bg-white text-black flex flex-row justify-center gap-2.5 p-1.5 rounded-md cursor-pointer w-[100%] lg:w-auto" onClick={handleClick}>
                            <Image src={"/icons/github-light.svg"} alt={"Github icon"} height={SIZE} width={SIZE} />
                            Github
                        </button>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default Project;