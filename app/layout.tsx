import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/lib/language-context';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sergiomd.es'),
  title: 'Sergio Matamoro | Fullstack Developer',
  description:
    'Portfolio de Sergio Matamoro, desarrollador Fullstack especializado en React, Next.js, TypeScript, Node.js y automatización con n8n y Make. Creo aplicaciones web modernas y escalables.',
  keywords: [
    'Sergio Matamoro',
    'Fullstack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Node.js',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Barcelona',
    'n8n',
    'Make.com',
    'Automatización',
  ],
  authors: [{ name: 'Sergio Matamoro Diaz', url: 'https://sergiomd.es' }],
  creator: 'Sergio Matamoro Diaz',
  publisher: 'Sergio Matamoro Diaz',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://sergiomd.es',
    siteName: 'Sergio Matamoro | Portfolio',
    title: 'Sergio Matamoro | Fullstack Developer',
    description:
      'Desarrollador Fullstack especializado en React, Next.js, TypeScript y automatización. Creo aplicaciones web modernas y escalables.',
    images: [
      {
        url: 'https://sergiomd.es/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sergio Matamoro - Fullstack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sergio Matamoro | Fullstack Developer',
    description:
      'Desarrollador Fullstack especializado en React, Next.js, TypeScript y automatización.',
    images: ['https://sergiomd.es/og-image.png'],
    creator: '@sergiomd',
  },
  alternates: {
    canonical: 'https://sergiomd.es',
    languages: {
      'es-ES': 'https://sergiomd.es',
      'en-US': 'https://sergiomd.es',
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} scrollbar-custom`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex min-h-screen flex-col items-center justify-center">
              <Navbar />
              <main className="flex-1 pt-20">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
