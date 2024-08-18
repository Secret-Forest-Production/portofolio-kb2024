import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import DekorasiKanan from "../../../assets/filosofiKanan.png";
import DekorasiKiri from "../../../assets/filosofiKiri.png";
import TextJudul from "../../../assets/Filosofi Logo Kampung Budaya 2024.png";
import { motion } from "framer-motion";
import FilosofiLogoData from "@/Data/FilosofiLogoData";
import { Icon } from "@iconify/react";
import 'swiper/css/navigation';
const FilosofiLogo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (swiperInstance) => {
        const currentIndex = swiperInstance.activeIndex;
        setCurrentIndex(currentIndex);
    };

    const getLogo = () => {
        return FilosofiLogoData[currentIndex] || FilosofiLogoData[0];
    };

    return (
        <section className="container mx-auto  py-10 relative">
            <div className="flex justify-between items-center shrink-0">
                <motion.img
                    whileHover={{
                        rotate: "3deg",
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                    src={DekorasiKiri}
                    alt="dekorasi"
                    className="lg:w-auto w-1/5"
                    draggable="false"
                />
                <img
                    src={TextJudul}
                    draggable="false"
                    className="lg:w-3/5 w-1/2 "
                    alt="Filosofi Logo Kampung Budaya 2024"
                />
                <motion.img
                    whileHover={{
                        rotate: "-3deg",
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                    src={DekorasiKanan}
                    alt="dekorasi"
                    className="lg:w-auto w-1/5"
                    draggable="false"
                />
            </div>
            <main className="flex flex-col lg:flex-row justify-center items-center">
                <div className="lg:w-1/2 lg:px-20 ">
                    <motion.img
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                        }}
                        src={getLogo()?.logoImage}
                        alt={getLogo().title}
                        className="relative size-44 object-contain  lg:size-full "
                        draggable="false"
                    />
                </div>
                <div className="lg:space-y-4 space-y-2 lg:w-1/2 font-jakarta">
                    <h5 className="font-bold text-2xl lg:text-4xl text-secondary300 ">
                        {getLogo()?.logoDescription}
                    </h5>
                    <p className="font-medium text-sm lg:text-2xl text-primary300">
                        {getLogo()?.detailDescription}
                    </p>
                </div>
            </main>
            <div className="relative w-2/5 mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, EffectCoverflow]}
                    effect={"coverflow"}
                    navigation={{
                        nextEl: "#custom-swiper-button-next",
                        prevEl: "#custom-swiper-button-prev",
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    centeredSlides={true}
                    grabCursor={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 0.5,
                        },
                        767.8: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1.5,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 300,
                        modifier: 5,
                        slideShadows: false,
                    }}
                    initialSlide={currentIndex}
                    onActiveIndexChange={updateIndex}
                    className="w-full"
                >
                    {FilosofiLogoData.map((e) => (
                        <SwiperSlide key={e.id} className="w-full">
                            <motion.img
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                                src={e.logoImage}
                                className="w-32 relative z-20 mx-auto cursor-pointer"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    id="custom-swiper-button-prev"
                    className="custom-swiper-button-prev absolute  rounded-full p-2 left-0 top-1/2 z-30 -translate-y-1/2  cursor-pointer transition-transform active:scale-90 bg-white shadow-2xl drop-shadow-2xl"

                    style={{
                        filter: 'drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.6))',
                    }}
                
                >
                    <Icon
                        icon="material-symbols:arrow-back-ios"
                        className="mx-auto"
                    />
                </div>
                <div
                    id="custom-swiper-button-next"
                    className="custom-swiper-button-next absolute  rounded-full p-2 right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-transform active:scale-90 bg-white shadow-2xl drop-shadow-2xl"
                    style={{
                        filter: 'drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.6))',
                    }}
                
                >
                    <Icon
                        icon="material-symbols:arrow-forward-ios"
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default FilosofiLogo;
