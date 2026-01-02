

import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: 'JLWanalytics - Refining Africa\'s New Oil',
  description: 'Democratizing data intelligence in Africa. We turn data into decisions, and insights into impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans bg-data-void-canvas`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}

