import React, { Fragment, useState } from 'react';
import Header from '../common/Header';
import CreateRoomModal from '../gameRoom/CreateRoomModal';
import Gameroom from '../gameRoom/Gameroom';
import { cardSeries } from '../../util/constants';
import './home.scss';

const DashboardComponent = () => {
    const [ openModal, setOpenModal ] = useState(true)
    const handleModalEvent = () => {
        setOpenModal(!openModal);
    }
    return (
        <Fragment>
            <div className={`appCotainer`}>
                <Header />
                <Gameroom openModal={openModal} handleModal={handleModalEvent}/>
            </div>
        </Fragment>
    );
};

export default DashboardComponent;