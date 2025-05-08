'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Link } from "react-scroll";
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all text-white  duration-300 ${
        isScrolled ? "bg-[#0A2019]/90 backdrop-blur-sm" : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6  flex justify-between items-center">
      <Image 
        src="/images/logoLM.png" 
        width={120}
        height={100}
        alt="IMPERIAL RENT Logo" 
        className="w-auto"
      />
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex  space-x-4">
          <NavLinks isScrolled={isScrolled} />
        </nav>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <HiX className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            ) : (
              <HiOutlineMenu className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4">
          <NavLinks isScrolled />
        </div>
      )}
    </header>
  );
}

const NavLinks = ({ isScrolled }: { isScrolled: boolean }) => (
  <>
  <Link
      to="home"
      smooth={true}
      duration={500}
      className={`block hover:text-luxeGold cursor-pointer font-Inter transition ${
        isScrolled ? 'text-white' : 'text-gray-200'
      }`}
    >
      Accueil
    </Link>

    <Link
      to="about"
      smooth={true}
      duration={500}
      className={`block hover:text-luxeGold cursor-pointer font-Inter transition ${
        isScrolled ? 'text-white' : 'text-gray-200'
      }`}
    >
      À propos
    </Link>

    <Link
      to="services"
      smooth={true}
      duration={500}
      className={`block hover:text-luxeGold cursor-pointer font-Inter transition ${
        isScrolled ? 'text-white' : 'text-gray-200'
      }`}
    >
     Modèles
     </Link>

     <Link
      to="galerie"
      smooth={true}
      duration={500}
      className={`block hover:text-luxeGold cursor-pointer font-Inter transition ${
        isScrolled ? 'text-white' : 'text-gray-200'
      }`}
    >
     Gallerie
    </Link>
   

     
    <Link
      to="contact"
      smooth={true}
      duration={500}
      className={`block hover:text-luxeGold cursor-pointer font-Inter transition ${
        isScrolled ? 'text-white' : 'text-gray-200'
      }`}
    >
      Contact
    </Link>
  </>
);
