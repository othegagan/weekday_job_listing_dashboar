import Jobs from '@/components/Jobs';
import { Suspense } from 'react';

export default function Home() {
    return (
        <div className='py-4'>
            <Suspense>
                <Jobs />
            </Suspense>
        </div>
    );
}
