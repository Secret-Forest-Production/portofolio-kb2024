import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

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
            className="w-full relative  h-[300vh] bg-primary500"
            >
            <div className="h-screen sticky top-0 flex items-center justify-center">
                <div className="max-w-5xl mx-auto">
                    {content.map((item, lineIndex) => {
                        const words = item.split(" ");
                        return (
                            <p key={lineIndex} className="text-4xl flex flex-wrap leading-tight font-jakarta font-bold mb-4">
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
        {/* <section className="h-screen bg-primary500"></section> */}
</>
    );
};

const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const y = useTransform(progress, range, [20, 0]);
    
    return (
        <span className="mr-5 mt-5 relative inline-block">
            <motion.span style={{ opacity, y }} className="absolute text-white">
                {children}
            </motion.span>
            <span className="opacity-15 text-white">{children}</span>
        </span>
    );
};

export default VisiMisi;