import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default HomeLayout;
