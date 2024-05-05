'use client';

import React from 'react';
import { Button } from '../ui/button';
import { SlidersHorizontal } from 'lucide-react';

interface ResetFiltersProps {
    setMinSalary: (minSalary: string) => void;
    setMinexp: (minexp: string) => void;
    setLocation: (location: string) => void;
    setSearchTerm: (searchTerm: string) => void;
}

export default function ResetFilers({ setMinSalary, setMinexp, setLocation, setSearchTerm }: ResetFiltersProps) {
    const resetFilters = () => {
        setMinSalary('');
        setMinexp('');
        setLocation('');
        setSearchTerm('');
    };
    return (
        <>
            <Button onClick={resetFilters} variant='secondary' size='sm'>
                <SlidersHorizontal className='mr-2 size-4' />
                Reset Filters
            </Button>
        </>
    );
}
