import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';
import { Job } from '@/hooks/useJobSearch';
import { Clock3, Zap } from 'lucide-react';

interface JobCardProps {
    jobData: Job;
}

export function JobCard({ jobData }: JobCardProps) {
    return (
        <Card className='flex min-w-[350px] flex-col gap-2 p-4 hover:shadow-md '>
            <div className='flex w-fit items-center gap-2 rounded-md border px-2 py-1 text-xs tracking-tight'>
                <Clock3 className='size-3' /> Posted 10 days ago
            </div>

            <div className='flex items-center gap-2'>
                <div className='relative size-12 overflow-clip rounded-md bg-green-400'>
                    <img src='https://avatars.githubusercontent.com/u/124599?v=4' className='absolute top-0 h-full w-full object-cover' alt='' />
                </div>

                <div className='flex flex-col'>
                    <div className=' text-muted-foreground text-xs font-medium uppercase tracking-widest '> Job Desc</div>
                    <div className='text-lg font-semibold'> Job Desc</div>
                    <div className=' text-xs font-medium  '> Job Desc</div>
                </div>
            </div>

            <p>
                Estimated Salary : <span className='font-semibold'> $ 18 -35 LPA </span>✅
            </p>

            <h5>About Company:</h5>
            <p className='truncate text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident nostrum omnis recusandae commodi qui distinctio corporis, pariatur
                sunt, dolores similique tempora aut accusamus quasi id cumque nihil voluptatum mollitia, laboriosam laudantium. Nihil quibusdam, doloremque
                fugit repellat facilis tempora velit vero, libero nesciunt totam expedita impedit voluptatibus veniam consequuntur sunt?
            </p>
            <CardFooter className='grid grid-cols-1 gap-2.5 p-0'>
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
}
