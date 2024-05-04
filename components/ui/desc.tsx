import { useState } from 'react';
import { Button } from './button';

export default function Desc({ data }: { data: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='relative flex flex-col items-center justify-center'>
            <p className={`${isExpanded ? '' : 'line-clamp-6'} text-xs `}>{data}</p>
            {isExpanded ? (
                <Button onClick={toggleExpansion} variant='outline' size='sm' className='mt-1'>
                    {isExpanded ? 'View Less' : 'View More'}
                </Button>
            ) : (
                <div className='absolute bottom-0 left-1/2 flex  w-full  -translate-x-1/2 transform items-center justify-center bg-gradient-to-b from-transparent to-white text-xs '>
                    <Button onClick={toggleExpansion} variant='outline' size='sm' className='-mt-1.5'>
                        {isExpanded ? 'View Less' : 'View More'}
                    </Button>
                </div>
            )}
        </div>
    );
}
