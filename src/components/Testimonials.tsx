/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

interface TestimonialsProps {
  reviews: Review[];
  onAddFeedback: () => void;
}

export default function Testimonials({ reviews, onAddFeedback }: TestimonialsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(timer);
  }, [reviews.length]);

  const review = reviews[index] || reviews[0];

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6 md:px-12 overflow-hidden border-y border-gray-100 relative">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-2xl mb-6">
          <Quote size={24} fill="currentColor" />
        </div>
        
        <h2 className="text-3xl font-display font-bold mb-12 tracking-tight uppercase">O que nossos clientes dizem</h2>

        <div className="relative min-h-[350px] sm:min-h-[280px] md:min-h-[220px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            {review && (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full px-4"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 italic leading-relaxed">
                  "{review.text}"
                </blockquote>
                
                <cite className="not-italic flex flex-col items-center">
                  <span className="font-bold text-gray-900 border-b-2 border-black/5 pb-1">{review.author}</span>
                  <span className="text-sm text-gray-400 mt-1">{new Date(review.date).toLocaleDateString('pt-BR')}</span>
                </cite>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8 mb-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={onAddFeedback}
          className="bg-white border-2 border-black text-black px-8 py-3 rounded-2xl font-bold hover:bg-black hover:text-white transition-all active:scale-95 shadow-sm"
        >
          Deixar Depoimento
        </button>
      </div>
    </section>
  );
}
