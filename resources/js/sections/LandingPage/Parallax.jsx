import React, { useRef } from "react";
import Decoration from "../../../assets/headerDecoration.webp";
import Bg from "../../../assets/bg-landing.png";
import { motion, useScroll, useTransform } from "framer-motion";
import awan from "../../../assets/awan.png";
import parallaxImage from "../../../assets/parallax.webp";

const Parallax = () => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset:
            window.innerWidth > 768
                ? ["start end", "start start"]
                : ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [400, 0]);

    return (
        <motion.section
            ref={target}
            className="lg:h-[120vh] h-[40vh] relative flex items-end "
        >
            <img
                src={Decoration}
                className="w-full absolute top-0 left-0 -translate-y-[50%]"
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
                    translateY: "27%",
                }}
                src={parallaxImage}
                alt="parallax"
                className=" absolute  "
                draggable="false"
            />
            <img
                src={awan}
                alt="awan"
                className="lg:scale-125  z-40 absolute bottom-0 translate-y-2/4"
                draggable="false"
            />
        </motion.section>
    );
};

export default Parallax;
