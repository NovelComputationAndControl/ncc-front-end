import React from 'react';
import JournalNavbar from '../../containers/JournalNavbar/JournalNavbar';
import JournalCarousel from "../../containers/JournalCarousel/JournalCarousel";
import './Index.css';
import JournalFooter from "../../components/JournalFooter/JournalFooter";
import AuthorRow from "../../components/AuthorRow/AuthorRow";
import StatisticsRow from "../../components/StatisticsRow/StatisticsRow";

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <JournalNavbar/>
                </div>
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

                                IEEE Transactions on Computers (TC) is a monthly publication that publishes research in
                                such areas as computer organizations and architectures, digital devices, operating
                                systems, and new and important applications and trends.
                                Will style later.</p>
                        </div>
                    </div>
                    <AuthorRow/>
                    <StatisticsRow/>
                </main>
                <JournalFooter/>
            </div>
        );
    }
}

export default IndexPage;
