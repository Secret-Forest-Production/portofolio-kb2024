import React, { useState, useEffect } from 'react';
import LogoImage from '../../assets/logotext.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['Beranda', 'Galeri', 'FAQ'];

  return (
    <nav className={`w-full fixed top-0 z-50 font-poppins duration-300 ease-in-out bg-transparent text-primary300 bg-white ${isScrolled ? 'bg-opacity-50  backdrop-blur-sm' : ' '}`}>
      <main className='flex container mx-auto justify-between'>
        <img src={LogoImage} draggable='false' alt="logo" className='w-52 rounded-b-md py-2' />
        <ul className='lg:flex gap-10 hidden  items-center text-lg font-medium'>
          {navItems.map((item, index) => (
            <NavItem key={index}>{item}</NavItem>
          ))}
          <button className={`text-white bg-primary500 hover:bg-primary300 duration-300 ease-in-out hover:scale-95 px-7 py-1 rounded-md `}>
            Daftar
          </button>
        </ul>
      </main>
    </nav>
  );
}

const NavItem = ({ children }) => {
  return (
    <li>{children}</li>
  );
}

export default Navbar;
