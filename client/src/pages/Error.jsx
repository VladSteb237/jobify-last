import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Wrappers from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    if (error.status === 404) {
        return (
            <Wrappers>
                <div>
                    <img src={img} alt="not found" />
                    <h2>Ohh! page not found</h2>
                    <p>
                        We can't seem to find the page you're looking for
                    </p>
                    <Link to='/'>back home page</Link>
                </div>
            </Wrappers>
        );
    }
    return (
        <Wrappers>
            <div>
                <h3>something went wrong</h3>
            </div>
        </Wrappers>
    );
};

export default Error;
