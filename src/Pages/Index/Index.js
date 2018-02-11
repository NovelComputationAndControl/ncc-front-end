import React from 'react';
import JournalNavbar from '../../Components/JournalNavbar/JournalNavbar';
import JournalCarousel from "../../Components/JournalCarousel/JournalCarousel";
import './Index.css';

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
                <main className="container">
                    <div className="row">
                        {/*<h1>Main Content</h1>*/}
                    </div>
                </main>
                <footer className="container-fluid">
                    {/*<h1>Footer Content</h1>*/}
                </footer>
            </div>
        );
    }
}

export default IndexPage;
