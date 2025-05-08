'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { cn } from "../lib/utils";


function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden  bg-[#0b3d2e]">
       <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[#1b2420]/90 z-10"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <Image
          src="https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury Mayuya vehicle"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="relative z-20 h-full container  max-w-[1300px] mx-auto px-4 md:px-8 pt-2 md:pt-0">
        <div className="flex  text-left  flex-col justify-center h-full max-w-xl">
          <h1 className={cn(
            "font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight opacity-0 transition-all duration-1000",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <span className="block mb-2 text-[#D4AF37]">LA PUISSANCE</span>
            <span className="block mb-2 text-[#D4AF37]">DU LUXE.</span>
            <span className="block font-light mt-4">L&apos;ESPRIT MAYUYA.</span>
          </h1>
          
          <p className={cn(
            "mt-6 font-sans text-gray-300 text-lg max-w-md opacity-0 transition-all duration-1000 delay-300",
            isVisible && "opacity-100 translate-y-0"
          )}>
            Découvrez l&apos;excellence automobile réinventée pour une nouvelle ère de sophistication et de performance.
          </p>
          
          <div className={cn(
            "mt-8 opacity-0 transition-all duration-1000 delay-500",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <button className="bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:bg-white transition">
              DÉCOUVRIR
            </button>
            
          </div>
        </div>
      </div>

    </section>
  );
}
export default Hero