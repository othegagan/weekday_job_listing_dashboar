'use client';

import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { ChangeEvent, FC } from 'react';
import { SearchIcon, XIcon } from 'lucide-react';

interface Props {
    setSearchTerm: (value: string) => void;
    searchTerm: string;
}

const JobSearch: FC<Props> = ({ setSearchTerm, searchTerm }) => {
    const router = useRouter();

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setTimeout(() => {
            router.push(`?search=${event.target.value}`);
        }, 400);
    };

    const clearSearch = () => {
        setSearchTerm('');
        router.push('/');
    };

    return (
        <div className='relative max-w-md'>
            <SearchIcon className='absolute left-2.5 top-2.5 size-4 text-neutral-600' />
            <Input
                type='text'
                placeholder='Search by job role, company, location...'
                value={searchTerm}
                onChange={handleSearch}
                className='w-full  rounded border p-2 pl-8'
            />
            {searchTerm && <XIcon onClick={clearSearch} className='text-neutral-600 absolute right-2.5 top-2.5 size-4 cursor-pointer ' />}
        </div>
    );
};

export default JobSearch;
