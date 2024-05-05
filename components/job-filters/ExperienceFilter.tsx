'use client';

export default function ExperienceFilter({ setMinexp, minexp }: { setMinexp: (value: string) => void; minexp: string }) {
    const handleMinexpChange = (value: string) => {
        setMinexp(value);
    };

    return (
        <>
            <div className='flex flex-col gap-4 rounded-md border border-dotted border-input px-3 py-1'>
                <div className='flex items-center gap-3 text-sm'>
                    Experience
                    <select
                        className='w-[100px] rounded-md border border-input px-2 py-1 text-xs'
                        name='minexp'
                        id='minexp'
                        value={minexp}
                        onChange={e => handleMinexpChange(e.target.value)}>
                        {Array.from({ length: 10 }, (_, num) => (
                            <option key={num} value={num.toString()}>
                                {num} {num === 1 ? 'year' : 'years'}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}
