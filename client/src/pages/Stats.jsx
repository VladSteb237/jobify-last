import React from 'react';
import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const statsQuery = {
    queryKey: ['stats'],
    queryFn: async () => {
        const response = await customFetch('/jobs/stats');
        return response.data;
    }
}

export const loader = (queryClient) => async () => {
    const data = await queryClient.ensureQueryData(statsQuery);
    return data;
};

const Stats = () => {
    //const { defaultStats, monthlyApplications } = useLoaderData();
    const { data } = useQuery(statsQuery);
    const { defaultStats, monthlyApplications } = data;

    return (
        <React.Fragment>
            <StatsContainer defaultStats={defaultStats} />
            {
                monthlyApplications?.length > 1 && (
                    <ChartsContainer data={monthlyApplications} />
                )}
        </React.Fragment>
    );
};

export default Stats;
