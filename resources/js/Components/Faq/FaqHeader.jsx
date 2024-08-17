import React from "react";
import FaqLogo from "../../../assets/FaqLogo.svg";

const FaqHeader = () => {
    return (
        <div className="hidden md:block relative w-full md:h-[600px] lg:h-full">
            <div className="absolute inset-x-4 bottom-[-25px] z-10 h-12 bg-secondary300 rounded-[40px]"></div>
            <div className="absolute inset-x-[0.75rem] bottom-[-13px] z-20 h-12 bg-secondary500 rounded-[40px]"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-secondary500 to-secondary300 rounded-[40px] z-30">
                <div className="md:text-4xl lg:text-6xl font-lora text-[#FFF]">
                    <h1 className="leading-normal w-full h-48 md:pt-4 md:pl-6 lg:pt-6 lg:pl-12">
                        Frequently Ask Question
                    </h1>
                </div>
                <img
                    src={FaqLogo}
                    draggable="false"
                    className="absolute bottom-4 right-4"
                />
            </div>
        </div>
    );
};

export default FaqHeader;
