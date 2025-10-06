import React from "react";
import { getI18n } from "@/locales/server";

const Resources: React.FC = async () => {

    const t = await getI18n();

    return (
        <div className="m-5 flex flex-col items-center gap-10 w-[100%]">

            <h2 className="text-3xl lg:text-5xl font-oswald mt-10 lg:mt-15" > {t("resourcesTitle")} </h2>

            <table className="table-auto w-full max-w-md mx-auto mt-6 border border-gray-200 rounded-md shadow-sm text-sm">
                <thead>
                <tr>
                    <th className="px-4 py-3 border-b border-gray-200">{t("resourcesName")}</th>
                    <th className="px-4 py-3 border-b border-gray-200">{t("resourcesSource")}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="px-4 py-3 border-b border-gray-100">{t("resourcesIconName")}</td>
                    <td className="px-4 py-3 border-b border-gray-100">www.svgrepo.com</td>
                </tr>
                <tr>
                    <td className="px-4 py-3">{t("resourcesLogo")}</td>
                    <td className="px-4 py-3">www.svgl.app</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Resources;