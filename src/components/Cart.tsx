/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { getImageUrl } from '../utils/image';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export default function Cart({ isOpen, onClose, items, onRemove, onUpdateQuantity }: CartProps) {
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
              <h2 className="text-xl font-bold flex items-center gap-3 font-display uppercase tracking-tight">
                <ShoppingBag size={24} className="text-pink-500" />
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
                  <div key={item.id} className="flex min-h-[100px] gap-4 group border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-gray-900 leading-tight pr-4">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="p-1 text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center bg-gray-50 rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-bold text-gray-900 text-sm">
                          R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex justify-between items-center mb-6 px-2">
                  <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-none">Total Locação</span>
                  <span className="text-2xl font-black text-gray-900 tracking-tight">
                    R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3 group active:scale-95"
                >
                  Confirmar via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
