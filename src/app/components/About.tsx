'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20 bg-[#0D0D0D] text-white px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    <div className="lg:w-1/2 space-y-6">
      <motion.h2 className="text-4xl font-serif text-luxeGold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        À propos de nous
      </motion.h2>
      <motion.p className="text-lg font-sans text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
        Fondée sur la passion de l&apos;automobile de prestige, notre entreprise s&apos;est donnée pour mission de redéfinir l&apos;expérience du luxe sur quatre (ou deux) roues.
      </motion.p>
      
      <ul className="space-y-4 font-sans">
        <motion.li
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.6 }}
           viewport={{ once: true }}
          >
          <span className="text-luxeGold font-sans">Héritage :</span> Une tradition d&apos;excellence et d&apos;engagement dans l&apos;industrie automobile depuis plus d&apos;une décennie.
        </motion.li>

        <motion.li
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        >
          <span className="text-luxeGold font-sans">Valeurs :</span> Luxe, précision, innovation et service client irréprochable.
        </motion.li>

        <motion.li
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        >
          <span className="text-luxeGold font-sans">Expertise :</span> Des professionnels aguerris, un parc de véhicules trié sur le volet, et une technologie de pointe.
        </motion.li>

      </ul>
    </div>
    <motion.div className="lg:w-1/2"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Image 
        src="https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={500}
        height={100}
        alt="Voiture de luxe dans un environnement haut de gamme" 
        className="rounded-lg shadow-lg"
      />
    </motion.div>
  </div>
</section>
  );
}

export default About;
