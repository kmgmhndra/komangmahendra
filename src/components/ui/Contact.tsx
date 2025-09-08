'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Instagram, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.75, transition: { duration: 0.2 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: 'spring', stiffness: 120 } },
};

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'komangmahendra003@gmail.com', href: 'mailto:komangmahendra003@gmail.com' },
    { icon: Phone, label: 'Nomor HP', value: '+62 831 1538 1400', href: 'tel:+6283115381400' },
    { icon: MapPin, label: 'Lokasi', value: 'Bali, Indonesia', href: 'https://www.google.com/maps/place/Bali' },
];

const socialLinks = [
    { icon: Github, href: 'https://github.com/kmgmhndra', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kmgmhndra25/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/kmg.mhndra_/', label: 'Instagram' },
];

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

    const FORM_URL = 'https://formspree.io/f/mnnblqzd';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');

        try {
            const response = await fetch(FORM_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (err) {
            setSubmitStatus('error');
        }
    };
    
    // Efek untuk menghilangkan modal otomatis dan mereset formulir
    useEffect(() => {
        if (submitStatus === 'success' || submitStatus === 'error') {
            const timer = setTimeout(() => {
                setSubmitStatus('idle');
                if (submitStatus === 'success') {
                    setFormData({ name: '', email: '', message: '' });
                }
            }, 4000); // Modal akan hilang setelah 4 detik

            return () => clearTimeout(timer); // Membersihkan timer saat komponen unmount
        }
    }, [submitStatus]);

    return (
        <section id="contact" className="py-24 bg-gray-950 text-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
                <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="container mx-auto px-6 relative z-10"
            >
                <motion.div variants={titleVariants} className="text-center mb-20">
                    <motion.h2 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent leading-tight">
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Ready to turn your vision into reality? Let's discuss your next big project!
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        variants={cardVariants}
                        className="bg-gray-900/70 p-8 rounded-3xl shadow-2xl border border-gray-800 backdrop-blur-md hover:border-emerald-500 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Contact Info</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="group block"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center space-x-4 p-5 rounded-2xl bg-gray-800/50 border border-gray-700 group-hover:bg-gray-700/50 transition-colors">
                                        <info.icon className="w-6 h-6 text-emerald-400" />
                                        <div>
                                            <p className="text-sm text-gray-400">{info.label}</p>
                                            <p className="text-lg font-medium">{info.value}</p>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                        <motion.div
                            className="mt-10 flex items-center gap-6 flex-wrap"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="/download/CV_Komang_Mahendra.pdf"
                                download
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download CV
                            </motion.a>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-emerald-400 hover:bg-gray-700/50 transition-all"
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className="bg-gray-900/70 p-8 rounded-3xl shadow-2xl border border-gray-800 backdrop-blur-md hover:border-emerald-500 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Send Me A Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-colors"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-colors"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-colors"
                                ></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-102 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.02 }}
                                whileTap={{ scale: submitStatus === 'loading' ? 1 : 0.98 }}
                                disabled={submitStatus === 'loading'}
                            >
                                {submitStatus === 'loading' ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    'Send Message'
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>

            {/* Modal Pop-up Notifikasi */}
            <AnimatePresence>
                {(submitStatus === 'success' || submitStatus === 'error') && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4"
                            style={{
                                backgroundColor: submitStatus === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                border: `1px solid ${submitStatus === 'success' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className="mb-4 flex justify-center"
                            >
                                {submitStatus === 'success' ? (
                                    <CheckCircle className="w-16 h-16 text-emerald-400" />
                                ) : (
                                    <XCircle className="w-16 h-16 text-red-400" />
                                )}
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-2 text-white">
                                {submitStatus === 'success' ? 'Success!' : 'Oops!'}
                            </h3>
                            <p className="text-gray-300 mb-6">
                                {submitStatus === 'success'
                                    ? 'Thank you for your message! I will get back to you soon.'
                                    : 'Something went wrong. Please try again.'}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}