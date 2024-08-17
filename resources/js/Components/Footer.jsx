import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-darkGreen text-white py-10 px-8 h-auto flex flex-col items-center space-y-6">
            <div className="border-b border-yellow-500 py-8 w-10/12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-12 space-y-8 md:space-y-0">
                    <div className="font-bold text-xl lg:text-2xl font-poppins">
                        Kampung Budaya 2024
                    </div>
                    <nav className="space-x-0 md:space-x-8 space-y-6 md:space-y-0 flex flex-col md:flex-row items-center">
                        <a href="#" className="font-poppinslight">
                            Galeri
                        </a>
                        <a href="/faq" className="font-poppinslight">
                            FAQ
                        </a>
                        <a href="#" className="font-poppinslight">
                            Pendaftaran
                        </a>
                    </nav>
                </div>
                <div className="md:ml-8 flex space-x-4 justify-center">
                    <a
                        href="#"
                        className="bg-white text-secondary500 p-2 rounded-full hover:bg-secondary500 hover:text-white text-2xl"
                    >
                        <RiTwitterXLine />
                    </a>
                    <a
                        href="#"
                        className="bg-white text-secondary500 p-2 rounded-full hover:bg-secondary500 hover:text-white text-2xl"
                    >
                        <ImYoutube />
                    </a>
                    <a
                        href="#"
                        className="bg-white text-secondary500 p-2 rounded-full hover:bg-secondary500 hover:text-white text-2xl"
                    >
                        <FaTiktok />
                    </a>
                    <a
                        href=""
                        className="bg-white text-secondary500 p-2 rounded-full hover:bg-yellow-500 hover:text-white text-2xl"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <div className="pt-6 text-center text-sm">
                <p>Copyright 2024 Made with ♡ by IT Kampung Budaya</p>
            </div>
        </footer>
    );
};

export default Footer;
