import React, { Fragment } from 'react';
import Header from '../common/Header';

import { cardSeries } from '../../util/constants';

const Gameroom = () => {
    return (
        <Fragment>
            <div className={`contentBox relative`}>
                <div className={`scrumTableContainer`}>
                    <div className={`tableElem center-top-table`}>
                        <div className={`lonelyQuote`}>
                            <p>Create your team now !!</p>
                            <h5>Invite Members</h5>
                        </div>
                    </div>
                    <div className={`tableElem left-side-table`}></div>
                    <div className={`tableElem scrumTable center-middle-table`}>
                        <p>Pick your card!!</p>
                    </div>
                    <div className={`tableElem center-bottom-table`}>
                        <div className={`cardContainer`}>
                            <div className={`cardElement selected`}><span>3</span></div>
                            <div className={`cardName`}>Gokul</div>
                        </div>
                    </div>
                    <div className={`tableElem right-side-table`}></div>
                </div>
                <div className={`cardPointersContainer`}>
                    <h4>Select your card...</h4>
                    <div className={`cardRows`}>
                        {
                            cardSeries.fibonacci.map(element => {
                                return (
                                    <div key={element} className={`cardContainer`}>
                                        <div className={`cardElement`}>{element}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Gameroom;