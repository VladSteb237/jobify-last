import React from 'react';
import { Link, Form, redirect, useActionData, useNavigate } from 'react-router-dom';
import Wrappers from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = { msg: '' };
    if (data.password.length < 3) {
        errors.msg = 'password must be at least 5 characters';
        return errors;
    }
    try {
        await customFetch.post('/auth/login', data);
        toast.success('Login successful');
        return redirect('/dashboard');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        //errors.msg = error.response.data.msg;
        //return errors;
        return error;
    }
};

const Login = () => {
    const errors = useActionData();
    const navigate = useNavigate();
    const loginDemoUser = async () => {
        const data = {
            email: "test@test.com",
            password: "secret123",
        }
        try {
            await customFetch.post('/auth/login', data);
            toast.success('Take a test drive!');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error?.response?.data?.msg);
        }
    };
    return (
        <Wrappers>
            <Form method='post' className='form'>
                <Logo />
                <h4>Login</h4>
                {errors?.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}
                <p></p>
                <FormRow type='email' name='email' />
                <FormRow type='password' name='password' />
                <SubmitBtn formBtn />
                <button className='btn btn-block' onClick={loginDemoUser}>
                    explore the app
                </button>
                <p>
                    Not a member yet?
                    <Link to='/register' className='member-btn'>
                        Register
                    </Link>
                </p>
            </Form>
        </Wrappers>
    );
};

export default Login;