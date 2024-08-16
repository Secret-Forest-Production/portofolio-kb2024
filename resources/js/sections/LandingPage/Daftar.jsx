import React from 'react'
import TitleHeader from '../../../assets/Kami Menantikan Partisipasimu.png'
import Dekorasi from '../../../assets/daftarDekorasi.png'
import { motion } from 'framer-motion'

const Daftar = () => {
  return (
    <section className='py-10 container mx-auto space-y-4 flex flex-col items-center'>
      <motion.img
      initial={{
        opacity:0,
        y:100
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        type:'spring',
        stiffness:300
      }}
      src={TitleHeader} draggable='false' alt="Kami Menantikan Partisipasimu" className='mx-auto' />
      <p className='font-jakarta  lg:text-2xl text-center  font-light text-primary500'>Jangan lewatkan lomba-lomba dan forum daerah</p>
      <img src={Dekorasi} draggable='false' alt="dekorasi" className='mx-auto' />
      <motion.button 
      whileTap={{scale:0.95}}
      
      className='px-8 py-2 rounded-3xl hover:bg-primary300 duration-300 ease-in-out bg-primary500 text-white font-jakarta lg:text-xl '>Daftar Sekarang</motion.button>
    </section>
  )
}

export default Daftar
