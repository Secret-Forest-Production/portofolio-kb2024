import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Parallax from "@/sections/LandingPage/Parallax";

import Ripple from "@/Components/magicui/ripple";
import maskot from "../../assets/maskot.png";
import wave from "../../assets/wave.png";
import FilosofiLogo from "@/sections/LandingPage/FilosofiLogo";
import VisiMisi from "@/sections/LandingPage/VisiMisi";
import KilasBalik from "@/sections/LandingPage/KilasBalik";
import Rangkaian from "@/sections/LandingPage/Rangkaian";
import RangkaianKegiatan from "@/sections/LandingPage/RangkaianKegiatan";
import Daftar from "@/sections/LandingPage/Daftar";
import { VelocityScroll } from "@/Components/magicui/scroll-based-velocity";
import Medpar from "@/sections/LandingPage/Medpar";
import AppLayout from "@/Layouts/AppLayout";
import Hero from "@/sections/LandingPage/Hero";
export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 2024) {
            const timer = setTimeout(() => {
                setCount((prevCount) => prevCount + 2);
            }, 1);
            return () => clearTimeout(timer);
        }
    }, [count]);

    return (
        <>
            <Head title="home" />
            <AppLayout>
                <div className="bg-white ">
                    <Hero/>
                    <Parallax />
                    {/* <RangkaianKegiatan />
                    <section className="">
                        <div className="relative flex h-[500px] w-full flex-col items-center justify-center ">
                            <p className="z-10 whitespace-pre-wrap text-center  tracking-tighter text-transparent font-jakarta text-8xl font-bold bg-clip-text bg-gradient-to-r from-secondary500 via-[#E8CF75] to-secondary500">
                                MEET OUR MASCOT
                            </p>
                            <img
                                src={maskot}
                                className="mx-auto w-1/3 top-[-10%] relative z-20"
                                alt=""
                            />
                            <Ripple />
                            <img
                                src={wave}
                                alt="wave"
                                draggable="false"
                                className=" absolute bottom-0 z-30"
                            />
                        </div>
                    </section>
                    <FilosofiLogo />
                    <VisiMisi />
                    <KilasBalik />
                    <Rangkaian />
                    <Daftar />
                    <VelocityScroll
                        text="Bekasi Padang Jakarta Malang Lombok"
                        default_velocity={2}
                        className="font-kampungbudaya text-center text-4xl font-bold tracking-[-0.02em] text-secondary500 drop-shadow-sm  md:text-5xl md:leading-[5rem]"
                    />{" "}
                    <Medpar /> */}
                    <section className="h-[300vh]"></section>
                </div>
            </AppLayout>
        </>
    );
}
