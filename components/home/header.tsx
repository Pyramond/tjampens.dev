import React from "react";
import {TypingAnimation} from "@/components/ui/typing-animation";
import {getI18n} from "@/locales/server";

const Header: React.FC = async () => {

    const t = await getI18n();

    return (
        <div className="font-sans relative min-h-screen p-8 pb-20 sm:p-20 flex flex-col items-center gap-5">
            <h1 className="text-7xl font-oswald"> {t("name")} </h1>
            <TypingAnimation className="text-4xl" words={[t("title")]} showCursor={false} typeSpeed={50} />
            <TypingAnimation className="text-3xl" words={[t("sub-title")]} showCursor={false} typeSpeed={50} />
        </div>
    )
}

export default Header;