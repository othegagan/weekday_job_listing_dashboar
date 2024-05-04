import Link from 'next/link';
import { ThemeToggle } from '../ui/theme-toggle-button';
import Logo from './Logo';

export default function Navbar() {
    return (
        <header className=' dark:bg-background sticky top-0 z-40 w-full  bg-white shadow-sm  dark:shadow-neutral-800'>
            <div className='max-container flex h-14 items-center px-4 sm:px-6 lg:px-8'>
                <Link href='/' className='flex items-center gap-2'>
                    <Logo />
                    <h4 className='font-black tracking-wide'>NextLink</h4>
                </Link>

                <div className='flex flex-1 items-center justify-end space-x-2 md:justify-end'>
                    <nav className='flex items-center space-x-3 text-sm  font-medium sm:space-x-6'>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
