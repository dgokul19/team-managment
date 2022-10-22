import React, { Fragment } from 'react';
import { Dialog, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Header from '../common/Header';
import './room.scss';

const CreateRoomModal = ({handleClose, openModal}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={openModal}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <p>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </p>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

export default CreateRoomModal;