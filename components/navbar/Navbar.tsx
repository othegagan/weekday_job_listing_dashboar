import { Button } from '../ui/button';
import Logo from './Logo';

export default function Navbar() {
    return (
        <header className='supports-backdrop-blur:bg-background/60 dark:bg-background/60 sticky top-0 z-40 w-full    shadow-sm backdrop-blur-[5px] dark:shadow-neutral-800'>
            <div className='max-container flex h-14 items-center px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center gap-2'>
                    <Logo />
                    <h4 className='font-black '>NextLink</h4>
                </div>

                <div className='flex flex-1 items-center justify-end space-x-2 md:justify-end'>
                    <nav className='flex items-center space-x-3 text-sm  font-medium sm:space-x-6'>
                        <Button>Search Job</Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
