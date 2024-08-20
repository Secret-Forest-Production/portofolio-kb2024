import React from "react";
import Logo from "../../../assets/logo.png";
import dekorKanan from "../../../assets/dekorKanan.png";
import dekorKiri from "../../../assets/dekorKiri.png";
import Meteors from "@/Components/magicui/meteors";
import TextImage from "../../../assets/Rangkaian Kegiatan Pelestarian Budaya.png";
import { motion } from "framer-motion";
import gelanggang from "../../../assets/gelanggang.svg";
import lomba from "../../../assets/lomba.svg";
import talkshow from "../../../assets/talkshow.svg";

const RangkaianKegiatan = () => {
    return (
        <section className="lg:py-64 py-10 flex items-center relative justify-center  overflow-hidden">
            <main className="container mx-auto  ">
                <div className="  absolute top-0 left-0 flex w-full flex-col items-center justify-center rounded-lg ">
                    <Meteors />
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mt-2">
                    <p className=" font-jakarta text-xs lg:text-xl text-secondary500 font-medium flex gap-2 items-center">
                        {" "}
                        <img
                            draggable="false"
                            src={Logo}
                            className="md:w-8 w-4"
                            alt=""
                        />{" "}
                        Kampung Budaya 2024
                    </p>

                    {/* <h1 className="font-playfair font-bold text-primary100 text-7xl lg:w-4/5 text-center mx-auto ">
            Rangkaian Kegiatan Pelestarian Budaya
        </h1> */}
                    <img
                        src={TextImage}
                        draggable="false"
                        alt="rangkaian kegiatan pelestarian budaya"
                    />
                </div>
                <div className="flex justify-between items-center mt-4 lg:mt-0 h-20 md:h-40">
                    <motion.img
                        animate={{
                            y: [10, 0, 10, 0, 10],
                        }}
                        transition={{
                            duration: 10,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="w-1/6"
                        draggable="false"
                        src={dekorKiri}
                        alt="dekor"
                    />
                    <p className="lg:text-3xl md:text-sm text-xs text text-text text-center">
                        Dilaksanakan oleh Kementerian Dalam Negeri Eksekutif
                        Mahasiswa Universitas Brawijaya yang didalamnya terdapat
                        rangkaian rangkaian kegiatan seperti:
                    </p>
                    <motion.img
                        animate={{
                            y: [0, 10, 0, 10, 0],
                        }}
                        transition={{
                            duration: 10,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="w-1/6"
                        draggable="false"
                        src={dekorKanan}
                        alt="dekor"
                    />
                </div>
                <div className="space-y-3 font-jakarta mt-4 lg:mt-0 flex flex-col items-center justify-center container">
                    <div className="flex items-center justify-center gap-x-4 w-full lg:w-auto">
                        <img className="w-8 md:w-12" src={talkshow} alt="" />
                        <p className="lg:text-xl text-xs text-text">
                            Talkshow, Workshop membatik
                        </p>
                    </div>
                    <div className="flex items-center flex-grow justify-center gap-x-4 w-full lg:w-auto">
                        <img className="w-8 md:w-12" src={lomba} alt="" />
                        <p className="lg:text-xl text-xs text-text">
                            Lomba budaya, Parade
                        </p>
                    </div>
                    <div className="flex items-center flex-grow justify-center gap-x-4 w-full lg:w-auto">
                        <img className="w-8 md:w-12" src={gelanggang} alt="" />
                        <p className="lg:text-xl text-xs text-text">
                            Gelanggang Budaya Brawijaya
                        </p>
                    </div>

                    <p className="text-secondary500 font-jakarta text-center lg:w-4/5 mx-auto lg:text-xl text-xs">
                        Yang menjadikan Kampung Budaya sebagai salah satu
                        panggung terbesar untuk Forda dan komunitas budaya untuk
                        unjuk kemampuan dan meraih prestasi.
                    </p>
                </div>
            </main>
        </section>
    );
};

export default RangkaianKegiatan;
