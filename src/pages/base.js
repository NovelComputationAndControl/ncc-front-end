import React from 'react';
import Layout from "../components/Layout/Layout";
import {Route} from 'react-router-dom';
import IndexPage from "./Index/Index";

class Base extends React.Component {
    render() {
        return (
            <Layout>
                <Route path="/" component={IndexPage}/>
            </Layout>
        );
    }
}

export default Base;
