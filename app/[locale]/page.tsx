import { getI18n } from "@/locales/server";
import Image from "next/image";

export default async function Home() {

  const t = await getI18n(); 

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>
        {t("start")}
      </h1>
    </div>
  );
}
