"use client"

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

interface MotionImageProps {
    path: string;
    size: number;
    alt: string;
}

const MotionImage: React.FC<MotionImageProps> = ({ path, size, alt }) => {

    return (
        <motion.div
            whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 300 }, rotate: -3, }}
            className="will-change-transform cursor-pointer"
        >
            <Image src={path} height={size} width={size} alt={alt} />
        </motion.div>
    );
};

export default MotionImage;
