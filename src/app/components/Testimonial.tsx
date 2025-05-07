// components/TestimonialsSection.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
  {
    name: "Jean Dupont",
    text: "Une expérience incroyable avec un service irréprochable. Je recommande à 100%.",
  },
  {
    name: "Claire Moreau",
    text: "Des véhicules haut de gamme et un accompagnement premium du début à la fin.",
  },
  {
    name: "Marc Lemoine",
    text: "Une équipe professionnelle et un service qui incarne le luxe automobile.",
  },
];

export default function Testimonial() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-20"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/8622791/pexels-photo-8622791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      id="testimonials"
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-white px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Témoignages Clients</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay, Pagination]}
          className="w-full max-w-3xl mx-auto"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-8">
                <p className="text-lg italic mb-4">“{item.text}”</p>
                <h4 className="font-semibold text-[#fec544]">{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
