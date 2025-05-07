'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ChevronRight, Info, Sparkles } from 'lucide-react';

interface VehicleSpec {
  id: number;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  specs: string[];
}

interface VehicleCardProps {
  vehicle: VehicleSpec;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <motion.div 
      className="group relative overflow-hidden bg-gradient-to-b from-[#0A3B2D] to-black rounded-lg shadow-xl border border-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/20"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay:  0.5 }}
    >
      <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Image 
          src={vehicle.imageUrl} 
          alt={vehicle.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-[#D4AF37] text-black px-3 py-1 text-xs font-bold rounded-sm flex items-center">
            <Sparkles className="h-3 w-3 mr-1" />
            Premium
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-Inter font-medium text-white mb-1">
          {vehicle.name}
        </h3>
        <p className="text-[#D4AF37] text-sm font-light font-Inter mb-3">{vehicle.tagline}</p>
        <p className="text-gray-300 text-sm line-clamp-2 font-sans">{vehicle.description}</p>
        
        <div className={`overflow-hidden transition-all duration-500 ${showDetails ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="border-t border-gray-700 pt-4 mt-1">
            <h4 className="text- text-sm font-bold font-sans mb-2 flex items-center">
              <Info className="h-3 w-3 mr-1 text-amber-400" />
              Spécifications
            </h4>
            <ul className="grid grid-cols-2 font-sans gap-x-2 gap-y-1">
              {vehicle.specs.map((spec, index) => (
                <li key={index} className="text-xs text-gray-400 flex items-start">
                  <ChevronRight className="h-3 w-3 text-amber-400 flex-shrink-0 mt-0.5 mr-1" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <button className="mt-5 bg-transparent text-amber-400 border font-sans border-amber-400/30 hover:border-amber-400 px-4 py-2 text-xs font-medium flex items-center transition-all rounded-sm hover:bg-amber-500/10 w-full justify-center">
          Découvrir Plus <ChevronRight className="h-3 w-3 ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default VehicleCard;