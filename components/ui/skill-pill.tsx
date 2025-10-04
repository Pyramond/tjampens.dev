import React from "react";
import Image from "next/image";


interface Props {
    name: string;
}

const SkillPill: React.FC<Props> = ({ name }) => {

    const SIZE = 20;

    return (
        <div className="flex flex-row gap-2 bg-zinc-700 p-1.5 rounded-md border-gray-200 border-solid hover:bg-zinc-600 cursor-pointer">

            <Image
                src={"/icons/skills/" + name + ".svg"}
                alt={`${name} skill`}
                height={SIZE}
                width={SIZE}
            />

            <p> {name} </p>

        </div>
    )
}

export default SkillPill;