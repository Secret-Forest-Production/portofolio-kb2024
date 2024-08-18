import React, { useRef } from "react";
import NumberTicker from "@/Components/magicui/number-ticker";
import DecorationKanan1 from "../../../assets/Herokanan1.png";
import DecorationKanan2 from "../../../assets/Herokanan2.png";
import DecorationKanan3 from "../../../assets/Herokanan3.png";
import DecorationKiri1 from "../../../assets/Herokiri1.png";
import DecorationKiri2 from "../../../assets/Herokiri2.png";
import DecorationKiri3 from "../../../assets/Herokiri3.png";
import { motion, transform, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const target = useRef(null);

    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start start", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
    useMotionValueEvent(x, "change", (latest) => {
        console.log("Page scroll: ", latest)
      })

    return (
        <header
            ref={target}
            className="h-screen relative overflow-hidden font-jakarta flex items-center justify-center"
        >
            <main className="container  mx-auto text-xl text-center space-y-2 relative">
                        <motion.img
                            initial={{
                                top: "300%",
                            }}
                            animate={{
                                top: window.innerWidth>768?"15%":'0%',
                            }}
                            
                            
                            whileHover={{
                                scale: 1.1
                            }}
                            transition={{
                                stiffness: 100,
                                type: "spring",
                                duration: 10,
                            }}
                            style={{
                                translateY:"-100%"
                            }}
                            className="absolute lg:w-auto w-1/5  right-[23%] "
                            src={DecorationKanan1}
                            alt="dekorasi-kanan"
                            draggable="false"
                        />
                    <motion.img
                        initial={{
                            top: "300%",
                        }}
                        animate={{
                            top: window.innerWidth>768?"150%":"170%",
                        }}
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            stiffness: 100,
                            type: "spring",
                            duration: 10,
                            top:{
                                delay: 0.4,
                            }
                        }}
                        style={{
                            translateY:"-100%"
                        }}
                        className="absolute lg:w-auto w-1/5 right-[15%] "
                        src={DecorationKanan2}
                        alt="dekorasi-kanan"
                        draggable="false"
                    />

                    <motion.img
                        initial={{
                            top: "300%",
                        }}
                        animate={{
                            top: window.innerWidth>768?"50%":"120%",
                        }}
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            stiffness: 100,
                            type: "spring",
                            duration: 10,
                            top:{
                                delay: 0.6,
                            }
                        }}
                        style={{
                            translateY:"-50%"
                        }}
                        className="absolute lg:w-auto w-1/5 right-[5%] "
                        src={DecorationKanan3}
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
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            stiffness: 100,
                            type: "spring",
                            duration: 10,
                            top:{
                                delay: 0.4,
                            }
                        }}
                        style={{
                            translateY : "-100%"
                        }}
                        className="absolute  lg:w-auto w-1/5 left-[15%]"
                        src={DecorationKiri2}
                        alt="dekorasi-kanan"
                        draggable="false"
                    />

                    <motion.img
                        initial={{
                            top: "300%",
                        }}
                        animate={{
                            top: window.innerWidth>768?"60%":'10%',
                        }}
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            stiffness: 100,
                            type: "spring",
                            duration: 10,
                        }}
                        style={{
                            translateY : "-100%"
                        }}
                        className="absolute lg:w-auto w-1/5 left-[13%] "
                        src={DecorationKiri1}
                        alt="dekorasi-kiri"
                        draggable="false"
                    />
                    <motion.img
                        initial={{
                            top: "300%",
                        }}
                        animate={{
                            top: window.innerWidth>768?"50%":'-50%',
                        }}
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            stiffness: 100,
                            type: "spring",
                            duration: 10,
                            top:{
                                delay: 0.4,
                            }
                        }}
                        style={{
                            translateY : "-50%"
                        }}
                        className="absolute lg:w-auto w-1/5  left-[5%] "
                        src={DecorationKiri3}
                        alt="dekorasi-kanan"
                        draggable="false"
                    />

                {/* Kiri end */}

                <h1 className="lg:text-6xl text-3xl font-bold text-primary300 ">
                    Mempersembahkan
                </h1>
                <h1 className="lg:text-6xl text-4xl bg-clip-text h-20 bg-gradient-to-r from-secondary500 to-secondary300 text-transparent font-bold">
                    Kampung Budaya{" "}
                    <span className="">
                        {" "}
                        <NumberTicker
                            value={2024}
                            className={"text-[#2AC6B3]"}
                        />
                    </span>
                </h1>
                <p className="lg:text-lg text-sm lg:w-1/2 mx-auto text-primary300 ">
                    Panggung terbesar untuk Forda dan komunitas budaya untuk
                    unjuk kemampuan dan meraih prestasi.
                </p>
            </main>
        </header>
    );
};

export default Hero;

