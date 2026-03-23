import React from "react";
import {getI18n} from "@/locales/server";
import Resources from "@/components/about/resources";
import Stack from "@/components/about/stack";

const AboutPage: React.FC = async () => {

    const t = await getI18n();

    return (
        <div className="min-h-screen font-sans relative p-8 pb-20 lg:p-20 flex flex-col items-center gap-5">

        <h1 className="text-4xl font-oswald lg:text-7xl"> {t("aboutTitle")} </h1>

            <Resources />
            <Stack />
        </div>
    )
}

export default AboutPage;