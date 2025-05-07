'use client';
import Slider from "react-slick";
import { motion } from "framer-motion";

const galleryImages = [
  "https://images.pexels.com/photos/31126108/pexels-photo-31126108/free-photo-of-lamborghini-verte-vibrante-dans-la-rue-jakarta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/533562/pexels-photo-533562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/9971836/pexels-photo-9971836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/13193900/pexels-photo-13193900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  fade: true,
  pauseOnHover: true
};

export default function Gallery() {
  return (
    <section id="galerie" className="bg-black py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Galerie</h2>
        <Slider {...settings}>
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div
                className="h-[60vh] md:h-[80vh] bg-center bg-cover rounded-xl shadow-lg"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
