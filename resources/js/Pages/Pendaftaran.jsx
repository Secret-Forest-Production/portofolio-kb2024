import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import ShimmerButton from "@/Components/magicui/shimmer-button";
import Bg from "../../assets/bg-pendaftaran.webp";
import modatradisional from "../../assets/busana-kreasi.webp";
import legendanusantara from "../../assets/cerita.webp";
import lensabudaya from "../../assets/videografi.webp";
import bazarkebudayaan from "../../assets/bazar-kebudayaan.webp";
import ekspresi from "../../assets/tari.webp";
import logoVideografi from "../../assets/cam.png";
import logoTariTradisional from "../../assets/logo-tari-tradisional.png";
import logoBusanaKreasi from "../../assets/logo-busana-kreasi.png";
import logoBazarKebudayaan from "../../assets/logo-bazar-kebudayaan.png";
import logoCeritaNusantara from "../../assets/logo-cerita-nusantara.png";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";

const Pendaftaran = () => {
    const images = [
        { id: 1, title: "Persembahan Moda Tradisional", src: modatradisional },
        { id: 2, title: "Videografi", src: lensabudaya },
        { id: 3, title: "Tari Tradisional", src: ekspresi },
        { id: 4, title: "Busana Kreasi", src: modatradisional },
        { id: 5, title: "Bazar Kebudayaan", src: bazarkebudayaan },
        { id: 6, title: "Cerita Nusantara", src: legendanusantara },
    ];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectedId, setSelectedId] = useState(images[0].id);
    const [fade, setFade] = useState(true);

    const handleChangeImage = (index) => {
        setFade(false);
        setTimeout(() => {
            setSelectedImage(images[index]);
            setSelectedId(images[index].id);
            setFade(true);
        }, 300);
    };

    return (
        <AppLayout>
            <section
                className="h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat z-40 py-12 sm:py-24"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                {/* Header */}
                <header className="text-center font-jakarta font-bold pt-6 sm:pt-10">
                    <h2 className="text-3xl lg:text-5xl text-secondary500">
                        Lomba Umum &
                    </h2>
                    <h2 className="text-3xl sm:text-5xl text-primary300">
                        Forum Daerah
                    </h2>
                    <p className="mt-2 sm:mt-3 lg:text-base text-xs text-primary300 font-normal">
                        Panggung terbesar untuk Forda dan komunitas budaya untuk
                        unjuk
                    </p>
                    <p className="text-md text-primary300 text-xs lg:text-base font-normal">
                        kemampuan dan meraih prestasi.
                    </p>
                </header>
                {/* Konten Utama */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-16 mt-6 sm:mt-8">
                    {/* Gambar Horizontal */}
                    <div className="relative w-full h-auto max-w-2xl sm:max-w-3xl mx-auto sm:mx-0">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className={`rounded-xl shadow-lg w-full h-full transition-opacity duration-300 ${
                                fade ? "opacity-100" : "opacity-0"
                            }`}
                        />
                        <Link href={route("daftar1", selectedImage.title)}>
                            <ShimmerButton
                                className={`absolute bottom-6 text-xs lg:text-base sm:bottom-14 left-1/2 transform -translate-x-1/2 text-white px-2 py-2 sm:px-6 sm:py-1 rounded-full hover:bg-primary100 transition-opacity duration-300 ${
                                    fade ? "opacity-100" : "opacity-0 "
                                }`}
                                background="#004140"
                                shimmerSize="0.07em"
                            >
                                Lanjutkan Pendaftaran
                            </ShimmerButton>
                        </Link>
                    </div>

                    {/* List Kotak */}
                    <div className="grid grid-cols-1 items-center sm:grid-rows-3 gap-6 sm:gap-8 max-w-xs sm:ml-8 font-jakarta text-primary300 font-bold  sm:mt-0">
                        <div className="flex gap-3 lg:-mt-44 ">
                            <a
                                href="https://drive.google.com/file/d/1fRqC1sf5b13KLos7xji8kSS-qwROoDcK/view?usp=drivesdk"
                                download="Booklet.pdf"
                            >
                                <button
                                    type="submit"
                                    className=" bg-white text-teal-600  px-12 py-1 rounded-[0.5rem] hover:bg-teal-700 hover:text-white  text-center font-jakarta shadow-lg"
                                >
                                    Booklet
                                </button>
                            </a>
                            <a
                                href="https://drive.google.com/drive/folders/1hQI_aqDYioMnsPB9ZgXJqYG9R9LKA8Dg?usp=drive_link"
                                download="Booklet.pdf"
                            >
                                <button
                                    type="submit"
                                    className=" bg-white text-teal-600 px-12 py-1 rounded-[0.5rem] hover:bg-teal-700 hover:text-white text-center font-jakarta shadow-lg"
                                >
                                    Formulir
                                </button>
                            </a>
                        </div>

                        {/* Kotak Videografi */}
                        <div
                            className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-20 sm:h-24 w-40 mx-auto lg:-mt-44 sm:ml-20 hover:bg-gray-200 ${
                                selectedId === 2 ? "bg-secondary500" : ""
                            }`}
                            onClick={() => handleChangeImage(1)}
                        >
                            <img
                                src={logoVideografi}
                                alt="Videografi"
                                className="h-12 sm:h-16 object-contain"
                            />
                            <p className="absolute text-center text-sm sm:text-md font-semibold w-full mt-28 sm:mt-32">
                                Videografi
                            </p>
                        </div>

                        {/* Dua kotak sejajar */}
                        <div className="grid grid-cols-2 gap-4 mt-3  lg:-mt-12 ">
                            <div
                                className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center  justify-center h-20 sm:h-24 hover:bg-gray-200 ${
                                    selectedId === 3 ? "bg-primary500" : ""
                                }`}
                                onClick={() => handleChangeImage(2)}
                            >
                                <img
                                    src={logoTariTradisional}
                                    alt="Tari Tradisional"
                                    className="h-20 sm:h-28 -mt-4 sm:-mt-8 object-contain"
                                />
                                <p className="absolute text-center text-sm sm:text-md font-semibold w-full mt-28 sm:mt-32">
                                    Tari Tradisional
                                </p>
                            </div>
                            <div
                                className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-20 sm:h-24 hover:bg-gray-200 ${
                                    selectedId === 4 ? "bg-primary500" : ""
                                }`}
                                onClick={() => handleChangeImage(3)}
                            >
                                <img
                                    src={logoBusanaKreasi}
                                    alt="Busana Kreasi"
                                    className="h-20 sm:h-28 -mt-4 sm:-mt-8 object-contain"
                                />
                                <p className="absolute text-center text-sm sm:text-md font-semibold w-full mt-28 sm:mt-32">
                                    Busana Kreasi
                                </p>
                            </div>
                        </div>

                        {/* Dua kotak sejajar */}
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            <div
                                className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-20 sm:h-24 hover:bg-gray-200 ${
                                    selectedId === 5 ? "bg-primary500" : ""
                                }`}
                                onClick={() => handleChangeImage(4)}
                            >
                                <img
                                    src={logoBazarKebudayaan}
                                    alt="Bazar Kebudayaan"
                                    className="h-16 lg:h-40 -mt-6 sm:-mt-12 object-contain"
                                />
                                <p className="absolute text-center text-sm sm:text-md font-semibold w-full mt-28 sm:mt-32">
                                    Bazar Kebudayaan
                                </p>
                            </div>
                            <div
                                className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-20 sm:h-24 hover:bg-gray-200 ${
                                    selectedId === 6 ? "bg-primary500" : ""
                                }`}
                                onClick={() => handleChangeImage(5)}
                            >
                                <img
                                    src={logoCeritaNusantara}
                                    alt="Cerita Nusantara"
                                    className="h-16 sm:h-24 -mt-4 sm:-mt-8 object-contain"
                                />
                                <p className="absolute text-center text-sm sm:text-md font-semibold w-full mt-28 sm:mt-32">
                                    Cerita Nusantara
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
};

export default Pendaftaran;
