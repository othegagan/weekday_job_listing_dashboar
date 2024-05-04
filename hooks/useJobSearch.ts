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

export default function useBookSearch(pageNumber: number) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel: Canceler;

        let headersList = {
            'Content-Type': 'application/json',
        };

        let bodyContent = JSON.stringify({
            limit: 9,
            offset: pageNumber,
        });

        let reqOptions = {
            url: 'https://api.weekday.technology/adhoc/getSampleJdJSON',
            method: 'POST',
            headers: headersList,
            data: bodyContent,
            cancelToken: new axios.CancelToken(c => (cancel = c)),
        };

        axios
            .request(reqOptions)
            .then(res => {
                setJobs((preJobs: Job[]) => {
                    return [...preJobs, ...res.data.jdList.map((jd: Job) => jd)];
                });
                setHasMore(res.data.totalCount > pageNumber);
                setLoading(false);
            })
            .catch(e => {
                if (axios.isCancel(e)) return;
                setError(true);
            });
        return () => cancel();
    }, [pageNumber]);

    return { loading, error, jobs, hasMore };
}
