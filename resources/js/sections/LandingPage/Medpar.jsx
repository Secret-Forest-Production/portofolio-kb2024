import React from "react";
import DekorAtas from "../../../assets/dekormedparatas.png";
import DekorBawah from "../../../assets/dekormedparbawah.png";
import IconCloud from "@/Components/magicui/icon-cloud";

import Logo from "../../../assets/logo.png";
import Marquee from "@/Components/magicui/marquee";

const Medpar = () => {
    const slugs = [Logo, Logo, Logo, Logo, Logo];
    return (
        <section className="py-10 space-y-4  font-jakarta">
            <div className="flex container mx-auto flex-col gap-4 items-center">
                <img src={DekorAtas} alt="dekoratas" draggable="false" />
                <h1 className="font-extrabold text-7xl text-primary300">
                    OUR SPONSOR
                </h1>
            </div>
            <Marquee pauseOnHover className="[--duration:20s] ">
                {slugs.map((item, i) => (
                    <img src={item} key={i} className="w-32" alt="" />
                ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:20s] ">
                {slugs.map((item, i) => (
                    <img src={item} key={i} className="w-32" alt="" />
                ))}
            </Marquee>

            <div className="flex flex-col container mx-auto gap-4 items-center">
                <h1 className="font-extrabold text-7xl text-primary300">
                    AND MEDIA PARTNER
                </h1>
                <img src={DekorBawah} alt="dekorbawah" draggable="false" />
            </div>
        </section>
    );
};

export default Medpar;
