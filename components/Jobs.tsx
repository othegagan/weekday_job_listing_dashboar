'use client';

import useJobSearch, { Job } from '@/hooks/useJobSearch';
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import JobCard from './JobCard';
import { CardsSkeleton } from './ui/skleton';
import JobSearch from './job-filters/JobSearchInput';
import { useSearchParams } from 'next/navigation';

export default function Jobs() {
    const searchParams = useSearchParams();

    const [pageNumber, setPageNumber] = useState(9);
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const { jobs, loading, error, hasMore } = useJobSearch(pageNumber);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight && !loading && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, hasMore]);

    const filteredJobs = useMemo(() => {
        if (!searchTerm) {
            return jobs;
        }
        const fuzzyMatch = (text: string, search: string) => {
            const searchLower = search.toLowerCase();
            const textLower = text.toLowerCase();
            let searchIndex = 0;
            for (let charIndex = 0; charIndex < textLower.length; charIndex++) {
                if (textLower[charIndex] === searchLower[searchIndex]) {
                    searchIndex++;
                }
                if (searchIndex === searchLower.length) {
                    return true;
                }
            }
            return false;
        };
        return jobs.filter(
            job =>
                fuzzyMatch(job.companyName, searchTerm) ||
                (job.location && fuzzyMatch(job.location, searchTerm)) ||
                (job.jobRole && fuzzyMatch(job.jobRole, searchTerm)),
        );
    }, [jobs, searchTerm]);

    return (
        <div className='flex flex-col gap-3'>
            {jobs.length}
            <Suspense>
                <JobSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            </Suspense>
            <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:py-6'>
                {filteredJobs.map((job: Job, index) => {
                    return <JobCard key={index} jobData={job} />;
                })}
            </div>

            {loading && <CardsSkeleton />}

            {!loading && error && <p> Something went wrong..! 😥 Please Try again.</p>}
            {!loading && !error && filteredJobs.length === 0 && <p>No jobs found matching your criteria.</p>}
        </div>
    );
}
