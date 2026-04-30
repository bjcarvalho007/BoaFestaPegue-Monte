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
import ImageModal from './components/ImageModal';
import { PRODUCTS, REVIEWS, CATEGORIES } from './data/mockData';
import { Product, CartItem, Review } from './types';
import { getImageUrl } from './utils/image';
import { ArrowRight, Sparkles, Instagram, Mail, MapPin } from 'lucide-react';
import { CONTACT_EMAIL } from './constants';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
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
        <section className="relative min-h-[600px] lg:min-h-[85vh] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(244,114,182,0.08),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-6 md:px-12 relative z-10 py-8 md:py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left pt-2 lg:pt-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 rounded-full text-[9px] md:text-xs font-bold text-pink-600 mb-4 lg:mb-8 uppercase tracking-[0.2em]">
                <Sparkles size={12} />
                Celebre com estilo
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.1] mb-2 lg:mb-6 uppercase text-gray-900 px-4 sm:px-0">
                A Festa <br className="hidden sm:block" />
                Dos Seus <br className="hidden sm:block" />
                <span className="text-pink-500">Sonhos</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 lg:mb-10 text-gray-400">
                <MapPin size={14} className="text-pink-400" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Araguaína - TO</span>
              </div>
              <p className="text-sm md:text-lg text-gray-500 mb-6 lg:mb-12 max-w-sm sm:max-w-md mx-auto lg:mx-0 leading-relaxed font-light px-8 sm:px-0">
                Kits decorativos <span className="text-black font-semibold">Pegue & Monte</span>. A solução prática, econômica e elegante para transformar qualquer ambiente.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 px-8 sm:px-0 mb-8">
                <motion.a
                  href="#catalogo"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl shadow-gray-200"
                >
                  Ver Catálogo
                  <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="#como-funciona"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-pink-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-pink-200"
                >
                  Como Funciona
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/3] sm:aspect-square lg:aspect-auto h-full min-h-[250px] sm:min-h-[400px] md:min-h-[450px] px-6 sm:px-0"
            >
              <div className="absolute inset-6 sm:inset-0 bg-pink-100/50 rounded-[2rem] md:rounded-[4rem] rotate-3 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&w=1200&q=80"
                alt="Decoração Boa Festa"
                className="w-full h-full object-cover rounded-[2rem] md:rounded-[4rem] shadow-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl hidden xl:block">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">10+</div>
                  <div>
                    <p className="font-bold text-[10px] uppercase">Anos de Festa</p>
                    <p className="text-[9px] text-gray-400">Tradição em realizar sonhos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Bar - Sticky feeling */}
        <div id="catalogo" className="bg-white border-y border-gray-100 py-4 px-4 overflow-x-auto no-scrollbar sticky top-[68px] md:top-[88px] z-40 backdrop-blur-md bg-white/95">
          <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-6 md:gap-10 min-w-max px-2 md:px-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative py-3 px-1 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? 'text-pink-500'
                    : 'text-gray-400 hover:text-black'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <section className="max-w-7xl mx-auto pt-16 md:pt-24 px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight uppercase mb-4">Escolha seu Tema</h2>
            <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Kits completos prontos para a sua festa</p>
            <div className="w-12 md:w-16 h-1 bg-pink-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onImageClick={(src, alt) => setPreviewImage({ src, alt })}
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
        <section id="como-funciona" className="bg-white py-16 md:py-24 px-4 sm:px-12">
          <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight uppercase mb-4 text-gray-900">Como Funciona</h2>
            <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Locação simples e sem complicação</p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {[
              { step: '01', title: 'Escolha', desc: 'Navegue pelos temas e selecione o kit perfeito para sua celebração.' },
              { step: '02', title: 'Reserve', desc: 'Reserve o kit com antecedência para garantir a data da sua festa.' },
              { step: '03', title: 'Retire', desc: 'Retire o kit completo e limpo em nosso ponto de entrega.' },
              { step: '04', title: 'Celebre', desc: 'Monte do seu jeito e aproveite momentos inesquecíveis!' }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 md:p-8 bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 hover:border-pink-200 transition-colors group">
                <span className="text-4xl md:text-5xl font-display font-black text-pink-100 absolute top-4 right-6 group-hover:text-pink-200 transition-colors">{item.step}</span>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed relative z-10">{item.desc}</p>
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

      <footer id="contato" className="bg-white py-20 md:py-24 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl md:text-4xl font-display font-black text-gray-900 tracking-tighter uppercase leading-none">BOA FESTA</span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-pink-500 uppercase mt-2">Pegue & Monte</span>
            <div className="mt-6 flex items-center gap-2 text-gray-400">
              <MapPin size={14} className="text-pink-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Araguaína - TO</span>
            </div>
            <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xs leading-relaxed font-light">Soluções criativas e elegantes para tornar sua festa inesquecível. Praticidade que encanta.</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-300 mb-8">Nossas Redes</h4>
            <div className="flex gap-4 md:gap-6">
              <a 
                href="https://www.instagram.com/boa_festapegueemonte?igsh=aGE2bDZuMmNhbHJi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-pink-100"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={`mailto:${CONTACT_EMAIL}`}
                className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 border border-gray-100 shadow-sm"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end md:text-right">
            <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-300 mb-8">Desenvolvimento</h4>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">PROJETO BY</p>
            <p className="text-xl font-black tracking-tighter text-gray-900">B.J.C</p>
            <p className="mt-8 text-[10px] text-gray-300 font-medium uppercase tracking-[0.2em]">© 2024 TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </footer>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <FloatingWhatsApp />

      <ReviewForm
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleAddReview}
      />

      <ImageModal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        imageSrc={getImageUrl(previewImage?.src)}
        imageAlt={previewImage?.alt || ''}
      />
    </div>
  );
}
