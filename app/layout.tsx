import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nextlink | Job Listing Platform',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} min-w-[350px]`}>
                <Navbar />
                <main className='max-container flex flex-col  px-4 sm:px-6 lg:px-8'>{children}</main>
            </body>
        </html>
    );
}
