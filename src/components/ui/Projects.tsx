// src/components/ui/Projects.tsx

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// 1. Impor data dan tipe dari file terpisah yang sudah kita buat
import { projectsData, categories } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // 2. Gunakan `projectsData` yang sudah diimpor untuk memfilter
  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative z-30 min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-gray-950 to-black"
    >

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-8xl font-black text-center mb-8 text-white"
      >
        Selected Projects
      </motion.h2>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-md border border-white/20'
              }`}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Projects Count */}
      <motion.p
        key={activeCategory} // `key` membantu React me-render ulang animasi saat kategori berubah
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-400 mb-8 text-center"
      >
        Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
      </motion.p>

      {/* Grid Container */}
      <motion.div
        layout
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl"
      >
        {filteredProjects.map((project, i) => (
          // 3. Setiap kartu dibungkus dengan <Link> yang benar
          <Link key={project.slug} href={`/projects/${project.slug}`} passHref>
            <motion.div
              layoutId={project.slug}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Gambar Proyek */}
              <div className="relative w-full overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/400 transition-all duration-300"></div>
              </div>

              {/* Konten Teks */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Bagian bawah kartu (teknologi & tombol) */}
                <div className="mt-auto pt-4">
                  {/* Daftar Teknologi */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => ( // Batasi hanya 3 teknologi
                      <span
                        key={tech}
                        className="rounded-full bg-sky-900/50 px-3 py-1 text-xs font-medium text-sky-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Penuh yang Baru */}
                  <div className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm font-semibold text-sky-300 transition-all duration-300 group-hover:border-sky-500 group-hover:bg-sky-900/50">
                    View Details
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}