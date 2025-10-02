import React from "react";
import { getI18n } from "@/locales/server";
import Image from "next/image";

const GeneralInformations: React.FC = async () => {

    const t = await getI18n();
    const SIZE = 40

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 p-3 sm:p-0">

            <div className="flex items-center space-x-2">
                <Image alt="" src={"/icons/pin.svg"} width={SIZE} height={SIZE} />
                <p> {t("location")} </p>
            </div>

            <div className="flex items-center space-x-2">
                <Image alt="" src={"/icons/school.svg"} width={SIZE} height={SIZE} />
                <p> {t("school")} </p>
            </div>

            <div className="flex items-center space-x-2">
                <Image alt="" src={"/icons/diplomas.svg"} width={SIZE} height={SIZE} />
                <p> {t("diplomas")} </p>
            </div>

            <div className="flex items-center space-x-2">
                <Image alt="" src={"/icons/pin.svg"} width={SIZE} height={SIZE} />
                <p> {t("location")} </p>
            </div>

        </div>
    )
}

export default GeneralInformations;