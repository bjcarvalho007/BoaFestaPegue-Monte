/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Product } from '../types';
import { getImageUrl } from '../utils/image';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onImageClick?: (image: string, name: string) => void;
  key?: string | number;
}

export default function ProductCard({ product, onAddToCart, onImageClick }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const adjustQuantity = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-pink-200 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-50/50 flex flex-col h-full"
      id={`product-${product.id}`}
    >
      <div 
        className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center cursor-pointer group/img"
        onClick={() => onImageClick?.(product.image, product.name)}
      >
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.includes('regenerated_image')) {
              console.error(`Failed to load product image: ${product.image} at ${target.src}`);
            }
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-md p-3 rounded-full text-pink-500 shadow-xl opacity-0 group-hover/img:opacity-100 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2">Ver Foto</span>
              </div>
            </motion.div>
        </div>
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
          <span className="bg-white/90 backdrop-blur-md text-pink-500 border border-pink-100 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2 md:gap-4">
          <h3 className="text-sm md:text-lg font-bold text-gray-900 leading-tight">
            {product.name}
          </h3>
          <span className="text-sm md:text-lg font-black text-gray-900 whitespace-nowrap">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </div>
        <p className="text-[10px] md:text-sm text-gray-500 mb-6 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto space-y-3 md:space-y-4">
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-1.5 md:p-2">
            <span className="text-[8px] md:text-xs font-bold text-gray-400 uppercase ml-2">Quantidade</span>
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => adjustQuantity(-1)}
                className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus size={10} />
              </button>
              <span className="text-[10px] md:text-sm font-bold w-4 text-center">{quantity}</span>
              <button
                onClick={() => adjustQuantity(1)}
                className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus size={10} />
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAddToCart(product, quantity)}
            className="w-full bg-black text-white py-3 md:py-3 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[8px] md:text-[10px] flex items-center justify-center gap-2 md:gap-3 hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
          >
            <ShoppingCart size={14} />
            ADICIONAR AO CARRINHO
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
