import React, { Fragment } from 'react';
import { Paper } from '@mui/material';
import { RiTeamLine } from 'react-icons/ri';

import './style/sidebar.scss';

const SidebarComponent = () => {
    return (
        <Fragment>
            <Paper className={`sidebarContainer`}>
                <ul className={`shortSidebar no-list-style padding0`}>
                    <li><RiTeamLine/></li>
                </ul>
            </Paper>
        </Fragment>
    );
};

export default SidebarComponent;