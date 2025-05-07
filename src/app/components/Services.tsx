'use client'
import React, { useState } from 'react';
import VehicleCard from './VehicleCard';

type Model = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  specs: string[];
  category: 'SUV' | 'Tout-terrain' | 'Berline';
  
};

const vehicles: Model[] = [
  {
    id: 1,
    name: 'Porsche Panamera',
    tagline: 'Sport meets luxury',
    description: 'Experience the perfect balance of performance and comfort with the iconic Porsche Panamera.',
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    specs: ['4.0L V8 Twin-Turbo', '620 HP', '0-60 mph in 3.2s', '196 mph Top Speed'], 
    category: 'SUV',
  },
  {
    id: 2,
    name: 'Jaguar F-Type',
    tagline: 'Art of performance',
    description: 'The Jaguar F-Type embodies British craftsmanship with breathtaking design and exhilarating performance.',
    imageUrl: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
    specs: ['5.0L V8 Supercharged', '575 HP', '0-60 mph in 3.5s', '186 mph Top Speed'],
    category: 'Tout-terrain',
  },
  {
    id: 3,
    name: 'Range Rover Velar',
    tagline: 'Refined elegance',
    description: 'The Range Rover Velar redefines SUV luxury with its avant-garde aesthetics and sophisticated innovation.',
    imageUrl: 'https://images.pexels.com/photos/12606544/pexels-photo-12606544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    specs: ['3.0L P400 MHEV', '395 HP', '0-60 mph in 5.2s', 'All-Terrain Capability'],
    category: 'Berline',
  }
];

const categories: ('SUV' | 'Tout-terrain' | 'Berline')[] = ['SUV', 'Tout-terrain', 'Berline'];


const VehicleShowcase = () => {

  const [activeCategory, setActiveCategory] = useState<'SUV' | 'Tout-terrain' | 'Berline'>('SUV');
  const filteredModels = vehicles.filter((model) => model.category === activeCategory);

  return (
    <div id='services' className="pt-16 pb-20  bg-[#0A3B2D] mx-auto px-4 md:px-8">
      <div className="container max-w-[1300px]  mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-light mb-4 tracking-wide">
            Nos Modèles 
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-sans text-sm md:text-base leading-relaxed">
          Découvrez notre collection des automobiles les plus prestigieuses, chacune étant un chef-d&apos;œuvre d&apos;ingénierie et de design. Conçue pour ceux qui exigent l&apos;excellence.
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === category
                  ? 'bg-[#fec544] text-black'
                  : 'bg-transparent text-white border-white'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {filteredModels.map((model) => (
            <VehicleCard key={model.id} vehicle={model} />
          ))}


        </div>

      </div>
    </div>
  );
};

export default VehicleShowcase;