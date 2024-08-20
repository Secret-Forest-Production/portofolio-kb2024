import React, { useState, useEffect } from "react";
import LogoImage from "../../assets/logotext.png";
import LogoBurger from "../../assets/icon.png";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(true);

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
        
        setIsLogoVisible(isMobileMenuOpen);
    };

    return (
        <nav
            className={`w-full fixed top-0 z-50 font-poppins duration-300 ease-in-out text-primary300 bg-transparent ${
                isScrolled ? "bg-opacity-50 backdrop-blur-sm" : ""
            }`}
        >
            <main className="flex container mx-auto justify-between items-center py-2">
                {isLogoVisible && (
                    <a href="/">
                        <img
                            src={LogoImage}
                            draggable="false"
                            alt="logo"
                            className="lg:w-52 w-32 rounded-b-md "
                        />
                    </a>
                )}

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-3xl text-primary300 absolute top-0 right-0 mt-4 mr-4"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <Icon icon="mdi:close" className="hidden" />
                    ) : (
                        <img src={LogoBurger} />
                    )}
                </button>

                {/* Desktop Navigation */}
                <ul className="lg:flex gap-10 hidden items-center text-lg font-medium">
                    {navItems.map((item, index) => (
                        <NavItem key={index} to={item.link}>
                            {item.name}
                        </NavItem>
                    ))}
                    <Link
                        href={route("daftar")}
                        className="text-white bg-primary500 hover:bg-primary300 duration-300 ease-in-out hover:scale-95 px-7 py-1 rounded-md"
                    >
                        Daftar
                    </Link>
                </ul>

                {/* Mobile Navigation */}
                <ul
                    className={`lg:hidden fixed top-0 left-0 w-full h-1/2 bg-[rgba(255,255,255,0.9)] text-primary500 text-lg font-medium transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                    } flex flex-col items-center justify-between`}
                >
                    <div className="flex items-center justify-between px-4 py-4 w-full">
                        <img src={LogoImage} className="w-32" alt="" />
                        <button
                            className="text-3xl text-primary300"
                            onClick={toggleMobileMenu}
                        >
                            <Icon icon="mdi:close" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        {navItems.map((item, index) => (
                            <NavItem
                                key={index}
                                className="py-4 px-4 md:text-2xl text-xl border-primary300 flex items-center justify-center w-full"
                                to={item.link}
                            >
                                {item.name}
                            </NavItem>
                        ))}
                    </div>

                    <Link
                        href={route("daftar")}
                        className="text-white bg-primary500 hover:bg-primary300 duration-300 ease-in-out hover:scale-95 px-7 py-1 rounded-md"
                    >
                        Daftar
                    </Link>
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
