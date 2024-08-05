import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import KilasBalikImage from '@/Data/KilasBalik';

const KilasBalik = () => {


  return (
    <section className='py-10'>
      <main className='text-7xl font-jakarta font-extrabold mx-auto text-center container'>
        <h1 className='text-primary300'>Kilas Balik</h1>
        <h1 className='bg-gradient-to-r from-secondary500 via-[#E8CF75] w-fit bg-clip-text text-transparent h-20 mx-auto to-secondary500'>
          Kampung Budaya 2023
        </h1>
      </main>
      
      <div className=' mt-10 py-5'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={6}
          loop={true}
          
          
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: -40,
            modifier: 1.5,
            slideShadows:false
       
          }}   
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='mySwiper'
          style={{
            paddingTop:42,
            paddingBottom:42,
          }}
    
        
        >
          {KilasBalikImage.map((image, index) => (
            <SwiperSlide key={index} className=' flex items-center justify-center'>
              <img src={image} loading='lazy' className='w-full aspect-[5/4] object-cover  rounded-sm bg-yellow-100' alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default KilasBalik;