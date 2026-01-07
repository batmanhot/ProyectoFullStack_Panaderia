import React from 'react';
import { X, ShoppingCart, Plus, Minus, Trash2, ClipboardList, MessageCircle } from 'lucide-react';

const CartDrawer = ({ 
  isOpen, 
  cart, 
  totalCart,
  notes,
  onClose, 
  onQuantityChange,
  onRemoveItem,
  onNotesChange,
  onSendToWhatsApp
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex justify-end">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-xs" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 bg-orange-700 text-white flex justify-between items-center">
          <h3 className="text-2xl font-bold flex items-center gap-3 font-serif italic">
            <ShoppingCart /> Mi Pedido
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition">
            <X size={24}/>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-gray-300">
              <ShoppingCart size={80} className="mx-auto mb-4 opacity-10" />
              <p className="italic text-lg text-gray-400">¿Qué se te antoja hoy?</p>
            </div>
          ) : (
            <>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                Productos seleccionados
              </p>
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-800">{item.nombre}</h5>
                    <p className="text-sm text-orange-700 font-bold italic">
                      S/ {(item.precio * item.qty).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center bg-orange-50 rounded-lg border border-orange-100">
                    <button 
                      onClick={() => onQuantityChange(item.id, -1)} 
                      className="p-1 hover:text-orange-600"
                    >
                      <Minus size={14}/>
                    </button>
                    <span className="px-2 text-sm font-bold">{item.qty}</span>
                    <button 
                      onClick={() => onQuantityChange(item.id, 1)} 
                      className="p-1 hover:text-orange-600"
                    >
                      <Plus size={14}/>
                    </button>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)} 
                    className="text-red-300 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={20}/>
                  </button>
                </div>
              ))}
              
              {/* Observaciones */}
              <div className="mt-8">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
                  <ClipboardList size={16}/> Observaciones (Opcional)
                </label>
                <textarea 
                  value={notes}
                  onChange={(e) => onNotesChange(e.target.value)}
                  placeholder="Ej: El pastel que sea sin canela, o llevar cambio de S/ 100..."
                  className="w-full p-4 bg-orange-50 rounded-2xl border border-orange-100 focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm h-28 italic shadow-inner resize-none"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-orange-100 bg-gray-50 space-y-4 shadow-inner">
            <div className="flex justify-between items-end mb-2">
              <span className="text-gray-400 font-bold uppercase text-xs">Total del pedido:</span>
              <span className="text-3xl font-black text-orange-900 font-serif">S/ {totalCart.toFixed(2)}</span>
            </div>
            <button 
              onClick={onSendToWhatsApp}
              className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-700 shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95"
            >
              <MessageCircle size={24} /> Confirmar Pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
