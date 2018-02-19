import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import JournalNavbar from '../components/JournalNavbar/JournalNavbar'
import JournalFooter from '../components/JournalFooter/JournalFooter'
import {BrowserRouter, Switch} from 'react-router-dom';
import IndexPage from "./Index/Index";
import AboutPage from "./About/About"

class Base extends React.Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Fragment>
                        <div className="container">
                            <JournalNavbar/>
                        </div>
                        <Switch>
                            <Route path="/about_us" component={AboutPage}/>
                            <Route path="/" component={IndexPage}/>
                        </Switch>
                        <JournalFooter/>
                    </Fragment>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default Base;
