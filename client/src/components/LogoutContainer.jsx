import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
    const { user, logoutUser } = useDashboardContext();
    const [showLogout, setShowLogout] = useState(false);
    return (
        <Wrapper>
            <button className='btn logout-btn'
                onClick={() => setShowLogout(!showLogout)}
            >
                {
                    user.avatar ? (
                        <img src={user.avatar} alt="avatar" className='img' />
                    ) : (
                        <FaUserCircle />
                    )
                }
                {user?.name}
                <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                <button className='dropdown-btn' onClick={logoutUser}>
                    logout
                </button>
            </div>
        </Wrapper>
    );
};

export default LogoutContainer;
