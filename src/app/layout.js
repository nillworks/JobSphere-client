import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import { Toaster } from 'sonner';

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
        <Toaster
          richColors
          position="top-center"
          toastOptions={{
            className:
              'dark:bg-[#11151a] dark:text-white bg-white text-slate-900 border border-slate-200 dark:border-[#1d242d]',
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
