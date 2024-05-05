import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { Providers } from '@/lib/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nextlink | Job Listing Platform',
    description:
        'Discover your next opportunity on Nextlink, the leading job listing platform. Browse thousands of job offers and find the best match for your professional skills.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='dark'>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" href="/logo.png" type="image/x-icon" />
            </head>
            <body className={`${inter.className} min-w-[350px]`}>
                <Providers>
                    <Navbar />
                    <main className='max-container flex flex-col  px-4 sm:px-6 lg:px-8'>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
