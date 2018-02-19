import React, {Fragment} from 'react';
import JournalCarousel from "./JournalCarousel/JournalCarousel";
import AuthorRow from "./AuthorRow/AuthorRow";
import StatisticsRow from "./StatisticsRow/StatisticsRow";

import './Index.css';

class IndexPage extends React.Component {
    render() {
        return (
            <Fragment>
                <header className="container-fluid">
                    <JournalCarousel/>
                </header>
                <main>
                    <div className="container-fluid py-5">
                        <div className="container">
                            <h1>
                                IEEE Transactions on Computers
                            </h1>
                            <p>

                                IEEE Transactions on Computers (TC) is a monthly publication that publishes
                                research in
                                such areas as computer organizations and architectures, digital devices,
                                operating
                                systems, and new and important applications and trends.
                                Will style later.</p>
                        </div>
                    </div>
                    <AuthorRow/>
                    <StatisticsRow/>
                </main>
            </Fragment>
        );
    }
}

export default IndexPage;
