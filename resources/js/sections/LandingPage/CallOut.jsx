import React from "react";

const CallOut = () => {
    return (
        <div className="bg-primary300 text-white py-5 px-8 h-auto flex flex-col items-center space-y-6">
            <div className=" py-8 w-10/12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="  space-x-0   md:space-y-0">
                    <h2 className="font-bold text-2xl lg:text-3xl font-poppins">
                        Calling Out
                    </h2>
                    <p className="text-md">Media Partner and Sponsor</p>
                </div>
                <div className="md:ml-8 flex space-x-4 justify-center">
                    <a href="https://wa.me/6281346593715?text=Saya%20tertarik%20dan%20ingin%20bekerja%20sama%20dalam%20kegiatan%20Kampung%20Budaya%2024.%20Mohon%20informasinya%20lebih%20lanjut.">
                        <button className="bg-secondary300 text-white px-16 py-3 rounded-[3.5rem] hover:bg-teal-700 text-center font-jakarta">
                            Contact Us
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CallOut;
