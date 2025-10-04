"use client"

import React from "react";
import Image from "next/image";
import ProjectType from "@/types/project";
import { useCurrentLocale } from "@/locales/client";

const Project: React.FC<ProjectType> = ({ title, fr, en, year, source }) => {

    const locale = useCurrentLocale();
    const SIZE = 25;

    const handleClick = ():void => {
        if(source) {
            window.open(source?.url, "_blank");
        }
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-row items-baseline gap-2">
                <h3 className="text-4xl mb-2"> {title} </h3>
                <h4> {year} </h4>
            </div>
            <p className="mb-5"> {locale === "fr" ? fr : en} </p>
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