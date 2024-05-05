'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Job } from '@/hooks/useJobSearch';
import { toTitleCase } from '@/lib/utils';
import { ChevronDown, MapPin } from 'lucide-react';

export default function LocationFilter({ setLocation, location, jobs }: { setLocation: (location: string) => void; location: string; jobs: Job[] }) {
    const handleCheckboxChange = (city: string) => {
        const updatedLocations = location.split(',').includes(city)
            ? location
                  .split(',')
                  .filter(loc => loc !== city)
                  .join(',')
            : `${location},${city}`;

        setLocation(updatedLocations);
    };

    return (
        <>
            <Popover>
                <PopoverTrigger className='flex h-9 text-sm items-center gap-2 rounded-md border border-input px-3'>
                    Locations <ChevronDown className='size-4' />
                </PopoverTrigger>
                <PopoverContent>
                    <div className='flex flex-wrap gap-4'>
                        {Array.from(new Set(jobs.flat().map(job => job.location))).map((city: any) => (
                            <label key={city} className='flex items-center gap-2'>
                                <input type='checkbox' value={city} checked={location.split(',').includes(city)} onChange={() => handleCheckboxChange(city)} />
                                {toTitleCase(city || '')}
                            </label>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </>
    );
}
