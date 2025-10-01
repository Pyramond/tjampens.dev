import { getI18n } from "@/locales/server";
import { Meteors } from "@/components/ui/meteors";

export default async function Home() {

  const t = await getI18n(); 

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Meteors number={30}/>
      <h1 className="text-7xl font-oswald">
        {t("name")}
      </h1>
    </div>
  );
}
