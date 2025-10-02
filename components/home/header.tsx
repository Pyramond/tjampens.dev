import React from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { getI18n } from "@/locales/server";

const Header: React.FC = async () => {

    const t = await getI18n();

    return (
        <div className="font-sans relative p-8 pb-20 sm:p-20 flex flex-col items-center gap-5">
            <h1 className="text-4xl font-oswald sm:text-7xl"> {t("name")} </h1>
            <TypingAnimation className="text-2xl sm:text-4xl" words={[t("title")]} showCursor={false} typeSpeed={50} />
            <TypingAnimation className="text-2xl sm:text-3xl" words={[t("sub-title")]} showCursor={false} typeSpeed={50} />
        </div>
    )
}

export default Header;