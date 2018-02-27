import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import JournalNavbar from '../components/JournalNavbar/JournalNavbar'
import JournalFooter from '../components/JournalFooter/JournalFooter'
import {BrowserRouter, Switch} from 'react-router-dom';
import IndexPage from "./Index/Index";
import AboutPage from "./About/About"
import ContactPage from "./Contact/Contact"

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
                            <Route path="/about-us" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
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
