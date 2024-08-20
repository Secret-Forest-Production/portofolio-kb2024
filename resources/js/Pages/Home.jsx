import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Parallax from "@/sections/LandingPage/Parallax";
import background from "../../assets/backgroundFaq.webp"
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
export default function Home(props) {
    const [count, setCount] = useState(0);

    const { flash } = usePage().props;

    useEffect(() => {
        if (count < 2024) {
            const timer = setTimeout(() => {
                setCount((prevCount) => prevCount + 2);
            }, 1);
            return () => clearTimeout(timer);
        }
    }, [count]);

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <>
            <Head title="home" />
            <AppLayout>
            {flash&&flash.success && (
        <div className="alert alert-success text-9xl">{flash.success}</div>
      )}
      {flash&&flash.error && (
        <div className="alert alert-danger">{flash.error}</div>
      )}
                <div className="bg-white ">
                    <Hero />
                    <Parallax />
                    <RangkaianKegiatan />
                    <section className="  ">
                        <div className="relative lg:overflow-visible overflow-hidden flex h-[500px] w-full flex-col items-center justify-center ">
                            <p className="z-10 whitespace-pre-wrap text-center  tracking-tighter text-transparent font-jakarta lg:text-8xl text-6xl font-bold bg-clip-text bg-gradient-to-r from-secondary500 via-[#E8CF75] to-secondary500">
                                MEET OUR MASCOT
                            </p>
                            <img
                                src={maskot}
                                className="mx-auto lg:w-1/3 top-[-10%] relative z-20"
                                alt=""
                            />
                            <Ripple />
                            <img
                                src={wave}
                                alt="wave"
                                draggable="false"
                                className=" absolute bottom-0 z-30 -translate-y-1/2 md:-translate-y-0"
                            />
                        </div>
                    </section>
                    <FilosofiLogo />
                    <VisiMisi />
                    <KilasBalik />
                    <Rangkaian />
                    <Daftar />
                    <section className="py-20">
                        <VelocityScroll
                            text="Bekasi Padang Jakarta Malang Lombok"
                            default_velocity={2}
                            className="font-kampungbudaya text-center text-4xl font-bold tracking-[-0.02em] text-secondary500 drop-shadow-sm  md:text-5xl md:leading-[5rem]"
                        />{" "}
                    </section>
                    <Medpar />
                </div>
            </AppLayout>
        </>
    );
}
