import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LoaderProvider } from '@/context/LoaderContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Komang Mahendra | Front-End Developer Portfolio",
  description: "Portfolio of Komang Mahendra — a passionate Front-End Developer focused on building beautiful and interactive digital experiences with React, Next.js, and Three.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden bg-black text-white`}>
        {/* Scroll Container */}
        <div id="scroll-container" data-scroll-container>
          <LoaderProvider> {/* <-- 2. Bungkus children */}
            {children}
          </LoaderProvider>
        </div>
      </body>
    </html>
  );
}
