import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Jost } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Loader from '@/components/Loader';
import Header from '@/components/layouts/header';
import ChatPanel from '@/components/ChatPanel';
import './globals.css';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HenryBrown.Dev',
  description: 'A Frontend Developer',
  applicationName: 'Portfolio',
  openGraph: {
    type: 'website',
    url: 'https://devhenrybrown.vercel.app/',
    title: 'HenryBrown.Dev',
    description: 'Portfolio website developed with NextJS, TypeScript, ShadcnUI & GSAP.',
    siteName: 'Portfolio website',
    images: [
      {
        url: 'https://i.ibb.co/m5bYtw6/responsive-showcase.png',
      },
    ],
  },
  authors: {
    name: 'Henry Brown',
  },
  generator: 'NextJs',
  keywords: ['NextJS', 'Portfolio', 'GSAP', 'ShadcnUI'],
  creator: 'Henry Brown',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={jost.className}>
        <Loader />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <ChatPanel />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
