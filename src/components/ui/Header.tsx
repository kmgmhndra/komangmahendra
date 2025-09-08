'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

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

    // Fungsi untuk menangani smooth scroll saat menu di-klik
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Mencegah link melompat instan
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;

        const targetId = href.substring(1); // Ambil ID section (cth: 'about')
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = 80; // Sesuaikan dengan tinggi header Anda jika diperlukan
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
            
            // Opsional: Memperbarui URL di browser bar setelah scroll
            window.history.pushState(null, "", href);
        }
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
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center">
            <nav
                ref={containerRef}
                className="relative flex items-center gap-2 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 p-2 shadow-lg"
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
                                    ? 'text-white font-bold' // Teks menjadi hitam saat aktif
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
        </header>
    );
}