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
    <div className="flex flex-col items-center gap-5 lg:relative overflow-hidden">
        <Meteors number={30}/>
        <LightRays />
        <Header />
        <GeneralInformations />
        <Projects />
        <Skills />
    </div>
  );
}
