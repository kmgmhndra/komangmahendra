'use client';

import { Project } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, LayoutTemplate, Zap, FileText, Code, Palette, Rocket, Shield } from 'lucide-react';

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        {/* Animated mesh background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-4 pt-8 pb-16">
          <div className="container mx-auto max-w-7xl">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/?section=projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-full hover:border-cyan-400/50 transition-all duration-300"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300 text-cyan-400">←</span>
                <span className="font-medium">Back to Projects</span>
              </Link>
            </div>

            {/* Hero Content */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">
                      {word}{' '}
                    </span>
                  ))}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {project.longDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Launch Project</span>
                    <Rocket className="relative z-10 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                )}
                {/* <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-full font-bold text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View Source</span>
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="px-4 mb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Content Grid */}
        <section className="px-4 pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Project Overview */}
                <div className="group">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                    <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                        <FileText className="w-6 h-6 text-cyan-400" />
                      </div>
                      Project Overview
                    </h2>
                    <div className="prose prose-lg prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed">
                      <p className="text-lg">
                        Proyek ini berfokus pada pengembangan solusi digital yang modern dan efisien. Selama proses pengerjaan, penekanan utama diberikan pada arsitektur kode yang bersih, performa yang cepat, dan pengalaman pengguna yang intuitif dan menyenangkan.
                      </p>
                      <p>
                        Dengan memanfaatkan teknologi terdepan dan best practices dalam development, proyek ini dirancang untuk memberikan value maksimal kepada pengguna sambil mempertahankan skalabilitas dan maintainability code.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="group">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                    <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
                      <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                        <Zap className="w-6 h-6 text-purple-400" />
                      </div>
                      Key Features
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { icon: Palette, title: 'Responsive Design', desc: 'Perfect on all devices' },
                        { icon: Code, title: 'Modern UI/UX', desc: 'Clean and intuitive interface' },
                        { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed' },
                        { icon: Shield, title: 'SEO Friendly', desc: 'Search engine optimized' }
                      ].map((feature, i) => (
                        <div key={i} className="group/item bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                              <feature.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                              <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                              <p className="text-sm text-gray-400">{feature.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky top-8 h-fit">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                  <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                      <LayoutTemplate className="w-6 h-6 text-cyan-400" />
                    </div>
                    Tech Stack
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={tech} 
                        className="group px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-200 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="border-t border-gray-700/50 pt-6 mb-6">
                    <h4 className="font-bold mb-4">Project Stats</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Status</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 font-medium">Live</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Category</span>
                        <span className="text-cyan-400 font-medium">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Launch Demo
                        <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform duration-300" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-400/50 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Source Code
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}