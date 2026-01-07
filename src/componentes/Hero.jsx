import React from 'react';

const Hero = () => {
  return (
    <header className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1600" 
        alt="Pan" className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="relative z-10 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-in slide-in-from-top duration-700">
          El sabor de nuestra tierra
        </h2>
        <p className="text-xl mb-8 opacity-90 italic">Tradición horneada diariamente para tu familia.</p>
      </div>
    </header>
  );
};

export default Hero;
