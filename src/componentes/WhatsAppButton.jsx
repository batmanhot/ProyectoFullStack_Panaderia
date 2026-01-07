import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ whatsappNumber, defaultMessage }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 group flex items-center gap-2 hover:pr-6 animate-bounce"
      style={{ animationDuration: '3s' }}
      title="Contacta por WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" className="text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        ¿Deseas ayuda? ¡Escríbenos!
      </span>
    </a>
  );
};

export default WhatsAppButton;
