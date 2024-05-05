'use client';

import useJobSearch, { Job } from '@/hooks/useJobSearch';
import { useQueryState } from 'next-usequerystate';
import { Suspense, useEffect, useState } from 'react';
import JobSearch from './job-filters/JobSearchInput';
import LocationFilter from './job-filters/LocationFilter';
import JobCard from './JobCard';
import { CardsSkeleton } from './ui/skleton';

export default function Jobs() {
    const [pageNumber, setPageNumber] = useState(9);
    const [searchTerm, setSearchTerm] = useQueryState('search', { defaultValue: '', history: 'replace' });
    const [role, setRole] = useQueryState('role', { defaultValue: '', history: 'replace' });
    const [location, setLocation] = useQueryState('location', { defaultValue: '', history: 'replace' });
    const [minSalary, setMinSalary] = useQueryState('minsalary', { defaultValue: '', history: 'replace' });
    const [maxSalary, setMaxSalary] = useQueryState('maxsalary', { defaultValue: '', history: 'replace' });
    const [minExperience, setMinExperience] = useQueryState('minexp', { defaultValue: '', history: 'replace' });
    const [maxExperience, setMaxExperience] = useQueryState('maxexp', { defaultValue: '', history: 'replace' });

    const { jobs, loading, error, hasMore } = useJobSearch(pageNumber);

    const [filteredJobs, setFilteredJobs] = useState(jobs);

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

    useEffect(() => {
        fitlerJobs();
    }, [searchTerm, location, role, jobs]);

    const fitlerJobs = () => {
        let filterdJobs = jobs;

        if (searchTerm) {
            filterdJobs = filterdJobs.filter(job => job.companyName.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (location) {
            const locations = location.toLowerCase().split(',');
            filterdJobs = filterdJobs.filter(job => job.location && locations.some(loc => loc && job?.location?.toLowerCase().includes(loc)));
        }
        if (role) {
            const roles = role.toLowerCase().split(',');
            filterdJobs = filterdJobs.filter(job => job.jobRole && roles.some(loc => loc && job?.jobRole?.toLowerCase().includes(loc)));
        }

        setFilteredJobs(filterdJobs);
    };

    return (
        <>
            <div className='sticky  top-[52px] z-[55] bg-white p-3 dark:bg-black'>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='flex flex-wrap items-center w-full gap-4'>
                        <JobSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                        <LocationFilter setLocation={setLocation} location={location} jobs={jobs} />
                    </div>
                </Suspense>
            </div>
            <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:py-6'>
                {filteredJobs.map((job: Job, index) => {
                    return <JobCard key={index} jobData={job} />;
                })}
            </div>

            {loading && <CardsSkeleton />}

            {!loading && !error && jobs && filteredJobs.length === 0 && <p>No jobs found matching your criteria.</p>}
            {!loading && error && <p> Something went wrong..! 😥 Please Try again.</p>}
        </>
    );
}
