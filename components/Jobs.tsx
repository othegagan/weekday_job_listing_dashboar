'use client';

import useBookSearch, { Job } from '@/hooks/useJobSearch';
import { useCallback, useRef, useState } from 'react';
import JobCard from './JobCard';
import { CardsSkeleton } from './ui/skleton';

export default function Jobs() {
    const [pageNumber, setPageNumber] = useState(9);
    const { jobs, loading, error, hasMore } = useBookSearch(pageNumber);

    const observer: any = useRef();
    const lastJobElementRef: any = useCallback(
        (node: any) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber(prevPageNumber => prevPageNumber + 9);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore],
    );

    return (
        <div className='flex flex-col gap-3'>
            <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:py-6'>
                {jobs.map((job: Job, index) => {
                    if (jobs.length === index + 1) {
                        return <JobCard ref={lastJobElementRef} key={index} jobData={job} />;
                    } else {
                        return <JobCard jobData={job} key={index} />;
                    }
                })}
            </div>

            {loading && <CardsSkeleton />}

            {!loading && error && <p> Something went wrong..! 😥 Please Try again.</p>}
        </div>
    );
}
