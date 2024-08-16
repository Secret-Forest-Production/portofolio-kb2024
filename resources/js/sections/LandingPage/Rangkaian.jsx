import React from "react";
import Mahkota from "../../../assets/mahkota.webp";
import TextRangkaian from "../../../assets/Rangkaian Kegiatan.png";
import Rangkaian1 from "../../../assets/rangkaian1.png";
import Rangkaian2 from "../../../assets/rangkaian2.png";
import { motion } from "framer-motion";

const Rangkaian = () => {
    return (
        <section className="space-y-4 container">
            <div className="flex flex-col gap-5 text-secondary300 justify-center items-center">
                <motion.img
                    animate={{
                        scale: [1, 1.01, 1, 0.99, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease:"linear"
                    }}
                    src={Mahkota}
                    alt="mahkota"
                    draggable="false"
                    className=""
                />
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
            src={TextRangkaian} draggable='false' alt="text" className="lg:w-3/5" />
            </div>
            <main className="space-y-4">
                <img src={Rangkaian1} draggable='false' alt="info-img" className="lg:w-3/5 mx-auto" />
                <img src={Rangkaian2} draggable='false' alt="info-img" className="lg:w-3/5 mx-auto" />
            </main>
        </section>
    );
};

export default Rangkaian;
