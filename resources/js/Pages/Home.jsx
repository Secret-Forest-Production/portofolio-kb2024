
import {  Head } from "@inertiajs/react";
import { useEffect,  useState } from "react";
import NumberTicker from "@/Components/magicui/number-ticker";
import Parallax from "@/sections/LandingPage/Parallax";
import Logo from "../../assets/logo.png";
import dekorKanan from "../../assets/dekorKanan.png";
import dekorKiri from "../../assets/dekorKiri.png";
import Meteors from "@/Components/magicui/meteors";
import Ripple from "@/Components/magicui/ripple";
import maskot from '../../assets/Maskot.webp'
import wave from '../../assets/wave.png'
import FilosofiLogo from "@/sections/LandingPage/FilosofiLogo";
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
            <div className="bg-white overflow-hidden">
                <header className="h-screen relative font-jakarta flex items-center justify-center">
                    <main className="container mx-auto text-xl text-center space-y-2 relative">
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
                            Panggung terbesar untuk Forda dan komunitas budaya
                            untuk unjuk kemampuan dan meraih prestasi.
                        </p>
                    </main>
                </header>
                <Parallax />

                <section className="lg:py-64 flex items-center relative justify-center ">
                    <main className="container mx-auto  ">
                        <div className="  absolute top-0 left-0 flex w-full flex-col items-center justify-center rounded-lg ">
                            <Meteors />
                        </div>
                        <p className="lg:w-4/5 mx-auto font-jakarta text-xl text-secondary500 font-medium flex gap-2 items-center">
                            {" "}
                            <img draggable="false" src={Logo} alt="" /> Kampung
                            Budaya 2024
                        </p>

                        <h1 className="font-playfair font-bold text-primary100 text-7xl lg:w-4/5 text-center mx-auto ">
                            Rangkaian Kegiatan Pelestarian Budaya
                        </h1>
                        <div className="flex justify-between items-center ">
                            <img
                                className="w-1/6"
                                draggable="false"
                                src={dekorKiri}
                                alt="dekor"
                            />
                            <p className="text-xl  text-balance  text-text text-center">
                                Dilaksanakan oleh Kementerian Dalam Negeri
                                Eksekutif Mahasiswa Universitas Brawijaya yang
                                didalamnya terdapat rangkaian rangkaian kegiatan
                                seperti:
                            </p>
                            <img
                                className="w-1/6"
                                draggable="false"
                                src={dekorKanan}
                                alt="dekor"
                            />
                        </div>
                        <div className="space-y-3 font-jakarta  flex flex-col items-center">
                            <p className="text-xl text-text">
                                Seminar, Podcast
                            </p>
                            <p className="text-xl text-text">
                                Lomba lomba budaya, Parade{" "}
                            </p>
                            <p className="text-xl text-text">Gelora puncak</p>
                            <p className="text-secondary500 font-jakarta  text-center w-4/5 mx-auto text-xl ">
                                Yang menjadikan Kampung Budaya sebagai salah
                                satu panggung terbesar untuk Forda dan komunitas
                                budaya untuk unjuk kemampuan dan meraih
                                prestasi.
                            </p>
                        </div>
                    </main>
                </section>
                <section className="">
                    <div className="relative flex h-[500px] w-full flex-col items-center justify-center ">
                        <p className="z-10 whitespace-pre-wrap text-center  tracking-tighter text-transparent font-jakarta text-8xl font-bold bg-clip-text bg-gradient-to-r from-secondary500 via-[#E8CF75] to-secondary500">
                        MEET OUR MASCOT
                        </p>
                        <img src={maskot} className="mx-auto w-1/5 top-[-10%] relative z-20"  alt="" />
                        <Ripple />
                        <img src={wave} alt="wave" draggable='false' className=" absolute bottom-0 z-30" />
                    </div>
                </section>
                <FilosofiLogo/>
                <section className="w-full h-[400vh] rounded-t-3xl bg-primary500">

                </section>
            </div>
        </>
    );
}
