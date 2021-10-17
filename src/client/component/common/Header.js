import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import { AppBar, Toolbar } from '@mui/material';
import Logo from '../../assets/images/walmart-logo.png';

import SidebarComponent from './Sidebar';

import { findPath } from '../../util/helper';
import { routeNames } from '../../routes/routeConstants';
import './style/header.scss';

const HeaderComponent = () => {
    const { lastPath } = findPath(useLocation());
    return (
        <Fragment>
            <AppBar className={`headerBg`} position="static">
                <Toolbar className={`container`}>
                    <div className={`logoBx`}>
                        <img src={Logo} alt={`Walmart Logo`}/>
                    </div>
                </Toolbar>
            </AppBar>

            {(lastPath !== routeNames.HOME) && <SidebarComponent/>}
        </Fragment>
    );
};

export default HeaderComponent;