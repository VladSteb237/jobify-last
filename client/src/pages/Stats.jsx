import React from 'react';
import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
    try {
        const response = await customFetch('/jobs/stats');
        return response.data;
    } catch (error) {
        return error;
    }
};

const Stats = () => {
    const { defaultStats, monthlyApplications } = useLoaderData();
    return (
        <React.Fragment>
            <StatsContainer defaultStats={defaultStats} />
            {
                monthlyApplications?.length > 1 && (<ChartsContainer data={monthlyApplications} />
                )}
        </React.Fragment>
    );
};

export default Stats;
