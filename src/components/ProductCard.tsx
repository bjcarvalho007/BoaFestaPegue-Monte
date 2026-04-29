/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  key?: string | number;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all hover:shadow-xl flex flex-col h-full"
      id={`product-${product.id}`}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900 leading-tight">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-gray-900">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-6 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAddToCart(product)}
            className="w-full bg-black text-white py-3 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Plus size={18} />
            Reservar para minha Festa
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
