import React, { useRef } from "react";
import NumberTicker from "@/Components/magicui/number-ticker";
import DecorationKanan1 from "../../../assets/Herokanan1.png";
import DecorationKanan2 from "../../../assets/Herokanan2.png";
import DecorationKanan3 from "../../../assets/Herokanan3.png";
import DecorationKiri1 from "../../../assets/Herokiri1.png";
import DecorationKiri2 from "../../../assets/Herokiri2.png";
import DecorationKiri3 from "../../../assets/Herokiri3.png";
import { motion, transform, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const target = useRef(null);

    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start start", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [15, 300]);

    return (
        <header
            ref={target}
            className="h-screen relative font-jakarta flex items-center justify-center"
        >
            <main className="container mx-auto text-xl text-center space-y-2 relative">
                <motion.img
                    initial={{
                        top: "300%",
                    }}
                    animate={{
                        top: "15%",
                    }}
                    transition={{
                        stiffness: 100,
                        type: "spring",
                        duration: 10,
                    }}
                    style={{
                        top: `${x}%`,
                    }}
                    className="absolute  right-[23%] -translate-y-full"
                    src={DecorationKanan1}
                    alt="dekorasi-kanan"
                    draggable="false"
                />
                <motion.img
                    initial={{
                        top: "300%",
                    }}
                    animate={{
                        top: "150%",
                    }}
                    transition={{
                        stiffness: 100,
                        type: "spring",
                        duration: 10,
                        delay: 0.4,
                    }}
                    className="absolute  right-[15%] -translate-y-full"
                    src={DecorationKanan2}
                    alt="dekorasi-kanan"
                    draggable="false"
                />

                <motion.img
                    initial={{
                        top: "300%",
                    }}
                    animate={{
                        top: "50%",
                    }}
                    transition={{
                        stiffness: 100,
                        type: "spring",
                        duration: 10,
                        delay: 0.6,
                    }}
                    className="absolute  right-[5%] -translate-y-1/2"
                    src={DecorationKanan3}
                    alt="dekorasi-kanan"
                    draggable="false"
                />

                {/* Kiri */}

                <motion.img
                    initial={{
                        top: "300%",
                    }}
                    animate={{
                        top: "150%",
                    }}
                    transition={{
                        stiffness: 100,
                        type: "spring",
                        duration: 10,
                        delay: 0.4,
                    }}
                    className="absolute  left-[15%] -translate-y-full"
                    src={DecorationKiri2}
                    alt="dekorasi-kanan"
                    draggable="false"
                />

                <motion.img
                    initial={{
                        top: "300%",
                    }}
                    animate={{
                        top: "60%",
                    }}
                    transition={{
                        stiffness: 100,
                        type: "spring",
                        duration: 10,
                    }}
                    className="absolute  left-[15%]  -translate-y-full"
                    src={DecorationKiri1}
                    alt="dekorasi-kiri"
                    draggable="false"
                />
                <motion.img
                    initial={{
                        top: "300%",
                    }}
                    animate={{
                        top: "50%",
                    }}
                    transition={{
                        stiffness: 100,
                        type: "spring",
                        duration: 10,
                        delay: 0.4,
                    }}
                    className="absolute  left-[5%] -translate-y-1/2"
                    src={DecorationKiri3}
                    alt="dekorasi-kanan"
                    draggable="false"
                />

                {/* Kiri end */}

                <h1 className="text-6xl font-bold text-primary300 ">
                    Mempersembahkan
                </h1>
                <h1 className="text-6xl bg-clip-text h-20 bg-gradient-to-r from-secondary500 to-secondary300 text-transparent font-bold">
                    Kampung Budaya{" "}
                    <span className="">
                        {" "}
                        <NumberTicker
                            value={2024}
                            className={"text-[#2AC6B3]"}
                        />
                    </span>
                </h1>
                <p className="text-lg w-1/2 mx-auto text-primary300 ">
                    Panggung terbesar untuk Forda dan komunitas budaya untuk
                    unjuk kemampuan dan meraih prestasi.
                </p>
            </main>
        </header>
    );
};

export default Hero;

