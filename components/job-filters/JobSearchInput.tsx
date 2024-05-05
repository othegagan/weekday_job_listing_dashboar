'use client';

import { SearchIcon, XIcon } from 'lucide-react';
import { ChangeEvent, FC } from 'react';
import { Input } from '../ui/input';

interface Props {
    setSearchTerm: (value: string) => void;
    searchTerm: string;
}

const JobSearch: FC<Props> = ({ setSearchTerm, searchTerm }) => {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const clearSearch = () => {
        setSearchTerm('');
    };
    return (
        <div className='relative w-full md:w-2/5'>
            <SearchIcon className='absolute left-2.5 top-2.5 size-4 text-neutral-600' />
            <Input
                type='text'
                placeholder='Search by company name, role'
                value={searchTerm}
                onChange={handleSearch}
                className='w-full  rounded border p-2 pl-8'
            />
            {searchTerm && <XIcon onClick={clearSearch} className='absolute right-2.5 top-2.5 size-4 cursor-pointer text-neutral-600 ' />}
        </div>
    );
};

export default JobSearch;
