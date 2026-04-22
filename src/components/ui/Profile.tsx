'use client';

import BlurText from '@/components/animations/BlurText/BlurText';
import Lanyard from '@/components/lanyard/Lanyard/Lanyard';

export default function ProfileSection() {
  return (
    <section
    id="profile"
      className="relative z-30 min-h-screen w-full bg-slate-900/40 backdrop-blur-lg flex items-center overflow-hidden"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left: Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl md:pl-8 font-black tracking-tight text-white pl-2">
              <BlurText
                text="Profile"
                animateBy="words"
                delay={100}
                className="w-full"
              />
            </h2>
            <div className="mt-4 sm:mt-6">
              <BlurText
                text="I am a passionate Front End Developer focused on building beautiful and interactive digital experiences. I believe that an intuitive user experience is the key to creating unforgettable applications."
                className="text-base sm:text-lg leading-7 sm:leading-8 text-slate-300 w-full px-2 md:pl-8 sm:px-0 pb-6 sm:pb-10"
                animateBy="words"
                delay={20}
              />
            </div>
            
          </div>

          {/* Right: 3D Lanyard */}
          <div className="flex justify-center md:justify-end order-first md:order-last mt-4 sm:mt-2 md:-mt-8 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-full mx-auto h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px] xl:h-[800px] cursor-grab active:cursor-grabbing">
              <Lanyard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}