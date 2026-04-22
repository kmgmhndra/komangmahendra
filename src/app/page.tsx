'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useContext, useRef, useEffect, useState, useCallback, Suspense } from 'react'
import gsap from 'gsap'
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react'
import Hero from '@/components/ui/Hero'
import Profile from '@/components/ui/Profile'
import Header from '@/components/ui/Header'
import About from '@/components/ui/About'
import Certificates from '@/components/ui/Certificates'
import Contact from '@/components/ui/Contact'
import Projects from '@/components/ui/Projects'
import Publications from '@/components/ui/Publications'
import { LoaderContext } from '@/context/LoaderContext'

// KOMPONEN LOADER — auto-enter setelah 3 detik
const EnhancedLoader = ({ onEnter }: { onEnter: () => void }) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('INITIALIZING')
  const [isComplete, setIsComplete] = useState(false)
  const hasAutoEntered = useRef(false)

  useEffect(() => {
    const textStates = [
      { text: 'INITIALIZING', targetProgress: 25 },
      { text: 'LOADING ASSETS', targetProgress: 50 },
      { text: 'PREPARING EXPERIENCE', targetProgress: 80 },
      { text: 'ALMOST READY', targetProgress: 100 }
    ]

    let currentProgress = 0
    let currentStageIndex = 0

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 5 + 3

      if (
        currentProgress >= textStates[currentStageIndex].targetProgress &&
        currentStageIndex < textStates.length - 1
      ) {
        currentStageIndex++
        setLoadingText(textStates[currentStageIndex].text)
      }

      if (currentProgress >= 100) {
        currentProgress = 100
        setLoadingText('READY')
        setIsComplete(true)
        clearInterval(progressInterval)
      }

      setProgress(Math.round(currentProgress))
    }, 40)

    return () => clearInterval(progressInterval)
  }, [])

  // Auto-enter setelah 3 detik jika user tidak klik
  useEffect(() => {
    if (isComplete && !hasAutoEntered.current) {
      const autoEnterTimeout = setTimeout(() => {
        if (!hasAutoEntered.current) {
          hasAutoEntered.current = true
          onEnter()
        }
      }, 3000)
      return () => clearTimeout(autoEnterTimeout)
    }
  }, [isComplete, onEnter])

  const handleClick = () => {
    hasAutoEntered.current = true
    onEnter()
  }

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-black">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p className="mb-6 text-base sm:text-lg font-mono text-white tracking-wider">
          {loadingText}
        </p>

        <div className="w-full max-w-xs sm:max-w-sm mb-6">
          <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-center">
            <span className="text-sm font-mono text-gray-500">
              {progress}%
            </span>
          </div>
        </div>

        {isComplete && (
          <div className="animate-fade-in flex flex-col items-center">
            <button
              onClick={handleClick}
              className="group relative px-8 py-3 font-mono text-sm tracking-wider text-white border border-white/30 hover:border-white/60 transition-all duration-300 ease-out hover:bg-white/5 active:scale-95"
            >
              <span className="relative z-10">ENTER</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="h-full w-full bg-white blur-sm" />
              </div>
              <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
            </button>
            <p className="mt-3 text-xs font-mono text-gray-600 text-center animate-pulse">
              Auto-entering in 3s...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ====================================================================
// Back to Top Button
// ====================================================================
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

// ====================================================================
// Footer
// ====================================================================
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-black text-white mb-3">Komang Mahendra</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Front-End Developer passionate about crafting beautiful, interactive digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {['About', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/kmgmhndra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/komangmahendra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/kmgmhndra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} Komang Mahendra. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with Next.js, Three.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}


// ====================================================================
// HandleSearchParams
// ====================================================================
function HandleSearchParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section === 'projects') {
      const projectsElement = document.getElementById('projects');
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        router.replace('/', { scroll: false });
      }
    }
  }, [searchParams, router]);

  return null;
}


// ====================================================================
// Main Page
// ====================================================================
export default function Page() {
  const loaderRef = useRef(null)

  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useContext must be used within a LoaderProvider");
  }
  const { isLoading, setIsLoading } = context;

  const handleEnterExperience = useCallback(() => {
    if (loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsLoading(false)
        }
      })
    }
  }, [setIsLoading])

  if (isLoading) {
    return (
      <div ref={loaderRef}>
        <EnhancedLoader onEnter={handleEnterExperience} />
      </div>
    )
  }

  return (
    <main className="relative overflow-x-hidden">

      {/* Panggil komponen baru di dalam Suspense */}
      <Suspense fallback={null}>
        <HandleSearchParams />
      </Suspense>

      <Header />
      <BackToTop />

      <div className="sticky top-0 h-screen w-full z-0">
        <Hero />
        <div className="absolute inset-0 pointer-events-none transition-all duration-300 bg-black/30 backdrop-blur-lg opacity-0 group-[.scrolled]:opacity-100 z-10" />
      </div>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-0 sm:mx-2 md:mx-12 lg:mx-26 mb-8 sm:mb-16">
        <Profile />
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-0 sm:mx-2 md:mx-12 lg:mx-26 mb-8 sm:mb-16">
        <About />
      </section>

      <section id="projects" className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-0 sm:mx-2 md:mx-12 lg:mx-26 mb-8 sm:mb-16">
        <Projects/>
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-0 sm:mx-2 md:mx-12 lg:mx-26 mb-8 sm:mb-16">
        <Certificates />
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-0 sm:mx-2 md:mx-12 lg:mx-26 mb-8 sm:mb-16">
        <Publications />
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-0 sm:mx-2 md:mx-12 lg:mx-26 mb-8 sm:mb-16">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}