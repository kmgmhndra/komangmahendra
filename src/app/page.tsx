'use client'

import { useSearchParams, useRouter } from 'next/navigation' 
import { useContext, useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ui/Hero'
import Profile from '@/components/ui/Profile'
import Header from '@/components/ui/Header' // ✅ panggil header disini
import About from '@/components/ui/About' // Import komponen About
import Certificates from '@/components/ui/Certificates'
import Contact from '@/components/ui/Contact'
import Projects from '@/components/ui/Projects'
import Publications from '@/components/ui/Publications' // Import komponen Publications
import { LoaderContext } from '@/context/LoaderContext'

// Loader component dipindah ke page
const EnhancedLoader = ({ onEnter }: { onEnter: () => void }) => {  
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('INITIALIZING')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const textStates = [
      { text: 'INITIALIZING', targetProgress: 20 },
      { text: 'LOADING UNIVERSE', targetProgress: 40 },
      { text: 'RENDERING STARS', targetProgress: 60 },
      { text: 'PREPARING EXPERIENCE', targetProgress: 80 },
      { text: 'ALMOST READY', targetProgress: 100 }
    ]

    let currentProgress = 0
    let currentStageIndex = 0

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 2 + 0.5

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
    }, 60)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="mb-8 text-lg font-mono text-white tracking-wider">
          {loadingText}
        </p>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mb-8">
          <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm font-mono text-gray-500">
              {progress}%
            </span>
          </div>
        </div>

        {isComplete && (
          <div className="animate-fade-in">
            <button
              onClick={onEnter}
              className="group relative px-8 py-3 font-mono text-sm tracking-wider text-white border border-white/30 hover:border-white/60 transition-all duration-300 ease-out hover:bg-white/5 active:scale-95"
            >
              <span className="relative z-10">ENTER EXPERIENCE</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="h-full w-full bg-white blur-sm" />
              </div>
              <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
            </button>
            <p className="mt-4 text-xs font-mono text-gray-600 text-center animate-pulse">
              Click to continue
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Page() {
  const loaderRef = useRef(null)

  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useContext must be used within a LoaderProvider");
  }
  const { isLoading, setIsLoading } = context;

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
  // 4. TAMBAHKAN `router` ke dalam dependency array
  }, [searchParams, router]); 
  

  const handleEnterExperience = () => {
    if (loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsLoading(false)
        }
      })
    }
  }

  if (isLoading) {
    return (
      <div ref={loaderRef}>
        <EnhancedLoader onEnter={handleEnterExperience} />
      </div>
    )
  }

  return (
    <main className="relative">

      {/* Header fixed */}
      <Header />

      {/* Hero tetap fixed di belakang */}
      <div className="sticky top-0 h-screen w-full z-0">
        <Hero />
        <div className="absolute inset-0 pointer-events-none transition-all duration-300 bg-black/30 backdrop-blur-lg opacity-0 group-[.scrolled]:opacity-100 z-10" />
      </div>

      {/* Profile menutup Hero ketika discroll */}
      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-2 md:mx-12 lg:mx-26 mb-16 ">
        <Profile />
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-2 md:mx-12 lg:mx-26 mb-16">
        <About />
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-2 md:mx-12 lg:mx-26 mb-16">
        <Projects/>
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-2 md:mx-12 lg:mx-26 mb-16">
        <Certificates />
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-2 md:mx-12 lg:mx-26 mb-16">
        <Publications />
      </section>

      <section className="relative z-10 min-h-screen bg-black/50 backdrop-blur-md mx-2 md:mx-12 lg:mx-26 mb-16">
        <Contact />
      </section>
    </main>
  )
}
