import React from "react";
import Logo from "../../../assets/logo.png";
import dekorKanan from "../../../assets/dekorKanan.png";
import dekorKiri from "../../../assets/dekorKiri.png";
import Meteors from "@/Components/magicui/meteors";
import TextImage from "../../../assets/Rangkaian Kegiatan Pelestarian Budaya.png";
import { motion } from "framer-motion";
const RangkaianKegiatan = () => {
    return (
        <section className="lg:py-64 flex items-center relative justify-center ">
            <main className="container mx-auto  ">
                <div className="  absolute top-0 left-0 flex w-full flex-col items-center justify-center rounded-lg ">
                    <Meteors />
                </div>
                <div className="flex flex-col">
                    <p className=" font-jakarta text-xl text-secondary500 font-medium flex gap-2 items-center">
                        {" "}
                        <img draggable="false" src={Logo} alt="" /> Kampung
                        Budaya 2024
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
                <div className="flex justify-between items-center ">
                    <motion.img
                        animate={{
                            y:[10,0,10,0,10]
                        }}
                        transition={{
                            duration:10,
                            ease:"linear",
                            repeat:Infinity
                        }}
                        className="w-1/6"
                        draggable="false"
                        src={dekorKiri}
                        alt="dekor"
                    />
                    <p className="text-xl  text-balance  text-text text-center">
                        Dilaksanakan oleh Kementerian Dalam Negeri Eksekutif
                        Mahasiswa Universitas Brawijaya yang didalamnya terdapat
                        rangkaian rangkaian kegiatan seperti:
                    </p>
                    <motion.img
                      animate={{
                        y:[0,10,0,10,0]
                    }}
                    transition={{
                        duration:10,
                        ease:"linear",
                        repeat:Infinity
                    }}
                        className="w-1/6"
                        draggable="false"
                        src={dekorKanan}
                        alt="dekor"
                    />
                </div>
                <div className="space-y-3 font-jakarta  flex flex-col items-center">
                    <p className="text-xl text-text">Seminar, Podcast</p>
                    <p className="text-xl text-text">
                        Lomba lomba budaya, Parade{" "}
                    </p>
                    <p className="text-xl text-text">Gelora puncak</p>
                    <p className="text-secondary500 font-jakarta  text-center w-4/5 mx-auto text-xl ">
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
