import React, { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';
import { Job } from '@/hooks/useJobSearch';
import { toTitleCase } from '@/lib/utils';
import { Clock3, Zap } from 'lucide-react';
import Desc from './ui/desc';

interface JobCardProps {
    jobData: Job;
}

const JobCard = forwardRef<HTMLDivElement, JobCardProps>(({ jobData }, ref) => {
    return (
        <Card ref={ref} className='flex  flex-col gap-2 p-4 hover:shadow-md ' style={{ height: 'min-content' }}>
            <div className='flex w-full items-center justify-between'>
                <div className='flex w-fit items-center gap-2 rounded-md border px-2 py-1 text-xs tracking-tight'>
                    <Clock3 className='size-3' /> Posted{' '}
                    {(() => {
                        const days = Math.floor(Math.random() * 10 + 1);
                        return `${days} day${days > 1 ? 's' : ''} ago`;
                    })()}
                </div>

                {jobData.minExp && jobData.minExp > 0 && (
                    <div className='flex w-fit items-center gap-2 rounded-md border px-2 py-1 text-xs tracking-tight'> Min {jobData.minExp} years exp req.</div>
                )}
            </div>

            <div className='flex items-center gap-2'>
                <div className='relative size-14 overflow-clip rounded-md'>
                    <img src={jobData.logoUrl || ''} className='absolute top-0 h-full w-full object-cover' alt={jobData.companyName} />
                </div>

                <div className='flex flex-col'>
                    <div className=' text-xs font-medium uppercase tracking-widest text-muted-foreground '> {jobData.companyName}</div>
                    <div className='text-lg font-semibold'> {toTitleCase(jobData.jobRole || '')}</div>
                    <div className=' text-xs font-medium capitalize'> {jobData.location}</div>
                </div>
            </div>

            <p>
                Estimated Salary :
                <span className='font-semibold'>
                    {jobData.minJdSalary && jobData.maxJdSalary
                        ? ` ${jobData.minJdSalary}K - ${jobData.maxJdSalary}K ${jobData.salaryCurrencyCode ? ' ' + jobData.salaryCurrencyCode.toUpperCase() + '✅' : ''}`
                        : ' Salary not disclosed ❌'}
                </span>
            </p>

            <h5>About Company:</h5>
            <Desc data={jobData.jobDetailsFromCompany || ''} />

            <CardFooter className='mt-2 grid grid-cols-1 gap-2.5 p-0'>
                <Button variant='apply' className='flex items-center gap-2 font-semibold'>
                    <Zap className='size-4 ' /> Ease Apply
                </Button>
                <Button variant='unlock' className='flex items-center gap-2'>
                    <span className='relative size-5 overflow-clip rounded-full '>
                        <img src='https://avatars.githubusercontent.com/u/124599?v=4' className='absolute top-0 h-full w-full object-cover blur-[1px]' alt='' />
                    </span>
                    <span className='relative size-5 overflow-clip rounded-full '>
                        <img src='https://avatars.githubusercontent.com/u/124599?v=4' className='absolute top-0 h-full w-full object-cover blur-[1px]' alt='' />
                    </span>
                    <span className='font-normal'>Unlock referral asks</span>
                </Button>
            </CardFooter>
        </Card>
    );
});

export default JobCard;
