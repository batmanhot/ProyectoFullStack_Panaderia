import React from 'react';
import { X, Plus, Minus, ShoppingCart, Check } from 'lucide-react';

const ProductModal = ({ 
  isOpen, 
  selectedCategory, 
  menuData, 
  quantities, 
  addingId,
  onClose, 
  onQuantityChange, 
  onAddToCart 
}) => {
  if (!isOpen || !selectedCategory) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-200">
        <div className="bg-orange-700 p-6 flex justify-between items-center text-white">
          <h3 className="text-2xl font-bold font-serif">{selectedCategory}</h3>
          <button onClick={onClose} className="bg-white/20 p-1 rounded-full hover:bg-white/30 transition">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {menuData[selectedCategory]?.map((product) => { 
            const isAdding = addingId === product.id;

            return (
              <div 
                key={product.id} 
                className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative"
              >
                {isAdding && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs py-1 px-3 rounded-full shadow-lg animate-bounce z-10 flex items-center gap-1">                                                
                    <Check size={12} /> ¡Agregado a la lista!
                  </div>
                )}
                <div className="flex-1">
                  <h5 className="font-bold text-gray-800 text-lg">{product.nombre}</h5>
                  <p className="text-orange-700 font-bold mb-1">S/ {product.precio.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 italic">{product.desc}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-xl border border-orange-200 bg-white">
                    <button 
                      onClick={() => onQuantityChange(product.id, -1)} 
                      className="p-2 hover:bg-orange-50 rounded-l-xl"
                    >
                      <Minus size={16}/>
                    </button>
                    <span className="px-3 font-bold text-lg min-w-[30px] text-center">
                      {quantities[product.id] || 1}
                    </span>
                    <button 
                      onClick={() => onQuantityChange(product.id, 1)} 
                      className="p-2 hover:bg-orange-50 rounded-r-xl"
                    >
                      <Plus size={16}/>
                    </button>
                  </div>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className={`p-3 rounded-xl transition-all shadow-md active:scale-90 flex items-center justify-center ${
                      isAdding 
                        ? 'bg-green-600 text-white cursor-not-allowed' 
                        : 'bg-orange-800 text-white hover:bg-orange-900'
                    }`}
                    title="Agregar al carrito"
                  >
                    {isAdding ? <Check size={18} /> : <ShoppingCart size={18} />}
                  </button>                    
                </div>                    
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
