import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import dekorasi from '../../../assets/visimisidecoration.webp'
const content = [
    "Visi",
    "Membangun Harmoni dalam Diversitas Identitas",
    "Misi",
    "Mengenalkan keberagaman budaya Indonesia 💫 Mendorong kolaborasi dan kemitraan dengan elemen masyarakat ✨ Meningkatkan peran mahasiswa dalam melestarikan kebudayaan Indonesia 🌟 ",
];

const VisiMisi = () => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start start", "end end"],
    });

    const totalWords = content.reduce((acc, line) => acc + line.split(" ").length, 0);
    let wordCounter = 0;
    
    return (
        <>
        {/* <section className="h-screen bg-primary500 rounded-t-3xl"></section> */}
        <section
            ref={target}
            className="w-full relative rounded-t-3xl  h-[300vh] bg-primary500"
            >
            <div className="h-screen sticky top-0 flex items-center justify-center">
                <div className="max-w-5xl mx-auto lg:px-0 px-4">
                    {content.map((item, lineIndex) => {
                        const words = item.split(" ");
                        return (
                            <p key={lineIndex} className={` ${lineIndex==2?'text-end  w-fit ms-auto':''} flex flex-wrap   font-bold lg:mb-4 ${lineIndex===0||lineIndex===2?'font-kampungbudaya text-lg lg:text-5xl font-bold':"font-jakarta text-base lg:text-4xl"}`}>
                                {words.map((word, wordIndex) => {
                                    const start = wordCounter / totalWords;
                                    const end = (wordCounter + 1) / totalWords;
                                    wordCounter++;
                                    return (
                                        <Word 
                                        key={`${lineIndex}-${wordIndex}`} 
                                        range={[start, end]} 
                                        progress={scrollYProgress}
                                        >
                                            {word}
                                        </Word>
                                    );
                                })}
                            </p>
                        );
                    })}
                </div>
            </div>
        </section>
        <section className="h-[20vh] relative rounded-b-3xl bg-primary500 mb-44">
            <img src={dekorasi} alt="dekorasi" draggable='false' className="absolute bottom-0 lg:w-2/5 left-1/2 -translate-x-1/2 translate-y-1/2" />

        </section>
</>
    );
};

const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const y = useTransform(progress, range, [20, 0]);
    
    return (
        <span className="lg:mr-5 mr-3 mt-3 lg:mt-5 relative inline-block">
            <motion.span style={{ opacity, y }} className="absolute text-white">
                {children}
            </motion.span>
            <span className="opacity-15 text-white">{children}</span>
        </span>
    );
};

export default VisiMisi;