export const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent`;

function CardSkeleton() {
    return (
        <div className='col-span-4 space-y-4 lg:col-span-1'>
            <div className={`relative h-[167px] rounded-xl bg-neutral-200 ${shimmer}`} />

            <div className='h-4 w-full rounded-lg bg-neutral-200' />
            <div className='h-6 w-1/3 rounded-lg bg-neutral-200' />
        </div>
    );
}

interface CardSkeletonProps {
    className?: string;
    columns?: string;
    count?: string;
}

export function CardsSkeleton({ className, columns, count }: CardSkeletonProps) {
    return (
        <div className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-${columns || 3}   xl:gap-x-8 ${className}`}>
            {Array.from({ length: Number(count || 5) }).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </div>
    );
}
