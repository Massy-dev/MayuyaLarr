
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
export const metadata = {
  title: 'MAYUYA LARR MONEY',
  description: 'Location de véhicules haut de gamme',
}
export default function Home() {
  return (
 
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </>
    
   
   
  );
}
