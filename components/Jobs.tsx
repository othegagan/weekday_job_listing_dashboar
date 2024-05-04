'use client';

import useBookSearch, { Job } from '@/hooks/useJobSearch';
import { useState } from 'react';
import { JobCard } from './JobCard';

export default function Jobs() {
    const [pageNumber, setPageNumber] = useState(9);
    const { jobs, loading, error, hasMore } = useBookSearch(pageNumber);

    return (
        <div className='flex flex-col gap-3'>
            <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3 lg:py-6'>
                {jobs.map((job: Job) => (
                    <JobCard jobData={job} />
                ))}
            </div>

            <div></div>
        </div>
    );
}
