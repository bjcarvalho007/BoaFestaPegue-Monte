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
    image: 'regenerated_image_1777503586806.png',
  },
  {
    id: '16',
    name: 'Combo Promo - Stitch',
    description: 'Decoração completa do Stitch em tons de azul e rosa. Aproveite a promoção! (Não trabalhamos com arco de balões)',
    price: 80.00,
    category: 'Promoção',
    image: 'regenerated_image_1777504639363.png',
  },
  {
    id: '17',
    name: 'Combo Promo - Reino Mágico',
    description: 'Kit encantado com painel e cilindros personalizados. Valor promocional para reserva rápida! (Não trabalhamos com arco de balões)',
    price: 80.00,
    category: 'Promoção',
    image: 'regenerated_image_1777504640150.png',
  },
  {
    id: '13',
    name: 'Trio de Cilindros - Floral Rosa',
    description: 'Kit sem o Painel! Somente 3 Cilindros com capas personalizadas em tons de rosa e boleiras combinando.',
    price: 60.00,
    category: 'Cilindros & Boleiras',
    image: 'regenerated_image_1777504641727.png',
  },
  {
    id: '14',
    name: 'Trio de Cilindros - Luxo Dourado',
    description: 'Kit sem o Painel! Inclui Capas para os Cilindros com texturas elegantes e Boleiras douradas de destaque.',
    price: 60.00,
    category: 'Cilindros & Boleiras',
    image: 'regenerated_image_1777504642796.png',
  },
  {
    id: '1',
    name: 'Kit Chá Revelação Luxo',
    description: 'Kit delicado com painel decorativo "Boy or Girl", pelúcia de urso e suportes dourados.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504643429.png',
  },
  {
    id: '2',
    name: 'Kit Torcida Flamengo',
    description: 'Celebre com as cores do Mengão! Painel sublimado e acessórios pretos de alta qualidade.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504643958.png',
  },
  {
    id: '3',
    name: 'Kit Torcida Corinthians',
    description: 'Para o torcedor fiel! Painel do Timão with suportes brancos e pretos elegantes.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504644420.png',
  },
  {
    id: '4',
    name: 'Kit Estádio de Futebol',
    description: 'Painel vibrante de estádio com suportes temáticos para os amantes do esporte.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504644881.png',
  },
  {
    id: '5',
    name: 'Kit Ursinha Rosa',
    description: 'Tema "É uma menina" with decoração floral, pelúcia e painel delicado.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504645509.png',
  },
  {
    id: '6',
    name: 'Kit Gratidão Estelar',
    description: 'Painel moderno com mensagem de Gratidão em fundo galáxia e arranjos azuis.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504646022.png',
  },
  {
    id: '7',
    name: 'Kit Bday Gold',
    description: 'Celebração sofisticada com painel Happy Birthday, suportes dourados e bolo fake.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504646577.png',
  },
  {
    id: '8',
    name: 'Kit Tardezinha',
    description: 'Clima de festa tropical with painel pôr do sol e acessórios em cores vibrantes.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504647085.png',
  },
  {
    id: '9',
    name: 'Kit Chá de Bebê Ursinhos',
    description: 'Painel misto rosa e azul com vasos e suportes coordenados.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504647949.png',
  },
  {
    id: '10',
    name: 'Kit De Repente Mais Linda',
    description: 'Decoração feminina moderna com painel glitter rosa e suportes combinando.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504648404.png',
  },
  {
    id: '11',
    name: 'Kit Galinha Pintadinha',
    description: 'O clássico favorito das crianças com painel alegre e suportes coloridos.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504648959.png',
  },
  {
    id: '12',
    name: 'Kit Natal Mágico',
    description: 'Kit Feliz Natal completo para deixar sua ceia ainda mais especial e decorada.',
    price: 40.00,
    category: 'Festa',
    image: 'regenerated_image_1777504649480.png',
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
