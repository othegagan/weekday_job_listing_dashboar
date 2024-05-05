'use client';

export default function MinSalaryFilter({ setMinSalary, minSalary }: { setMinSalary: (minSalary: string) => void; minSalary: string }) {
    const handleMinSalaryChange = (value: string) => {
        setMinSalary(value);
    };

    return (
        <div className='flex flex-col gap-4 rounded-md border border-dotted border-input px-3 py-1'>
            <div className='flex items-center gap-3 text-sm'>
                Min Salary
                <select
                    className='w-[100px] rounded-md border border-input px-2 py-1 text-xs'
                    name='minexp'
                    id='minexp'
                    value={minSalary}
                    onChange={e => handleMinSalaryChange(e.target.value)}>
                    {Array.from({ length: 10 }, (_, num) => (
                        <option key={num + 1} value={((num + 1) * 10).toString()}>
                            {(num + 1) * 10} K
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
