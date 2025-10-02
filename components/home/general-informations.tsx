import React from "react";
import { getI18n } from "@/locales/server";
import Image from "next/image";
import { motion } from "motion/react"
import MotionImage from "@/components/home/Motion-Image";

const GeneralInformations: React.FC = async () => {

    const t = await getI18n();
    const SIZE = 40

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 p-3 sm:p-0">

            <div className="flex items-center space-x-2">
                <MotionImage path={"/icons/pin.svg"} size={SIZE} alt={"Pin icon"} />
                <p> {t("location")} </p>
            </div>

            <div className="flex items-center space-x-2">
                <MotionImage path={"/icons/school.svg"} size={SIZE} alt={"School icon"} />
                <p> {t("school")} </p>
            </div>

            <div className="flex items-center space-x-2">
                <MotionImage path={"/icons/diplomas.svg"} size={SIZE} alt={"Diplomas icon"} />
                <p> {t("diplomas")} </p>
            </div>

            <div className="flex items-center space-x-2">
                <MotionImage path={"/icons/pin.svg"} size={SIZE} alt={"Pin icon"} />
                <p> {t("location")} </p>
            </div>

        </div>
    )
}

export default GeneralInformations;