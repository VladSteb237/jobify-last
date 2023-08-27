import React from 'react';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { JobsContainer, SearchContainer } from '../components';
import { useQuery } from '@tanstack/react-query';

const AllJobsContext = createContext();

const allJobsQuery = (params) => {
    const { search, jobType, jobStatus, sort, page } = params;
    return {
        queryKey: [
            'jobs',
            search ?? '',
            jobStatus ?? 'all',
            jobType ?? 'all',
            sort ?? 'newest',
            page ?? 1,
        ],
        queryFn: async () => {
            const { data } = await customFetch.get('/jobs', { params });
            return data;
        }
    }
};

export const loader = (queryClient) => async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    await queryClient.ensureQueryData(allJobsQuery(params));
    return { searchValues: { ...params }, };
};

const AllJobs = () => {
    const { searchValues } = useLoaderData();
    const { data } = useQuery(allJobsQuery(searchValues));
    return (
        <AllJobsContext.Provider value={{ data, searchValues }}>
            <SearchContainer />
            <JobsContainer />
        </AllJobsContext.Provider>
    );;
};;

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
