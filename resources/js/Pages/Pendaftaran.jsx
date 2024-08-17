import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia"; // Import Inertia
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

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedId((prevId) => {
                const nextId = (prevId % images.length) + 1;
                setSelectedImage(images.find((image) => image.id === nextId));
                return nextId;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleChangeImage = (index) => {
        setFade(false);
        setTimeout(() => {
            setSelectedImage(images[index]);
            setSelectedId(images[index].id);
            setFade(true);
        }, 300);
    };

    const handleButtonClick = () => {
        Inertia.visit(
            `/pendaftaran/${encodeURIComponent(selectedImage.title)}`
        );
    };

    return (
        <>
            <section
                className="min-h-screen bg-cover bg-center bg-no-repeat z-40"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                {/* Header */}
                <header className="text-center font-jakarta font-bold pt-32">
                    <h2 className="text-5xl text-secondary500">Lomba Umum &</h2>
                    <h2 className="text-5xl text-primary300">Forum Daerah</h2>
                    <p className="mt-3 text-md text-primary300 font-normal">
                        Panggung terbesar untuk Forda dan komunitas budaya untuk
                        unjuk
                    </p>
                    <p className="text-md text-primary300 font-normal">
                        kemampuan dan meraih prestasi.
                    </p>
                </header>

                {/* Konten Utama */}
                <div className="flex justify-center items-start space-x-16 mt-8">
                    {/* Gambar Horizontal */}
                    <div className="relative w-full h-auto max-w-3xl">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className={`rounded-xl shadow-lg w-full h-full transition-opacity duration-300 ${
                                fade ? "opacity-100" : "opacity-0"
                            }`}
                        />

                        <ShimmerButton
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white px-6 py-2 rounded-full hover:bg-primary100"
                            background="#004140"
                            shimmerSize="0.09em"
                            onClick={handleButtonClick}
                        >
                            Lanjutkan Pendaftaran
                        </ShimmerButton>
                    </div>

                    {/* List Kotak */}
                    <div className="grid grid-rows-3 gap-8 max-w-xs ml-8 font-jakarta text-primary300 font-bold">
                        {/* Kotak Videografi */}
                        <div
                            className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-24 w-40 ml-20 hover:bg-gray-200 ${
                                selectedId === 2 ? "bg-secondary500" : ""
                            }`}
                            onClick={() => handleChangeImage(1)}
                        >
                            <img
                                src={logoVideografi}
                                alt="Videografi"
                                className="h-16 object-contain"
                            />
                            <p className="absolute text-center text-md font-semibold w-full mt-32">
                                Videografi
                            </p>
                        </div>

                        {/* Dua kotak sejajar */}
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            <div
                                className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-24 hover:bg-gray-200 ${
                                    selectedId === 3 ? "bg-primary500" : ""
                                }`}
                                onClick={() => handleChangeImage(2)}
                            >
                                <img
                                    src={logoTariTradisional}
                                    alt="Tari Tradisional"
                                    className="h-28 -mt-8 object-contain"
                                />
                                <p className="absolute text-center text-md font-semibold w-full mt-32">
                                    Tari Tradisional
                                </p>
                            </div>
                            <div
                                className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-24 hover:bg-gray-200 ${
                                    selectedId === 4 ? "bg-primary500" : ""
                                }`}
                                onClick={() => handleChangeImage(3)}
                            >
                                <img
                                    src={logoBusanaKreasi}
                                    alt="Busana Kreasi"
                                    className="h-28 -mt-8 object-contain"
                                />
                                <p className="absolute text-center text-md font-semibold w-full mt-32">
                                    Busana Kreasi
                                </p>
                            </div>
                        </div>

                        {/* Dua kotak sejajar */}
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            <div
                                className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-24 hover:bg-gray-200 ${
                                    selectedId === 5 ? "bg-primary500" : ""
                                }`}
                                onClick={() => handleChangeImage(4)}
                            >
                                <img
                                    src={logoBazarKebudayaan}
                                    alt="Bazar Kebudayaan"
                                    className="h-40 -mt-12 object-contain"
                                />
                                <p className="absolute text-center text-md font-semibold w-full mt-32">
                                    Bazar Kebudayaan
                                </p>
                            </div>
                            <div
                                className={`relative cursor-pointer bg-white shadow-lg rounded-lg flex items-center justify-center h-24 hover:bg-gray-200 ${
                                    selectedId === 6 ? "bg-primary500" : ""
                                }`}
                                onClick={() => handleChangeImage(5)}
                            >
                                <img
                                    src={logoCeritaNusantara}
                                    alt="Cerita Nusantara"
                                    className="h-24 -mt-8 object-contain"
                                />
                                <p className="absolute text-center text-md font-semibold w-full mt-32">
                                    Cerita Nusantara
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pendaftaran;
