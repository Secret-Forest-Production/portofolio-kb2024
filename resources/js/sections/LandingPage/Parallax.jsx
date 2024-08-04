import React, { useRef } from "react";
import Decoration from '../../../assets/headerDecoration.png';
import Bg from '../../../assets/bg-landing.png';
import { motion, useScroll, useTransform } from "framer-motion";
import awan from '../../../assets/awan.png'
import parallaxImage from '../../../assets/parallax.png'

const Parallax = () => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start end", "start start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [400, 0]);

    return (
        <motion.section
            ref={target}
            className="h-[120vh] relative flex items-end "
        >
            <img
                src={Decoration}
                className="w-full absolute top-0 left-0 -translate-y-1/4"
                draggable="false"
                alt="decoration"
            />
            <img
                src={Bg}
                alt="background"
                className="size-full object-cover"
                draggable="false"
            />
            <motion.img
                initial={{}}
                style={{
                    y: y,
                }}
                src={parallaxImage}
                alt="parallax"
                className=" absolute translate-y-1/2 "
                draggable="false"
            />
            <img
                src={awan}
                alt="awan"
                className="scale-125 z-40 absolute bottom-0 translate-y-2/4"
                draggable="false"
            />
        </motion.section>
    );
};

export default Parallax;
