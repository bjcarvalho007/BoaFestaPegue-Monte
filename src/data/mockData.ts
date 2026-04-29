/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Review } from '../types';

export const CATEGORIES = [
  'Todos',
  'Futebol',
  'Personagens',
  'Times',
  'Batizados',
  'Chá de Bebê',
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kit Pegue & Monte - Futebol',
    description: 'Kit completo com painel redondo, suportes para doces e bolo. Perfeito para pequenos craques!',
    price: 150.00,
    category: 'Futebol',
    image: 'https://images.unsplash.com/photo-1530124560677-bdaea024f0e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Kit Torcida Flamengo',
    description: 'Celebre com as cores do Mengão! Painel sublimado e acessórios pretos e vermelhos de alta qualidade.',
    price: 180.00,
    category: 'Times',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Kit Jardim Encantado',
    description: 'Delicadeza em cada detalhe. Ideal para primeiros aninhos e eventos ao ar livre.',
    price: 220.00,
    category: 'Personagens',
    image: 'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Kit Batizado Clean',
    description: 'Branco e dourado para uma celebração inesquecível e sofisticada.',
    price: 200.00,
    category: 'Batizados',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Kit Super Heróis Retro',
    description: 'Ação garantida com cores vibrantes e painel dinâmico dos heróis favoritos.',
    price: 175.00,
    category: 'Personagens',
    image: 'https://images.unsplash.com/photo-1531256379416-9f000e90aacc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Kit Chá Revelação',
    description: 'O mistério mais doce do ano com tons pastéis e decoração completa.',
    price: 190.00,
    category: 'Chá de Bebê',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
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
