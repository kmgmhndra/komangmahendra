// src/app/mockups/page.tsx

'use client'; 

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
// 1. Impor data asli, BUKAN yang di-loop
import { mockupsData } from '@/data/mockup'; 
import { useRef } from 'react';

// (Tidak ada lagi 'loopedMockups')

export default function MockupsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  // 2. Perhitungan 'xTransform' baru
  // Kita akan buat gambar lebih kecil, misal 80% lebar layar (80vw)
  // Sisanya 20vw akan jadi padding (10vw di kiri, 10vw di kanan)
  
  const itemWidthVw = 80; // Lebar gambar (80% viewport)
  const paddingVw = (100 - itemWidthVw) / 2; // Padding (10% viewport)
  const numMockups = mockupsData.length;

  const xTransform = useTransform(
    scrollYProgress,
    [0, 1], // Input: 0% - 100% scroll vertikal
    
    // Output:
    // Posisi Awal: '10vw' (agar gambar pertama di tengah)
    // Posisi Akhir: -( (Total Item - 1) * Lebar Item ) + Padding
    // -( (6-1) * 80vw ) + 10vw = -(5 * 80) + 10 = -400 + 10 = -390vw
    [`${paddingVw}vw`, `-${((numMockups - 1) * itemWidthVw) - paddingVw}vw`]
  );

  return (
    <>
      {/* Header (tetap sama) */}
      <section className="relative z-20 w-full flex flex-col items-center px-6 md:px-12 lg:px-20 pt-20 pb-12 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto w-full">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Portofolio</span>
          </Link>
          <h1 className="text-5xl md:text-8xl font-black text-center mb-4 text-white">
            Mockup Gallery
          </h1>
          <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto">
            Scroll ke bawah untuk melihat galeri mockup yang telah saya kerjakan.
          </p>
        </div>
      </section>

      {/* 3. "Scroll Container"
          Kita perpendek jadi '300vh' agar scroll-nya tidak terlalu panjang
      */}
      <section 
        ref={scrollContainerRef} 
        className="relative h-[300vh] bg-gray-950" 
      >
        {/* "Sticky Viewport" */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          {/* "Motion Track" */}
          <motion.div 
            // 4. Perkecil tinggi track jadi '70vh'
            className="flex h-[70vh] items-center"
            style={{ 
              x: xTransform, // Terapkan xTransform baru
            }}
          >
            {/* 5. Render dari 'mockupsData' (data asli) */}
            {mockupsData.map((mockup, i) => (
              <div 
                key={mockup.id} 
                // 6. Perkecil lebar gambar jadi '80vw'
                className="relative h-full w-[80vw] flex-shrink-0 px-4" // Beri sedikit padding antar gambar
              >
                <Image
                  src={mockup.image}
                  alt={mockup.title}
                  fill
                  className="object-contain" // 'object-contain' agar gambar utuh
                  sizes="80vw"
                  priority
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* 7. Tidak ada 'Section Selesai' */}
    </>
  );
}