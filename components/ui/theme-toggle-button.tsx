'use client';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <>
            <div className='flex gap-2' role='radiogroup'>
                <button
                    onClick={() => setTheme('dark')}
                    aria-label='Dark'
                    type='button'
                    className={`rounded-full p-1.5 ${theme === 'dark' ? 'bg-black/20 dark:bg-white/20' : ''}`}>
                    <Moon />
                </button>
                <button
                    onClick={() => setTheme('light')}
                    aria-label='Light'
                    type='button'
                    className={`rounded-full p-1.5 ${theme === 'light' ? 'bg-black/20 dark:bg-white/20' : ''}`}>
                    <Sun />
                </button>
                <button
                    onClick={() => setTheme('system')}
                    aria-label='System'
                    type='button'
                    className={`rounded-full p-1.5 ${theme === 'system' ? 'bg-black/20 dark:bg-white/20' : ''}`}>
                    <System />
                </button>
            </div>
        </>
    );
}

export function Moon() {
    return (
        <span>
            <svg height={16} strokeLinejoin='round' viewBox='0 0 16 16' width={16} style={{ width: 16, height: 16, color: 'currentcolor' }}>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5.82804 1.8717C3.30641 2.76542 1.5 5.17204 1.5 8.0001C1.5 11.5899 4.41015 14.5001 8 14.5001C10.8282 14.5001 13.2348 12.6936 14.1285 10.1718C13.3293 10.5427 12.4386 10.7499 11.5 10.7499C8.04822 10.7499 5.25 7.95172 5.25 4.49994C5.25 3.56144 5.45718 2.67078 5.82804 1.8717ZM0 8.0001C0 3.78268 3.26298 0.328073 7.40265 0.0220947L8.009 1.27881C7.22684 2.12601 6.75 3.25644 6.75 4.49994C6.75 7.12329 8.87665 9.24994 11.5 9.24994C12.7436 9.24994 13.8741 8.77304 14.7213 7.99079L15.978 8.59708C15.6722 12.7369 12.2175 16.0001 8 16.0001C3.58172 16.0001 0 12.4184 0 8.0001Z'
                    fill='currentColor'
                />
            </svg>
        </span>
    );
}

export function Sun() {
    return (
        <span>
            <svg height={16} strokeLinejoin='round' viewBox='0 0 16 16' width={16} style={{ width: 16, height: 16, color: 'currentcolor' }}>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z'
                    fill='currentColor'
                />
            </svg>
        </span>
    );
}

export function System() {
    return (
        <span>
            <svg height={16} strokeLinejoin='round' viewBox='0 0 16 16' width={16} style={{ width: 16, height: 16, color: 'currentcolor' }}>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 2C0 1.44772 0.447715 1 1 1H15C15.5523 1 16 1.44772 16 2V10.5C16 11.0523 15.5523 11.5 15 11.5H8.75V14.5H9.75H10.5V16H9.75H6.25H5.5V14.5H6.25H7.25V11.5H1C0.447714 11.5 0 11.0523 0 10.5V2ZM1.5 2.5V10H14.5V2.5H1.5Z'
                    fill='currentColor'
                />
            </svg>
        </span>
    );
}
