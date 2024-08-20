import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Parallax from "@/sections/LandingPage/Parallax";
import background from "../../assets/backgroundFaq.webp";
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
import CallOut from "@/sections/LandingPage/CallOut";
import { useMemo } from "react";
export default function Home(props) {
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const { flash } = usePage().props;
    const scrollText = useMemo(
        () =>
            "Kepulauan Riau\u00A0\u00A0\u00A0Minangkabau\u00A0\u00A0\u00A0Simalungun\u00A0\u00A0\u00A0Lampung\u00A0\u00A0\u00A0Sumatera Selatan\u00A0\u00A0\u00A0Jambi\u00A0\u00A0\u00A0Bogor\u00A0\u00A0\u00A0Kalimantan Selatan\u00A0\u00A0\u00A0Sukabumi\u00A0\u00A0\u00A0Bandung\u00A0\u00A0\u00A0Kalimantan Barat\u00A0\u00A0\u00A0Banyumas\u00A0\u00A0\u00A0Cilacap\u00A0\u00A0\u00A0Purbalingga\u00A0\u00A0\u00A0Banjarnegara\u00A0\u00A0\u00A0Jogjakarta\u00A0\u00A0\u00A0Demak\u00A0\u00A0\u00A0Rembang\u00A0\u00A0\u00A0Jepara\u00A0\u00A0\u00A0Wonogiri\u00A0\u00A0\u00A0Madiun\u00A0\u00A0\u00A0Trenggalek\u00A0\u00A0\u00A0Tuban\u00A0\u00A0\u00A0Jombang\u00A0\u00A0\u00A0Lamongan\u00A0\u00A0\u00A0Blitar\u00A0\u00A0\u00A0Probolinggo\u00A0\u00A0\u00A0Pamekasan\u00A0\u00A0\u00A0Gresik\u00A0\u00A0\u00A0Sumenep\u00A0\u00A0\u00A0Banyuwangi\u00A0\u00A0\u00A0Sulawesi Selatan\u00A0\u00A0\u00A0Lombok Barat\u00A0\u00A0\u00A0Toraja\u00A0\u00A0\u00A0Sulawesi Utara\u00A0\u00A0\u00A0Purworejo\u00A0\u00A0\u00A0Kebumen\u00A0\u00A0\u00A0Riau\u00A0\u00A0\u00A0Sulawesi Selatan\u00A0\u00A0\u00A0Kalimantan Tengah\u00A0\u00A0\u00A0Sampang\u00A0\u00A0\u00A0Lombok Tengah\u00A0\u00A0\u00A0Balikpapan\u00A0\u00A0\u00A0Bojonegoro",
        []
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500); // Tunda eksekusi animasi VelocityScroll

        return () => clearTimeout(timer);
    }, []);
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
                {flash && flash.success && (
                    <div className="alert alert-success text-9xl">
                        {flash.success}
                    </div>
                )}
                {flash && flash.error && (
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
                        {isLoaded && (
                            <VelocityScroll
                                text={scrollText}
                                default_velocity={0.4}
                                className={`font-kampungbudaya text-center text-4xl letter-spacing-wider word-spacing font-bold tracking-[-0.002em] text-primary100 stroke-secondary300 drop-shadow-sm md:text-5xl md:leading-[5rem] velocity-scroll ${
                                    isLoaded ? "loaded" : ""
                                }`}
                                style={{
                                    visibility: isLoaded ? "visible" : "hidden",
                                }}
                            />
                        )}
                    </section>
                    <Medpar />
                    <CallOut />
                </div>
            </AppLayout>
        </>
    );
}
