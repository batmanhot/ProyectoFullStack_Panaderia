import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartLength, onCartClick }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-orange-700 font-serif italic">Panadería Tradición</h1>
      <button 
        onClick={onCartClick}
        className="relative bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition shadow-lg active:scale-90"
      >
        <ShoppingCart size={24} />
        {cartLength > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
            {cartLength}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
