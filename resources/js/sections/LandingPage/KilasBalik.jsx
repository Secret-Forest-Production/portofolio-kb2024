import React from 'react';
import HeroVideoDialog from "@/Components/magicui/hero-video-dialog";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const KilasBalik = () => {


  return (
    <section className='py-10'>
      <main className='lg:text-7xl text-3xl font-jakarta font-extrabold mx-auto text-center container'>
        <h1 className='text-primary300'>Kilas Balik</h1>
        <h1 className='bg-gradient-to-r from-secondary500 via-[#E8CF75] w-fit bg-clip-text text-transparent h-20 mx-auto to-secondary500'>
          Kampung Budaya
        </h1>
      </main>

      <div className='mt-10 py-5'>
          <div className="max-w-2xl mx-auto flex flex-col justify-center items-center px-7 lg:px-0 relative">
              <div className="relative rounded-2xl p-1 overflow-hidden">
                  <HeroVideoDialog
                      animationStyle="top-in-bottom-out"
                      videoSrc="https://www.youtube.com/embed/BTTgs6HURiM?si=9I2j35TX9l2DYDy0"
                      thumbnailSrc="https://img.youtube.com/vi/BTTgs6HURiM/maxresdefault.jpg"
                      thumbnailAlt="After Movie Kampung Budaya 2022"
                  />
              </div>
          </div>
      </div>
    </section>
  );
};

export default KilasBalik;
