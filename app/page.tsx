import Jobs from '@/components/Jobs';
import { Suspense } from 'react';

export default function Home() {
    return (
        <Suspense>
            <Jobs />
        </Suspense>
    );
}
