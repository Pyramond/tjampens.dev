import { getI18n } from "@/locales/server";
import { Meteors } from "@/components/ui/meteors";
import { TypingAnimation } from "@/components/ui/typing-animation"
import Header from "@/components/home/header";

export default async function Home() {

  const t = await getI18n(); 

  return (
    <div>
        <Meteors number={30}/>
        <Header />
    </div>
  );
}
