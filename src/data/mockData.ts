/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Review } from '../types';

export const CATEGORIES = [
  'Todos',
  'Promoção',
  'Festa',
  'Cilindros & Boleiras',
];

export const PRODUCTS: Product[] = [
  {
    id: '15',
    name: 'Combo Promo - Bolofofos',
    description: 'Kit completo temático Bolofofos. Preço Promocional! (Não trabalhamos com arco de balões)',
    price: 80.00,
    category: 'Promoção',
    image: 'https://images.unsplash.com/photo-1530103862676-fa8c9d34bb34?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '16',
    name: 'Combo Promo - Stitch',
    description: 'Decoração completa do Stitch em tons de azul e rosa. Aproveite a promoção! (Não trabalhamos com arco de balões)',
    price: 80.00,
    category: 'Promoção',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '17',
    name: 'Combo Promo - Reino Mágico',
    description: 'Kit encantado com painel e cilindros personalizados. Valor promocional para reserva rápida! (Não trabalhamos com arco de balões)',
    price: 80.00,
    category: 'Promoção',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '13',
    name: 'Trio de Cilindros - Floral Rosa',
    description: 'Kit sem o Painel! Somente 3 Cilindros com capas personalizadas em tons de rosa e boleiras combinando.',
    price: 60.00,
    category: 'Cilindros & Boleiras',
    image: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '14',
    name: 'Trio de Cilindros - Luxo Dourado',
    description: 'Kit sem o Painel! Inclui Capas para os Cilindros com texturas elegantes e Boleiras douradas de destaque.',
    price: 60.00,
    category: 'Cilindros & Boleiras',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '1',
    name: 'Kit Chá Revelação Luxo',
    description: 'Kit delicado com painel decorativo "Boy or Girl", pelúcia de urso e suportes dourados.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Kit Torcida Flamengo',
    description: 'Celebre com as cores do Mengão! Painel sublimado e acessórios pretos de alta qualidade.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Kit Torcida Corinthians',
    description: 'Para o torcedor fiel! Painel do Timão with suportes brancos e pretos elegantes.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Kit Estádio de Futebol',
    description: 'Painel vibrante de estádio com suportes temáticos para os amantes do esporte.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Kit Ursinha Rosa',
    description: 'Tema "É uma menina" com decoração floral, pelúcia e painel delicado.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1530103862676-fa8c9d34bb34?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Kit Gratidão Estelar',
    description: 'Painel moderno com mensagem de Gratidão em fundo galáxia e arranjos azuis.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    name: 'Kit Bday Gold',
    description: 'Celebração sofisticada com painel Happy Birthday, suportes dourados e bolo fake.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1533271026227-1754d70f2a70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    name: 'Kit Tardezinha',
    description: 'Clima de festa tropical com painel pôr do sol e acessórios em cores vibrantes.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '9',
    name: 'Kit Chá de Bebê Ursinhos',
    description: 'Painel misto rosa e azul com vasos e suportes coordenados.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '10',
    name: 'Kit De Repente Mais Linda',
    description: 'Decoração feminina moderna com painel glitter rosa e suportes combinando.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '11',
    name: 'Kit Galinha Pintadinha',
    description: 'O clássico favorito das crianças com painel alegre e suportes coloridos.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '12',
    name: 'Kit Natal Mágico',
    description: 'Kit Feliz Natal completo para deixar sua ceia ainda mais especial e decorada.',
    price: 40.00,
    category: 'Festa',
    image: 'https://images.unsplash.com/photo-1544928147-3949a2292721?auto=format&fit=crop&w=800&q=80',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Maria Silva',
    text: 'O kit chegou impecável! Muito fácil de montar, em 20 minutos a festa estava pronta.',
    rating: 5,
    date: '2024-03-25',
  },
  {
    id: '2',
    author: 'João Pedro',
    text: 'Aluguei o kit do Flamengo e meu filho amou. Material de excelente qualidade!',
    rating: 5,
    date: '2024-04-05',
  },
  {
    id: '3',
    author: 'Carla Souza',
    text: 'Prático e econômico. Vale muito a pena para quem quer estilo sem gastar muito.',
    rating: 4,
    date: '2024-04-10',
  },
];
