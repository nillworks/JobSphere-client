import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'JobSphere - Find Your Dream Job',
  description:
    'JobSphere connects top talent with world-class companies. Browse thousands of curated opportunities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-full antialiased bg-white text-slate-900 transition-colors duration-300 dark:bg-[#090b0e] dark:text-slate-50`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
