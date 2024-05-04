import { useEffect, useState } from 'react';
import axios, { Canceler } from 'axios';

export interface Job {
    jdUid: string;
    jdLink?: string | null;
    jobDetailsFromCompany?: string | null;
    maxJdSalary?: number | string | null;
    minJdSalary?: number | string | null;
    salaryCurrencyCode?: string | null;
    location?: string | null;
    minExp?: number | null;
    maxExp?: number | null;
    jobRole?: string | null;
    companyName: string;
    logoUrl?: string | null;
}

export default function useJobSearch(pageNumber?: number) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel: Canceler;

        const fetchData = async () => {
            try {
                const response = await axios.post(
                    'https://api.weekday.technology/adhoc/getSampleJdJSON',
                    { limit: 9, offset: pageNumber },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        cancelToken: new axios.CancelToken(c => (cancel = c)),
                    },
                );

                setJobs(prevJobs => {
                    const newJobs = response.data.jdList.map((jd: Job) => jd);
                    return pageNumber && pageNumber > 1 ? [...prevJobs, ...newJobs] : newJobs;
                });

                setHasMore(response.data.totalCount > (pageNumber || 9));
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) return;
                setError(true);
            }
        };

        fetchData();

        return () => {
            if (cancel) cancel();
        };
    }, [pageNumber]);

    return { loading, error, jobs, hasMore, setLoading, setError, setJobs, setHasMore };
}
