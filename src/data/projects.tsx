// src/data/projects.ts

// 1. Definisikan Tipe Data (Struktur) Proyek
export type Project = {
  slug: string; // PENTING: Untuk URL halaman detail
  title: string;
  description: string; // Deskripsi singkat untuk kartu
  longDescription: string; // Deskripsi panjang untuk halaman detail
  image: string;
  category: 'website' | 'mobile' | 'design';
  githubUrl: string; // Link ke GitHub/Behance/Figma
  liveUrl?: string; // Link ke demo live (opsional)
  technologies: string[]; 
};

// 2. Definisikan Data Proyeknya
export const projectsData: Project[] = [
  // Website Projects
  {
    slug: "dievaluasi", // Nama unik untuk URL
    title: "Dievaluasi",
    description: "An AI-powered CAT-based tryout platform for CPNS, BUMN, TOEFL, and SNBT...",
    longDescription: "A deeper dive into Dievaluasi, explaining the tech stack, challenges, and solutions...", // TODO: Isi deskripsi panjang
    image: "/assets/images/project/web1.png",
    githubUrl: "https://github.com/username/spk-project",
    category: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"]
  },
  {
    slug: "sibanpri",
    title: "SIBANPRI",
    description: "Smart decision support for determining priority recipients of agricultural assistance...",
    longDescription: "A deeper dive into SIBANPRI, explaining the tech stack, challenges, and solutions...", // TODO: Isi deskripsi panjang
    image: "/assets/images/project/web2.png",
    githubUrl: "https://github.com/username/dashboard-project",
    category: "website",
    technologies: ["React", "JavaScript", "Bootstrap", "Django", "PostgreSQL"]
  },
  {
    slug: "tridatu-heritage",
    title: "Tridatu Heritage",
    description: "Showcasing the richness of Balinese culture and heritage through a modern digital platform that preserves and promotes Balinese traditions.",
    longDescription: "A deeper dive into Dievaluasi, explaining the tech stack, challenges, and solutions...",
    image: "/assets/images/project/web3.png",
    githubUrl: "https://github.com/username/ecommerce-project",
    category: "website",
    technologies: ["Vue.js", "JavaScript", "Vuetify", "Laravel", "MySQL"]
  },
  {
    slug: "monalisa",
    title: "MONALISA",
    description: "A monitoring system for statistical quality at BPS, ensuring accuracy, reliability, and consistency of data.",
    longDescription: "A deeper dive into Dievaluasi, explaining the tech stack, challenges, and solutions...",
    image: "/assets/images/project/web4.png",
    githubUrl: "https://github.com/username/ecommerce-project",
    category: "website",
    technologies: ["Angular", "TypeScript", "Material Design", "Spring Boot", "Oracle DB"]
  },
  {
    slug: "monaku",
    title: "MONAKU",
    description: "A financial administration monitoring system to ensure transparency, accountability, and efficiency.",
    longDescription: "A deeper dive into Dievaluasi, explaining the tech stack, challenges, and solutions...",
    image: "/assets/images/project/web5.png",
    githubUrl: "https://github.com/username/ecommerce-project",
    category: "website",
    technologies: ["Next.js", "TypeScript", "Chakra UI", "Node.js", "Express", "MongoDB"]
  },

  // Mobile Projects
  {
    slug: "surga-tani-mobile",
    title: "Surga Tani Mobile",
    description: "A mobile-based application designed to support agricultural commodity price surveys with instant reporting features.",
    longDescription: "A deeper dive into Dievaluasi, explaining the tech stack, challenges, and solutions...",
    image: "/assets/images/project/mobile1.png",
    githubUrl: "https://github.com/username/surga-tani",
    category: "mobile",
    technologies: ["React Native", "JavaScript", "Expo", "Firebase"]
  },
 
  // Design & Media Projects
  {
    slug: "social-media-content-design",
    title: "Social Media Content Design",
    description: "Designing social media content that documents every activity while prioritizing aesthetics and modern communication.",
    longDescription: "A deeper dive into Dievaluasi, explaining the tech stack, challenges, and solutions...",
    image: "/assets/images/project/design1.png",
    githubUrl: "https://behance.net/username/brand-project",
    category: "design",
    technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    slug: "poster-infographic-design",
    title: "Poster & Infographic Design",
    description: "Creative visual design that documents ideas and events while prioritizing aesthetics and modern message delivery.",
    longDescription: "A deeper dive into Dievaluasi, explaining the tech stack, challenges, and solutions...",
    image: "/assets/images/project/design2.png",
    githubUrl: "https://figma.com/username/design-system",
    category: "design",
    technologies: ["Figma", "Adobe Photoshop", "Canva"]
  },
  {
    slug: "cover-letter-design",
    title: "Cover Letter Design",
    description: "Designing cover letters that combine professionalism, readability, and modern aesthetics to leave a lasting impression",
    longDescription: "A deeper dive into Dievaluasi, explaining the tech stack, challenges, and solutions...",
    image: "/assets/images/project/design3.png",
    githubUrl: "https://behance.net/username/campaign-project",
    category: "design",
    technologies: ["Adobe InDesign", "Adobe Illustrator", "Canva"]
  }
  
];

// Anda juga bisa memindahkan data kategori ke sini jika mau
export const categories = [
  { id: 'all', label: 'All Projects', icon: '📁' },
  { id: 'website', label: 'Website', icon: '🌐' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'design', label: 'Design & Media', icon: '🎨' }
];