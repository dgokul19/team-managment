import React, { Fragment } from 'react';
import Header from '../common/Header';
import Gameroom from '../gameRoom/Gameroom';
import { cardSeries } from '../../util/constants';
import './home.scss';

const DashboardComponent = () => {
    return (
        <Fragment>
            <div className={`appCotainer`}>
                <Header />
                {/* <Gameroom /> */}
            </div>
        </Fragment>
    );
};

export default DashboardComponent;