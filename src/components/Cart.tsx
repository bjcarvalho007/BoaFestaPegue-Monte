/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onRemove }: CartProps) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    const phoneNumber = WHATSAPP_NUMBER;
    const itemsList = items
      .map((item) => `• ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`)
      .join("\n");

    const message = encodeURIComponent(
      `*SOLICITAÇÃO DE RESERVA - BOA FESTA*\n\n` +
      `Olá! Gostaria de solicitar um orçamento para os seguintes kits:\n\n` +
      `${itemsList}\n\n` +
      `*TOTAL ESTIMADO:* R$ ${total.toFixed(2)}\n\n` +
      `--------------------------------\n` +
      `Poderia confirmar a disponibilidade das datas?`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <ShoppingBag size={24} />
                Sua Reserva
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4 text-center px-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    <ShoppingBag size={40} />
                  </div>
                  <p className="text-lg font-medium">Você ainda não escolheu temas para sua celebração</p>
                  <button
                    onClick={onClose}
                    className="text-black font-semibold underline underline-offset-4 hover:text-pink-500 transition-colors"
                  >
                    Ver Catálogo de Temas
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-semibold text-gray-900 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900">
                          R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex justify-between items-center mb-6 px-2">
                  <span className="text-gray-500 font-medium italic">Total Locação</span>
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all shadow-lg shadow-pink-100 flex items-center justify-center gap-2 group active:scale-95"
                >
                  Confirmar Reserva via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
