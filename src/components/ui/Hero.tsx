'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import dynamic from 'next/dynamic'

const SpaceScene = dynamic(() => import('../canvas/SpaceScene'), { ssr: false })

export default function Hero() {
  const containerRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
    ).fromTo(
      overlayRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.6'
    )
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="fixed inset-0 h-screen w-screen overflow-hidden bg-black font-sans opacity-0"
    >


      {/* Overlay konten */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-28 text-center pointer-events-none md:pt-32"
      >
        <div className="mb-4 font-semibold text-sm tracking-wider text-neutral-300 uppercase pointer-events-auto md:text-base">
          Step Inside My Portfolio
        </div>
        <p className="max-w-md px-4 font-normal leading-relaxed text-neutral-400 pointer-events-auto md:text-base">
          Discover interactive projects with a focus on seamless user experience and dynamic visuals.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform z-20">
        <div className="flex flex-col items-center text-neutral-400">
          <span className="mb-2 text-xs uppercase tracking-wider animate-pulse">
            Scroll Down
          </span>
          <div className="relative h-16 w-px bg-gradient-to-b from-white/40 to-transparent">
            <div className="absolute top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white animate-bounce" />
          </div>
        </div>
      </div>

      {/* Background canvas */}
      <div className="absolute inset-0 z-10 h-full w-full">
        <SpaceScene />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
