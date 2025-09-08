'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Define types for skill data
type Skill = {
    name: string;
    category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools' | 'State Management' | '3D & Animation' | 'Design & Media';
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    icon?: string;
};

// Enhanced skill data with new categories
const skills: Skill[] = [
    // Frontend
    { name: 'HTML5', category: 'Frontend', level: 'Expert' },
    { name: 'CSS3', category: 'Frontend', level: 'Expert' },
    { name: 'JavaScript', category: 'Frontend', level: 'Advanced' },
    { name: 'TypeScript', category: 'Frontend', level: 'Advanced' },
    { name: 'React', category: 'Frontend', level: 'Advanced' },
    { name: 'Next.js', category: 'Frontend', level: 'Advanced' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert' },
    // { name: 'Vue.js', category: 'Frontend', level: 'Intermediate' },

    // Backend
    { name: 'Laravel', category: 'Backend', level: 'Advanced' },
    { name: 'PHP', category: 'Backend', level: 'Advanced' },
    { name: 'Python', category: 'Backend', level: 'Advanced' },
    { name: 'Flask', category: 'Backend', level: 'Intermediate' },
    { name: 'Node.js', category: 'Backend', level: 'Intermediate' },
    { name: 'MySQL', category: 'Backend', level: 'Advanced' },
    // { name: 'PostgreSQL', category: 'Backend', level: 'Intermediate' },

    // Mobile
    { name: 'Flutter', category: 'Mobile', level: 'Advanced' },
    { name: 'Dart', category: 'Mobile', level: 'Advanced' },
    { name: 'React Native', category: 'Mobile', level: 'Intermediate' },
    { name: 'Android Studio', category: 'Mobile', level: 'Intermediate' },

    // Tools
    { name: 'Git', category: 'Tools', level: 'Advanced' },
    { name: 'VS Code', category: 'Tools', level: 'Expert' },
    { name: 'NPM', category: 'Tools', level: 'Advanced' },
    { name: 'Microsoft Product', category: 'Tools', level: 'Expert' },
    { name: 'IBM SPSS', category: 'Tools', level: 'Advanced' },


    // 3D & Animation
    { name: 'Three.js', category: '3D & Animation', level: 'Advanced' },
    { name: 'React Three Fiber', category: '3D & Animation', level: 'Advanced' },
    { name: 'Framer Motion', category: '3D & Animation', level: 'Advanced' },
    { name: 'GSAP', category: '3D & Animation', level: 'Intermediate' },

    // Design & Media
    { name: 'Figma', category: 'Design & Media', level: 'Advanced' },
    { name: 'Canva', category: 'Design & Media', level: 'Advanced' },
    { name: 'Adobe Premiere Pro', category: 'Design & Media', level: 'Advanced' },
    { name: 'Meta Spark', category: 'Design & Media', level: 'Advanced' },
];

const categoryColors = {
    'Frontend': 'from-blue-500 via-cyan-500 to-teal-500',
    'Backend': 'from-emerald-500 via-green-500 to-lime-500',
    'Mobile': 'from-purple-500 via-violet-500 to-indigo-500',
    'Tools': 'from-orange-500 via-amber-500 to-yellow-500',
    '3D & Animation': 'from-cyan-500 via-sky-500 to-blue-500',
    'Design & Media': 'from-fuchsia-500 via-purple-500 to-violet-500'
};

const categoryIcons = {
    'Frontend': (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
    'Backend': (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
    ),
    'Mobile': (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    ),
    'Tools': (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),

    '3D & Animation': (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V4M7 4H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1h-4M7 8h10M7 12h10M7 16h10" />
        </svg>
    ),
    'Design & Media': (

        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    )
};

const levelColors = {
    'Beginner': 'bg-red-500/20 text-red-300 border-red-500/30',
    'Intermediate': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Advanced': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Expert': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
};

export default function AboutSection() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, amount: 0.5});

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const groupedSkills = skills.reduce((acc, skill) => {
        (acc[skill.category] = acc[skill.category] || []).push(skill);
        return acc;
    }, {} as Record<Skill['category'], Skill[]>);

    return (
        <section id="about" className="relative z-20 min-h-screen w-full bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl flex items-center py-20 overflow-hidden">

            {/* Enhanced Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-900/10 to-transparent"></div>
            </div>

            {/* Floating orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='a' patternUnits='userSpaceOnUse' width='60' height='60' patternTransform='translate(30,30) scale(1,1) rotate(0)'%3e%3crect x='0' y='0' width='100%25' height='100%25' fill='none'/%3e%3cpath d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z' stroke-width='1' stroke='%23ffffff' fill='none'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23a)'/%3e%3c/svg%3e")`
            }}></div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">

                {/* Header Section */}
                <div className="flex justify-center items-center py-5 px-4">
                    <motion.div
                        ref={ref}
                        variants={textVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-6xl sm:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
                            About Me
                        </h2>
                        <p className="text-xl leading-relaxed text-slate-300 max-w-4xl mx-auto">
                            Full-stack developer passionate about creating exceptional digital experiences through innovative code, stunning design, and cutting-edge technology.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

                    {/* Education Section */}
                    <div className={`lg:col-span-1 group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative bg-gradient-to-br from-black/50 to-black/20 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden h-full">
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                            {/* Animated border effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                            <div className="relative z-10">
                                {/* Higher Education */}
                                <div>
                                    <h4 className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                                        Bachelor of Iformation System
                                    </h4>
                                    <p className="text-sm font-medium text-slate-400 mt-1">Universitas Pendidikan Ganesha</p>
                                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 mt-3 border border-blue-500/20">
                                        2021 - 2025
                                    </div>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        
                                        Specializing in software engineering, web development, and modern programming paradigms. Building expertise in full-stack development and emerging technologies.
                                    </p>
                                </div>

                                {/* Secondary Education */}
                                <div className="pt-6 border-t border-white/10">
                                    <h4 className="text-lg font-semibold text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text">
                                        Senior High School
                                    </h4>
                                    <p className="text-sm font-medium text-slate-400 mt-1">SMA Taruna Mandara</p>
                                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full text-sm text-green-300 mt-3 border border-green-500/20">
                                        2018 - 2021
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                        Science major with focus on mathematics and natural sciences. Developed analytical thinking and problem-solving skills.
                                    </p>
                                </div>

                                {/* Junior High School */}
                                <div className="pt-6 border-t border-white/10">
                                    <h4 className="text-lg font-semibold text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text">
                                        Junior High School
                                    </h4>
                                    <p className="text-sm font-medium text-slate-400 mt-1">SMP Negeri 1 Busungbiu</p>
                                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full text-sm text-orange-300 mt-3 border border-orange-500/20">
                                        2015 - 2018
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                        Foundation years building core academic skills and discovering interest in technology and programming.
                                    </p>
                                </div>

                                {/* Elementary School */}
                                <div className="pt-6 border-t border-white/10">
                                    <h4 className="text-lg font-semibold text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text">
                                        Elementary School
                                    </h4>
                                    <p className="text-sm font-medium text-slate-400 mt-1">SDN N 1 Subuk</p>
                                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full text-sm text-pink-300 mt-3 border border-pink-500/20">
                                        2009 - 2015
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                        Early education foundation with emphasis on basic literacy, numeracy, and social development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section - Enhanced */}
                    <div className={`lg:col-span-2 group transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative bg-gradient-to-br from-black/50 to-black/20 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden h-full">
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-8">
                                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Technical Expertise</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {Object.entries(groupedSkills).map(([category, skillList], index) => (
                                        <div
                                            key={category}
                                            className="group/category cursor-pointer"
                                            onMouseEnter={() => setActiveCategory(category)}
                                            onMouseLeave={() => setActiveCategory(null)}
                                        >
                                            <div className="relative p-4 bg-black/30 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-black/50 transition-all duration-300 overflow-hidden">
                                                {/* Category background effect */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} opacity-0 group-hover/category:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                                                <div className="relative z-10">
                                                    <div className="flex items-center mb-4">
                                                        <div className={`w-10 h-10 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-lg flex items-center justify-center mr-3 group-hover/category:scale-110 transition-transform duration-300`}>
                                                            {categoryIcons[category as keyof typeof categoryIcons]}
                                                        </div>
                                                        <h4 className={`text-lg font-bold text-transparent bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} bg-clip-text`}>
                                                            {category}
                                                        </h4>
                                                    </div>

                                                    <div className={`h-0.5 w-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full mb-4 opacity-60 group-hover/category:opacity-100 transition-opacity duration-300`}></div>

                                                    <div className="space-y-2">
                                                        {skillList.slice(0, activeCategory === category ? skillList.length : 4).map((skill, skillIndex) => (
                                                            <div
                                                                key={skill.name}
                                                                className="group/skill flex items-center justify-between px-3 py-2 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                                                                style={{ animationDelay: `${index * 100 + skillIndex * 50}ms` }}
                                                            >
                                                                <span className="text-sm font-medium text-slate-300 group-hover/skill:text-white transition-colors duration-300">
                                                                    {skill.name}
                                                                </span>
                                                                <span className={`text-xs px-2 py-1 rounded-full border ${levelColors[skill.level]} font-medium`}>
                                                                    {skill.level}
                                                                </span>
                                                            </div>
                                                        ))}
                                                        {activeCategory !== category && skillList.length > 4 && (
                                                            <div className="text-center">
                                                                <span className="text-xs text-slate-400">+{skillList.length - 4} more</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Stats Section */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {[
                        { number: '35+', label: 'Technologies', gradient: 'from-blue-400 to-cyan-400' },
                        { number: '1+', label: 'Years Experience', gradient: 'from-emerald-400 to-teal-400' },
                        { number: '7', label: 'Categories Mastered', gradient: 'from-purple-400 to-pink-400' },
                        { number: '∞', label: 'Passion for Innovation', gradient: 'from-orange-400 to-red-400' }
                    ].map((stat, index) => (
                        <div key={stat.label} className="group relative">
                            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-black/20 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 hover:from-black/60 hover:to-black/40 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
                                {/* Glowing background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient.replace('to-', 'via-transparent to-')} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>

                                <div className="relative z-10">
                                    {/* No icon provided for stats */}
                                    <div className={`text-3xl font-bold text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.number}
                                    </div>
                                    <div className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}