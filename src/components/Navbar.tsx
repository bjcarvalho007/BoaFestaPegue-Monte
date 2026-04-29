/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ShoppingCart, Search, Menu, Phone, Instagram, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_EMAIL } from '../constants';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

export default function Navbar({ cartCount, onCartClick, onSearch }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-100 py-5 px-6 md:px-12 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-95"
          >
            <Menu size={22} />
          </button>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#catalogo" className="text-xs font-bold uppercase tracking-widest hover:text-pink-500 transition-colors">Temas</a>
            <a href="#como-funciona" className="text-xs font-bold uppercase tracking-widest hover:text-pink-500 transition-colors">Como Funciona</a>
            <a href="#contato" className="text-xs font-bold uppercase tracking-widest hover:text-pink-500 transition-colors">Contato</a>
          </div>
        </div>

        <div className="flex flex-col items-center flex-1">
          <span className="text-base sm:text-2xl md:text-3xl font-display font-black tracking-tighter text-gray-900 cursor-pointer uppercase leading-none text-center">
            BOA FESTA
          </span>
          <span className="text-[6px] md:text-[10px] font-black tracking-[0.4em] text-pink-500 uppercase mt-0.5 md:mt-2 text-center">Pegue & Monte</span>
        </div>

        <div className="flex items-center gap-2 md:gap-6 flex-1 justify-end">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-full px-5 py-2.5 border border-gray-100 focus-within:border-pink-200 transition-all">
            <Search className="text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Buscar tema..."
              className="bg-transparent border-none text-xs ml-3 outline-none w-32 lg:w-48"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => {
                const query = prompt('Buscar tema:');
                if (query !== null) onSearch(query);
              }}
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <a 
              href="#catalogo" 
              className="hidden sm:flex items-center gap-2 bg-pink-500 text-white px-5 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-pink-600 transition-all shadow-lg shadow-pink-200"
            >
              Catálogo
            </a>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onCartClick}
              className="relative p-3 bg-gray-900 text-white rounded-full hover:bg-black transition-all shadow-xl shadow-gray-200"
              id="cart-button"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-[60] p-8 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-serif font-black italic uppercase">MENU</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8 flex-1">
                <a href="#catalogo" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-tighter hover:text-pink-500">Nossos Temas</a>
                <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-tighter hover:text-pink-500">Como Funciona</a>
                <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-tighter hover:text-pink-500">Quem já Alugou</a>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100 italic">
                <div className="flex justify-center gap-6 mb-6">
                  <a href="https://www.instagram.com/boa_festapegueemonte?igsh=aGE2bDZuMmNhbHJi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-black transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold text-center">
                  Boa Festa - Pegue & Monte
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
