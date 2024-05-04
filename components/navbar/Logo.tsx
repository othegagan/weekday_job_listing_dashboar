import Image from 'next/image';

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return <Image src='/logo.png' width={28} height={28} alt='logo' className={`${className}`} />;
}
