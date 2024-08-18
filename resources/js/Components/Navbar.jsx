import React, { useState, useEffect } from "react";
import LogoImage from "../../assets/logotext.png";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        {
            name: "Beranda",
            link: "home",
        },
        { name: "Galeri", link: "home" },
        { name: "FAQ", link: "faq" },

    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`w-full fixed top-0 z-50 font-poppins duration-300 ease-in-out text-primary300 bg-transparent ${
                isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""
            }`}
        >
            <main className="flex container mx-auto justify-between items-center py-2">
                <img
                    src={LogoImage}
                    draggable="false"
                    alt="logo"
                    className="lg:w-52 w-32 rounded-b-md"
                />

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-3xl text-primary300"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <Icon icon="mdi:close" />
                    ) : (
                        <Icon icon="mdi:menu" />
                    )}
                </button>

                {/* Desktop Navigation */}
                <ul className="lg:flex gap-10 hidden items-center text-lg font-medium">
                    {navItems.map((item, index) => (
                        <NavItem key={index} to={item.link}>{item.name}</NavItem>
                    ))}
                    <button className="text-white bg-primary500 hover:bg-primary300 duration-300 ease-in-out hover:scale-95 px-7 py-1 rounded-md">
                        Daftar
                    </button>
                </ul>

                {/* Mobile Navigation */}
                <ul
                    className={`lg:hidden fixed top-0 left-0 h-screen py-4 w-3/4 px-2 flex flex-col gap-2 bg-primary500 text-white text-lg font-medium transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <img src={LogoImage} className="w-32 " alt="" />
                    {navItems.map((item, index) => (
                        <NavItem
                            key={index}
                            className="lg:py-4 px-4 py-2 border-b lg:text-base text-sm border-primary300"
                            to={item.link}
                        >
                            {item.name}
                        </NavItem>
                    ))}
                    <button className="w-full text-primary500 bg-white hover:bg-primary300 duration-300 ease-in-out hover:scale-95 px-7 py-2 text-sm  rounded-md mt-4">
                        Daftar
                    </button>
                </ul>
            </main>
        </nav>
    );
};

const NavItem = ({ children, className, to = "home" }) => {
    return (
        <Link href={route(to)} className={className}>
            {children}
        </Link>
    );
};

export default Navbar;