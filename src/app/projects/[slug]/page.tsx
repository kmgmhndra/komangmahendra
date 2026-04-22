// src/app/projects/[slug]/page.tsx
// TIDAK ADA 'use client' di sini. Ini adalah Server Component.

import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetailClient from './ProjectDetailClient'; // Impor komponen Client

// Fungsi untuk generate metadata SEO dinamis per proyek
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Komang Mahendra`,
    description: project.description,
  };
}

// Fungsi untuk membuat halaman statis saat proses build
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Komponen Halaman (Server)
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // 1. Ambil data di server
  const project = projectsData.find((p) => p.slug === params.slug);

  // 2. Handle jika data tidak ditemukan
  if (!project) {
    notFound();
  }

  // 3. Render komponen Client dan kirim data sebagai properti (props)
  return <ProjectDetailClient project={project} />;
}