/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-xl p-4 md:p-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-full max-h-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-2xl border border-white/50"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 md:w-14 md:h-14 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg shadow-pink-200"
              aria-label="Botão Fechar"
            >
              <X size={24} className="md:w-8 md:h-8" strokeWidth={3} />
            </button>
            
            <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center min-w-[300px] min-h-[300px]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full max-h-[75vh] object-contain block select-none"
              />
            </div>
            
            <div className="p-8 md:p-10 bg-white border-t border-gray-50 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-pink-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-3">
                Visualização Detalhada
              </span>
              <h3 className="text-gray-900 font-bold text-lg md:text-2xl tracking-tight">
                {imageAlt}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
