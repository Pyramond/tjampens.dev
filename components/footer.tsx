import React from "react";
import { getI18n } from "@/locales/server";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = async () => {

    const t = await getI18n();
    const SIZE = 35;

    return (
        <footer className="mt-auto bg-zinc-900 p-5 flex lg:justify-between items-center flex-col-reverse lg:flex-row gap-5 lg:gap-0 text-center">
            <p className="text-sm"> {t("copyright")} </p>

            <div className="flex flex-row gap-5 items-center">
                <Link href="/about" className="hover:text-gray-400"> {t("aboutBtn")} </Link>
                <a href={`https://${t("linkedin")}`} target="_blank">
                    <Image src="/icons/linkedin.svg" alt={"Linkedin logo"} className="hover:opacity-50 cursor-pointer" height={SIZE} width={SIZE} />
                </a>
                <a href={`https://${t("github")}`} target="_blank">
                    <Image src="/icons/github.svg" alt={"Github logo"} className="hover:opacity-50 cursor-pointer" height={SIZE} width={SIZE} />
                </a>
            </div>

        </footer>
    )
}

export default Footer;