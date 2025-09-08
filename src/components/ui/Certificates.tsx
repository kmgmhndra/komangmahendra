'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
  category: 'technical' | 'soft-skills' | 'academic';
};

const certificates: Certificate[] = [
    {
      id: 1,
      title: "Basic Command of Git",
      issuer: "MySkill",
      date: "December 2023",
      image: "/assets/images/certificates/Basic Git-1.png",
      credentialUrl: "https://coursera.org/verify/certificate123",
      skills: ["Git", "Version Control", "Command Line", "GitHub"],
      category: "technical",
    },
    {
      id: 2,
      title: "Data Analyst Whith Python",
      issuer: "Free Code Camp",
      date: "Desember 2023",
      image: "/assets/images/certificates/CodeCamp_Seritfication-1.png",
      credentialUrl: "https://cloud.google.com/certification/verify",
      skills: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
      category: "technical",
    },
    {
      id: 3,
      title: "Java Fundamentals",
      issuer: "Oracle Academy",
      date: "January 2023",
      image: "/assets/images/certificates/course_certificate-1.png",
      credentialUrl: "https://aws.amazon.com/verification",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"],
      category: "technical",
  },
  // {
  //   id: 4,
  //   title: "JavaScript Algorithms",
  //   issuer: "freeCodeCamp",
  //   date: "September 2023",
  //   image: "/certificates/freecodecamp.png",
  //   credentialUrl: "https://freecodecamp.org/certification",
  //   skills: ["JavaScript", "Algorithms", "Data Structures"],
  //   category: "technical",
  // },
  // {
  //   id: 5,
  //   title: "Project Management Professional",
  //   issuer: "Project Management Institute",
  //   date: "August 2023",
  //   image: "/certificates/pmp.png",
  //   credentialUrl: "https://pmi.org/certifications/verify",
  //   skills: ["Project Management", "Leadership", "Agile"],
  //   category: "soft-skills",
  // },
  // {
  //   id: 6,
  //   title: "Digital Marketing Specialist",
  //   issuer: "Google Digital Garage",
  //   date: "July 2023",
  //   image: "/certificates/google-marketing.png",
  //   credentialUrl: "https://learndigital.withgoogle.com/verify",
  //   skills: ["Digital Marketing", "SEO", "Analytics"],
  //   category: "soft-skills",
  // },
  // {
  //   id: 7,
  //   title: "Machine Learning Course",
  //   issuer: "Stanford University",
  //   date: "June 2023",
  //   image: "/certificates/stanford-ml.png",
  //   credentialUrl: "https://coursera.org/verify/ml-course",
  //   skills: ["Machine Learning", "Python", "TensorFlow"],
  //   category: "academic",
  // },
  // {
  //   id: 8,
  //   title: "Data Science Specialization",
  //   issuer: "Johns Hopkins University",
  //   date: "May 2023",
  //   image: "/certificates/jhu-datascience.png",
  //   credentialUrl: "https://coursera.org/verify/specialization",
  //   skills: ["Data Science", "R", "Statistics"],
  //   category: "academic",
  // }
];

const filteredCertificates = certificates.filter(cert => cert.category === 'technical');

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-swiping logic - pause when hovering
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % filteredCertificates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [filteredCertificates.length, isHovered]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % filteredCertificates.length);
  }, [filteredCertificates.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + filteredCertificates.length) % filteredCertificates.length);
  }, [filteredCertificates.length]);

  return (
    <section
      id="certificates"
      className="relative min-h-screen w-full bg-gradient-to-br from-black via-slate-950 to-slate-900 py-20 px-6 flex flex-col items-center justify-center text-white overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black md:text-8xl text-white mb-6">
            Certifications
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional achievements and continuous learning journey
          </p>
        </motion.div>
      </div>

      <div
        className="relative w-full max-w-7xl mx-auto flex items-center justify-center h-[500px] perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((cert, index) => {
            const position = (index - currentIndex + filteredCertificates.length) % filteredCertificates.length;

            // Only show current, next, and previous cards (3 total)
            const isVisible = position <= 1 || position >= filteredCertificates.length - 1;

            if (!isVisible) return null;

            let stackX = 0;
            let stackRotateY = 0;
            let stackRotateZ = 0;
            let stackScale = 1;
            let stackOpacity = 1;
            let stackZIndex = 0;
            let stackBlur = 0;

            if (position === 0) {
              // Current/Active card (center)
              stackX = 0;
              stackRotateY = 0;
              stackRotateZ = 0;
              stackScale = 1;
              stackOpacity = 1;
              stackZIndex = 10;
              stackBlur = 0;
            } else if (position === 1) {
              // Next card (right side)
              stackX = 280;
              stackRotateY = -25;
              stackRotateZ = 3;
              stackScale = 0.85;
              stackOpacity = 0.7;
              stackZIndex = 5;
              stackBlur = 1;
            } else if (position === filteredCertificates.length - 1) {
              // Previous card (left side)
              stackX = -280;
              stackRotateY = 25;
              stackRotateZ = -3;
              stackScale = 0.85;
              stackOpacity = 0.7;
              stackZIndex = 5;
              stackBlur = 1;
            }

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8, y: 100, rotateY: 45 }}
                animate={{
                  opacity: stackOpacity,
                  scale: stackScale,
                  x: stackX,
                  rotateY: stackRotateY,
                  rotateZ: stackRotateZ,
                  zIndex: stackZIndex,
                  y: 0,
                  filter: `blur(${stackBlur}px)`
                }}
                exit={{ opacity: 0, scale: 0.6, y: -50, rotateY: -30 }}
                transition={{
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 120,
                  damping: 25,
                  mass: 1
                }}
                className="absolute w-[85%] md:w-[900px] h-full transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-slate-750 to-slate-900 shadow-2xl rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
                  {/* Glowing border effect for active card */}
                  {position === 0 && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
                  )}

                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-10 gap-0 h-full">
                    {/* Kolom Kiri (Gambar) - 75% */}
                    <div className="relative h-48 md:h-auto overflow-hidden md:col-span-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Kolom Kanan (Deskripsi) - 25% */}
                    <div className="p-6 md:p-8 flex flex-col justify-center relative md:col-span-4">
                      <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                        {cert.title}
                      </h3>

                      <div className="flex items-center text-slate-400 mb-4">
                        <span className="font-semibold text-sm md:text-base">{cert.issuer}</span>
                        <span className="mx-2 w-1 h-1 bg-slate-500 rounded-full"></span>
                        <span className="text-sm">{cert.date}</span>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                          Skills Covered
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-slate-700/80 text-slate-300 rounded-lg text-xs font-medium border border-slate-600/50 backdrop-blur-sm"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-3 py-1.5 bg-slate-600/50 text-slate-400 rounded-lg text-xs">
                              +{cert.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {cert.credentialUrl && position === 0 && (
                        <motion.a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Verify Certificate
                          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation */}
      <div className="flex items-center justify-center mt-12 gap-6">
        <motion.button
          onClick={handlePrev}
          className="group flex items-center justify-center w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-slate-600/30"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous certificate"
        >
          <span className="text-xl group-hover:text-blue-400 transition-colors">←</span>
        </motion.button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {filteredCertificates.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-blue-500 w-6'
                  : 'bg-slate-600 hover:bg-slate-500'
                }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.button
          onClick={handleNext}
          className="group flex items-center justify-center w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-slate-600/30"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next certificate"
        >
          <span className="text-xl group-hover:text-blue-400 transition-colors">→</span>
        </motion.button>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md mx-auto mt-8">
        <div className="w-full bg-slate-800/30 rounded-full h-1">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full"
            style={{ width: `${((currentIndex + 1) / filteredCertificates.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}