import React from 'react';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-white text-2xl font-bold mb-4 font-serif italic">Panadería Tradición</h4>
        <p className="text-sm mb-8 opacity-70 italic max-w-md mx-auto">
          Desde el corazón de nuestra región, llevando dulzura y tradición a cada hogar.
        </p>
        <div className="flex justify-center gap-6 mb-8 text-white/50">
          <Star className="hover:text-orange-400 cursor-pointer transition" size={20} />
          <Star className="hover:text-orange-400 cursor-pointer transition" size={20} />
          <Star className="hover:text-orange-400 cursor-pointer transition" size={20} />
        </div>
        <div className="border-t border-white/5 pt-8 text-xs italic tracking-widest">
          © 2026 PANADERÍA TRADICIÓN - TODOS LOS DERECHOS RESERVADOS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
