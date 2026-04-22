'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// Definisikan tipe untuk item navigasi
type NavItem = {
    href: string;
    label: string;
};

// Definisikan item navigasi
const navItems: NavItem[] = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);
    const [activeRect, setActiveRect] = useState<DOMRect | null>(null);
    const [activeSection, setActiveSection] = useState<string>('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Efek untuk mendeteksi section yang sedang aktif saat scroll
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', 
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveSection(`#${sectionId}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const sectionId = item.href.replace('#', '');
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Efek untuk memperbarui posisi active indicator saat active section berubah
    useEffect(() => {
        if (activeSection && containerRef.current) {
            const activeLink = containerRef.current.querySelector(`a[href="${activeSection}"]`) as HTMLAnchorElement;
            if (activeLink) {
                const rect = activeLink.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                setActiveRect({
                    ...rect,
                    left: rect.left - containerRect.left,
                    top: rect.top - containerRect.top,
                } as DOMRect);
            }
        }
    }, [activeSection]);

    // Close mobile menu when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (mobileMenuOpen) setMobileMenuOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileMenuOpen]);

    // Fungsi untuk menangani smooth scroll saat menu di-klik
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
            
            window.history.pushState(null, "", href);
        }

        // Close mobile menu after clicking
        setMobileMenuOpen(false);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
            setHoveredRect({
                ...rect,
                left: rect.left - containerRect.left,
                top: rect.top - containerRect.top,
            } as DOMRect);
        }
    };

    const handleMouseLeave = () => {
        setHoveredRect(null);
    };

    return (
        <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center items-center px-4">
            {/* Desktop Navigation */}
            <nav
                ref={containerRef}
                className="relative hidden sm:flex items-center gap-2 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 p-2 shadow-lg"
                onMouseLeave={handleMouseLeave}
            >
                {/* Indikator untuk section aktif */}
                {activeRect && !hoveredRect && (
                    <div
                        className="absolute z-0 pointer-events-none rounded-full bg-white transition-all duration-500 ease-out"
                        style={{
                            left: activeRect.left,
                            top: activeRect.top,
                            width: activeRect.width,
                            height: activeRect.height,
                        }}
                    />
                )}

                {/* Indikator untuk efek hover */}
                {hoveredRect && (
                    <div
                        className="absolute z-0 pointer-events-none rounded-full bg-white/10 transition-all duration-300 ease-in-out"
                        style={{
                            left: hoveredRect.left,
                            top: hoveredRect.top,
                            width: hoveredRect.width,
                            height: hoveredRect.height,
                            transform: 'scale(1.02)'
                        }}
                    />
                )}
                
                {/* Daftar Item Menu */}
                {navItems.map((item) => {
                    const isActive = activeSection === item.href;
                    
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={handleSmoothScroll}
                            className={`
                                relative z-10
                                px-4 py-1.5
                                text-sm transition-colors duration-300
                                rounded-full
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
                                ${isActive 
                                    ? 'text-white font-bold'
                                    : 'text-neutral-300 hover:text-white'
                                }
                            `}
                            onMouseEnter={handleMouseEnter}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex items-center">
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="relative z-50 p-3 rounded-full bg-black/30 backdrop-blur-lg border border-white/10 shadow-lg"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-5 h-5 text-white" />
                    ) : (
                        <Menu className="w-5 h-5 text-white" />
                    )}
                </button>

                {/* Mobile menu overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex items-center justify-center">
                        <nav className="flex flex-col items-center gap-6">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={handleSmoothScroll}
                                        className={`text-2xl font-medium transition-colors duration-300 ${
                                            isActive
                                                ? 'text-white font-bold'
                                                : 'text-neutral-400 hover:text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}