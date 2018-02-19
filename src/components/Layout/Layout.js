import React, {Fragment} from 'react';
import JournalNavbar from '../JournalNavbar/JournalNavbar'
import JournalFooter from '../JournalFooter/JournalFooter'
import {BrowserRouter} from 'react-router-dom';

const layout = (props) => {
    return (
        <Fragment>
            <div className="container">
                <JournalNavbar/>
            </div>
            <BrowserRouter>
                <Fragment>
                    {props.children}
                </Fragment>
            </BrowserRouter>
            <JournalFooter/>
        </Fragment>
    );
};

export default layout;