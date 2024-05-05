'use client';

import useJobSearch, { Job } from '@/hooks/useJobSearch';
import { useQueryState } from 'next-usequerystate';
import { Suspense, useEffect, useState } from 'react';
import JobSearch from './job-filters/JobSearchInput';
import LocationFilter from './job-filters/LocationFilter';
import JobCard from './JobCard';
import { CardsSkeleton } from './ui/skleton';
import ExperienceFilter from './job-filters/ExperienceFilter';
import MinSalaryFilter from './job-filters/MinSalaryFilter';
import ResetFilers from './job-filters/ResetFilers';

export default function Jobs() {
    const [pageNumber, setPageNumber] = useState(9);
    const [searchTerm, setSearchTerm] = useQueryState('search', { defaultValue: '', history: 'replace' });
    const [location, setLocation] = useQueryState('location', { defaultValue: '', history: 'replace' });
    const [minSalary, setMinSalary] = useQueryState('minsalary', { defaultValue: '', history: 'replace' });
    const [minexp, setMinexp] = useQueryState('minexp', { defaultValue: '', history: 'replace' });

    const { jobs, loading, error, hasMore } = useJobSearch(pageNumber);

    const [filteredJobs, setFilteredJobs] = useState(jobs);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom + 1 >= docHeight && !loading && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 9);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, hasMore]);

    useEffect(() => {
        fitlerJobs();
    }, [searchTerm, location, jobs, minSalary, minexp]);

    const fitlerJobs = () => {
        let filterdJobs = jobs;

        if (searchTerm) {
            filterdJobs = filterdJobs.filter(
                job => job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) || job.jobRole?.toLowerCase().includes(searchTerm.toLowerCase()),
            );
        }
        if (location) {
            const locations = location.toLowerCase().split(',');
            filterdJobs = filterdJobs.filter(job => job.location && locations.some(loc => loc && job?.location?.toLowerCase().includes(loc)));
        }

        if (minSalary) {
            const minSalaryNum = parseInt(minSalary, 10);
            filterdJobs = filterdJobs.filter(job => job.minJdSalary && parseInt(job.minJdSalary.toString(), 10) >= minSalaryNum);
        }

        if (minexp) {
            const minExpNum = parseInt(minexp, 10);
            filterdJobs = filterdJobs.filter(job => job.minExp && job.minExp >= minExpNum);
        }

        setFilteredJobs(filterdJobs);
    };

    return (
        <>
            <div className='sticky  top-[52px] z-[55] bg-white p-3 dark:bg-black'>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='flex w-full flex-wrap items-center gap-4'>
                        <JobSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                        <LocationFilter setLocation={setLocation} location={location} jobs={jobs} />
                        <ExperienceFilter setMinexp={setMinexp} minexp={minexp} />
                        <MinSalaryFilter setMinSalary={setMinSalary} minSalary={minSalary} />
                        <ResetFilers setMinSalary={setMinSalary} setMinexp={setMinexp} setLocation={setLocation} setSearchTerm={setSearchTerm} />
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
