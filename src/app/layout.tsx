import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LoaderProvider } from '@/context/LoaderContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Interactive 3D Portfolio",
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
