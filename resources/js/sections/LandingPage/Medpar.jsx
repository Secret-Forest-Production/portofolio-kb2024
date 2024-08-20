import React from "react";
import DekorAtas from "../../../assets/dekormedparatas.png";
import DekorBawah from "../../../assets/dekormedparbawah.png";
import Marquee from "@/Components/magicui/marquee";
import MedparData from "@/Data/Medpar";

const Medpar = () => {
    return (
        <section className="py-10 space-y-4  font-jakarta">
            <div className="flex container mx-auto flex-col gap-4 items-center">
                <img
                    src={DekorAtas}
                    className="h-20 md:h-auto"
                    alt="dekoratas"
                    draggable="false"
                />
                <h1 className="font-extrabold text-3xl text-center lg:text-6xl text-primary300">
                    OUR SPONSOR
                </h1>
            </div>
            <Marquee pauseOnHover className="[--duration:40s] ">
                {MedparData.map((item, i) => (
                    <img
                        src={item}
                        key={i}
                        className="w-32 aspect-square object-contain"
                        alt=""
                    />
                ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:40s] ">
                {MedparData.map((item, i) => (
                    <img
                        src={item}
                        key={i}
                        className="w-20 md:w-28 aspect-square object-contain"
                        alt=""
                    />
                ))}
            </Marquee>

            <div className="flex flex-col container mx-auto gap-4 items-center">
                <h1 className="font-extrabold text-3xl text-center lg:text-6xl text-primary300">
                    AND MEDIA PARTNER
                </h1>
                <img
                    src={DekorBawah}
                    className="h-20 md:h-auto"
                    alt="dekorbawah"
                    draggable="false"
                />
            </div>
        </section>
    );
};

export default Medpar;
