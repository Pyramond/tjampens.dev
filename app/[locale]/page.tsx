import { getI18n } from "@/locales/server";
import { Meteors } from "@/components/ui/meteors";
import { LightRays } from "@/components/ui/light-rays"
import Header from "@/components/home/header";
import GeneralInformations from "@/components/home/general-informations";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";

export default async function Home() {
    const t = await getI18n();

    return (
        <div className="relative w-full">
            <LightRays className="absolute inset-0 h-full w-full -z-10 pointer-events-none" />
            <Meteors number={30} />

            <div className="relative flex min-h-[100svh] flex-col items-center gap-5">
                <Header />
                <GeneralInformations />
                <Projects />
                <Skills />
            </div>
        </div>
    );
}
