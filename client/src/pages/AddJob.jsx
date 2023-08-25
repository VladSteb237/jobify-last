import React from 'react';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/jobs', data);
        toast.success('Job created successfully');
        return redirect('all-jobs');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const AddJob = () => {
    const { user } = useOutletContext();

    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>Добавить работу</h4>
                <div className='form-center'>
                    <FormRow type='text' name='position' labelText='Должность' />
                    <FormRow type='text' name='company' />
                    <FormRow
                        type='text'
                        name='jobLocation'
                        labelText='Job Location'
                        defaultValue={user.location}
                    />
                    <FormRowSelect
                        name='jobStatus'
                        labelText='Job Status'
                        defaultValue={JOB_STATUS.PENDING}
                        list={Object.values(JOB_STATUS)}
                    />
                    <FormRowSelect
                        name='jobType'
                        labelText='Job Type'
                        defaultValue={JOB_TYPE.FULL_TIME}
                        list={Object.values(JOB_TYPE)}
                    />
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper >
    );
};

export default AddJob;
