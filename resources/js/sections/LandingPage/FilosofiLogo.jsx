import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import DekorasiKanan from "../../../assets/dekorKanan.png";
import DekorasiKiri from "../../../assets/dekorKiri.png";
import { motion } from "framer-motion";
import Logo from "../../../assets/logo.png";
const dummyData = [
    {
        id: 0,
        title: "Filosofi Logo",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH",
        detailDescription:
            "Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi",
        logoImage: Logo,
    },
    {
        id: 1,
        title: "Filosofi Logo",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "SIMBOL KEBERAGAMAN",
        detailDescription:
            "Menggambarkan keberagaman budaya Indonesia yang bersatu dalam harmoni",
        logoImage: Logo,
    },
    {
        id: 2,
        title: "Sejarah Kampung Budaya",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "AKAR POHON DENGAN SIMBOL TRADISI",
        detailDescription:
            "Menggambarkan akar budaya yang kuat dan berakar dalam tradisi lokal",
        logoImage: Logo,
    },
    {
        id: 3,
        title: "Misi Kampung Budaya",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "GENGGAM TANGAN DENGAN LAMBANG PERSATUAN",
        detailDescription:
            "Simbol dari persatuan dan kolaborasi antar budaya di Indonesia",
        logoImage: Logo,
    },
    {
        id: 4,
        title: "Visi Kampung Budaya",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "PELAWANGAN DENGAN MOTTO BERSATU",
        detailDescription:
            "Menggambarkan visi ke depan untuk membangun bangsa yang bersatu dan harmonis",
        logoImage: Logo,
    },
    {
        id: 5,
        title: "Arti Warna Logo",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "PALLET WARNA BIRU DAN HIJAU",
        detailDescription:
            "Warna biru melambangkan ketenangan dan hijau melambangkan pertumbuhan dan kehidupan",
        logoImage: Logo,
    },
    {
        id: 6,
        title: "Makna Motif Batik",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "MOTIF BATIK MEGAMENDUNG",
        detailDescription:
            "Melambangkan kedamaian dan ketenangan dalam berbagai situasi",
        logoImage: Logo,
    },
    {
        id: 7,
        title: "Simbol Flora dan Fauna",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "BURUNG GARUDA DAN POHON BANYAN",
        detailDescription:
            "Burung Garuda melambangkan kebesaran bangsa dan pohon banyan melambangkan ketahanan dan umur panjang",
        logoImage: Logo,
    },
    {
        id: 8,
        title: "Filosofi Tari",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "TARIAN TRADISIONAL DENGAN BUSANA ADAT",
        detailDescription:
            "Melambangkan keindahan dan kekayaan budaya melalui gerak tubuh yang indah",
        logoImage: Logo,
    },
    {
        id: 9,
        title: "Pameran Seni",
        subtitle: "Kampung Budaya 2024",
        logoDescription: "GALLERY DENGAN KARYA SENI TRADISIONAL",
        detailDescription:
            "Pameran yang menampilkan berbagai karya seni dari seniman lokal untuk merayakan keberagaman budaya",
        logoImage: Logo,
    },
  
];

const FilosofiLogo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (swiperInstance) => {
        const currentIndex = swiperInstance.activeIndex;
        setCurrentIndex(currentIndex);
    };

    const getLogo = () => {
        return dummyData.filter((e) => {
            return e.id == currentIndex;
        })[0];
    };
    return (
        <section className="container mx-auto py-10 relative">
        <div className="flex justify-between items-center">
            <img
                src={DekorasiKiri}
                alt="dekorasi"
                className=""
                draggable="false"
            />
            <div className="font-playfair font-bold text-7xl text-center">
                <h1 className="text-primary300">Filosofi Logo</h1>
                <h1 className="text-primary100">Kampung Budaya 2024</h1>
            </div>
            <img
                src={DekorasiKanan}
                alt="dekorasi"
                className=""
                draggable="false"
            />
        </div>
        <main className="flex justify-center items-center">
            <div className="w-1/2 p-20">
                <img
                    src={getLogo()?.logoImage}
                    alt={getLogo().title}
                    className="relative  size-full "
                    draggable='false'
                />
            </div>
            <div className="space-y-4 w-1/2 font-jakarta">
                <h5 className="font-bold text-4xl text-secondary300 ">
                    {getLogo()?.logoDescription}
                </h5>
                <p className="font-medium text-2xl text-primary300">
                    {getLogo()?.detailDescription}
                </p>
            </div>
        </main>
        <div className="swiper-button-prev "></div>
        <div className="swiper-button-next"></div>
        <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                enabled:true
            }}

            pagination={{
                el: '.swiper-pagination',
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
                stretch: 50,
                depth: 200,
                modifier: 5,
                slideShadows: false,
            }}
            initialSlide={currentIndex}
            onActiveIndexChange={updateIndex}
            className="w-3/5"
        >
            {dummyData.map((e) => (
                <SwiperSlide key={e.id} className="w-full">
                    <motion.img
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        src={e.logoImage}
                        className="w-20 relative z-20 mx-auto cursor-pointer"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
<div className="swiper-pagination"></div>
    </section>
    );
};

export default FilosofiLogo;
