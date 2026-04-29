/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors group"
      id="floating-whatsapp"
    >
      <MessageCircle size={28} fill="white" className="md:w-8 md:h-8 group-hover:animate-bounce" />
      <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      
      {/* Tooltip hint on hover */}
      <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Fale conosco agora!
      </span>
    </motion.button>
  );
}
