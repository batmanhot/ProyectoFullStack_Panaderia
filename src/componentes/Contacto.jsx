import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-stone-100 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-orange-900 italic">¿Deseas algo especial?</h3>
          <p className="text-gray-700 text-lg italic">
            Cotiza tortas personalizadas o pedidos para eventos corporativos y familiares.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
              <Phone className="text-orange-600" size={24} />
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Llámanos</p>
                <p className="text-lg font-bold">+51 987 654 321</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
              <Mail className="text-orange-600" size={24} />
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Escríbenos</p>
                <p className="text-lg font-bold">ventas@panaderia.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="bg-white p-8 rounded-3xl shadow-xl space-y-4" onSubmit={(e) => e.preventDefault()}>
          <h4 className="text-xl font-bold text-center mb-4 text-gray-700">Déjanos un mensaje</h4>
          <input 
            type="text" 
            placeholder="Tu Nombre completo" 
            className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-orange-500 transition outline-none"
          />
          <input 
            type="text" 
            placeholder="WhatsApp" 
            className="w-full p-4 bg-gray-50 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-orange-500 transition outline-none"
          />
          <textarea 
            placeholder="¿En qué podemos ayudarte?" 
            className="w-full p-4 h-32 bg-gray-50 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-orange-500 transition outline-none resize-none"
          ></textarea>
          <button 
            type="submit"
            className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <Send size={20} /> Enviar Consulta
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
