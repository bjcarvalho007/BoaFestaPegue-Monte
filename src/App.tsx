/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Testimonials from './components/Testimonials';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ReviewForm from './components/ReviewForm';
import { PRODUCTS, REVIEWS, CATEGORIES } from './data/mockData';
import { Product, CartItem, Review } from './types';
import { ArrowRight, Sparkles, Instagram } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddReview = (newReview: Omit<Review, 'id' | 'date'>) => {
    const reviewWithId: Review = {
      ...newReview,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setReviews((prev) => [reviewWithId, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(244,114,182,0.08),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center px-6 md:px-12 relative z-10 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-pink-50 rounded-full text-xs font-bold text-pink-600 mb-8 uppercase tracking-[0.2em] animate-pulse">
                <Sparkles size={14} />
                Celebre com estilo
              </div>
              <h1 className="text-7xl md:text-8xl font-display font-extrabold tracking-tight leading-[1.1] mb-10 uppercase text-gray-900">
                A Festa <br />
                Dos Seus <br />
                <span className="text-pink-500">Sonhos</span>
              </h1>
              <p className="text-xl text-gray-500 mb-12 max-w-md leading-relaxed font-light">
                Kits decorativos <span className="text-black font-semibold">Pegue & Monte</span>. A solução prática, econômica e elegante para transformar qualquer ambiente.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-square lg:aspect-auto h-full min-h-[400px]"
            >
              <div className="absolute inset-0 bg-pink-100/50 rounded-[4rem] rotate-3 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&w=1200&q=80"
                alt="Decoração Boa Festa"
                className="w-full h-full object-cover rounded-[4rem] shadow-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden xl:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">10+</div>
                  <div>
                    <p className="font-bold text-sm uppercase">Anos de Festa</p>
                    <p className="text-xs text-gray-400">Tradição em realizar sonhos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Bar - Sticky feeling */}
        <div id="catalogo" className="bg-white border-y border-gray-100 py-6 px-6 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? 'text-pink-500'
                    : 'text-gray-400 hover:text-black'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <section className="max-w-7xl mx-auto pt-24 px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight uppercase mb-4">Escolha seu Tema</h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Kits completos prontos para a sua festa</p>
            <div className="w-16 h-1 bg-pink-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-400 text-xl font-medium">Nenhum tema encontrado para sua busca.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); }}
                className="mt-4 text-black font-bold underline"
              >
                Limpar todos os filtros
              </button>
            </div>
          )}
        </section>

        {/* How it Works Section */}
        <section id="como-funciona" className="bg-white py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold tracking-tight uppercase mb-2 text-gray-900">Como Funciona</h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">Locação simples e sem complicação</p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Escolha', desc: 'Navegue pelos temas e selecione o kit perfeito para sua celebração.' },
              { step: '02', title: 'Reserve', desc: 'Reserve o kit com antecedência para garantir a data da sua festa.' },
              { step: '03', title: 'Retire', desc: 'Retire o kit completo e limpo em nosso ponto de entrega.' },
              { step: '04', title: 'Celebre', desc: 'Monte do seu jeito e aproveite momentos inesquecíveis!' }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-pink-200 transition-colors group">
                <span className="text-5xl font-display font-black text-pink-100 absolute top-4 right-6 group-hover:text-pink-200 transition-colors">{item.step}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <div id="depoimentos">
          <Testimonials 
            reviews={reviews} 
            onAddFeedback={() => setIsReviewModalOpen(true)}
          />
        </div>
      </main>

      <footer id="contato" className="bg-white py-12 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <span className="text-2xl font-display font-black text-gray-900 tracking-tight uppercase">BOA FESTA</span>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400">© 2024 Boa Festa - Pegue & Monte. Todos os direitos reservados.</p>
            <p className="text-sm text-pink-500 font-medium mt-1">miriankelly.8@gmail.com</p>
            <p className="text-xs text-black font-bold mt-2 uppercase tracking-widest">Desenvolvido por B.J.C</p>
          </div>
          <div className="flex gap-8 items-center">
            <a href="https://www.instagram.com/boa_festapegueemonte?igsh=aGE2bDZuMmNhbHJi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-pink-500 transition-colors">Como Funciona</a>
            <a href="#catalogo" className="text-sm font-medium hover:text-pink-500 transition-colors">Reservas</a>
          </div>
        </div>
      </footer>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
      />

      <FloatingWhatsApp />

      <ReviewForm
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleAddReview}
      />
    </div>
  );
}
