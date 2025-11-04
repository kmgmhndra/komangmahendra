// src/data/mockups.ts

// Definisikan tipe datanya
export interface Mockup {
  id: number;
  title: string;
  image: string;
  description: string;
  tools: string[];
}

// Ekspor data mockup Anda
export const mockupsData: Mockup[] = [
  {
    id: 1,
    title: 'Manual Book Sibanpri',
    image: '/assets/images/project/mk1.png',
    description: 'Mockup manual book untuk aplikasi sibanpri.',
    tools: ['Canva', 'Photoshop']
  },
  {
    id: 2,
    title: 'Poster Professionalisme Bidan',
    image: '/assets/images/project/mk2.png',
    description: 'Konsep mockup untuk Poster.',
    tools: ['Canva', 'Photoshop']
  },
  {
    id: 3,
    title: 'Poster Kepemimpinan',
    image: '/assets/images/project/mk3.png',
    description: 'Konsep mockup untuk Poster.',
    tools: ['Canva', 'Photoshop']
  },
  {
    id: 4,
    title: 'Leaflet S*x Bebas',
    image: '/assets/images/project/mk4.png',
    description: 'Konsep mockup untuk Leaflet.',
    tools: ['Canva', 'Photoshop']
  },
  {
    id: 5,
    title: 'Poster Kehamilan',
    image: '/assets/images/project/mk5.png',
    description: 'Konsep mockup untuk Poster.',
    tools: ['Canva', 'Photoshop']
  },
  {
    id: 6,
    title: 'Poster Persalinan',
    image: '/assets/images/project/mk6.png',
    description: 'Konsep mockup untuk Poster.',
    tools: ['Canva', 'Photoshop']
  },
  // ... tambahkan mockup Anda yang lain di sini
];