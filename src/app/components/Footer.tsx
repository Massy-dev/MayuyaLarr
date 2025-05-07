import React from 'react';
import { Crown, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';




const Menus = [
  {
    
    name: 'Accueil',
    text: '/',
    
  },
  {
    
    name: 'A propos',
    text: '#about',
    
  },
  {
    
    name: 'Nos modèles',
    text: '#services',
   
  },
  {
   
    name: 'Galeries',
    text: '#galerie',
   
  },
  {
    
    name: 'Contact',
    text: '#contact',
   
  }
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Crown className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-lg font-serif font-bold text-white tracking-wider">
                MAYUYA <span className="text-amber-400"> LARR MONEY</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              L&apos;unique destination pour les passionnés d&apos;automobiles de luxe en quête d&apos;extraordinaire.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Lien rapide</h4>
            <ul className="space-y-2">
              {Menus.map((item,indice) => (
                <li key={indice}>
                  <a 
                    href={item.text} 

                    className="text-gray-400 hover:text-amber-300 text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Vehicles</h4>
            <ul className="space-y-2">
              {['Luxury Sedans', 'Sports Cars', 'SUVs', 'Convertibles', 'Limited Editions'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-300 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p>123 Luxury Avenue</p>
              <p>Monaco, MC 98000</p>
              <p className="text-amber-400 mt-4">+377 123 456 789</p>
              <p className="text-amber-400">contact@prestigemotors.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} PrestigeMotors. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-500 hover:text-amber-300 text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;