import React from 'react';
import JournalNavbar from '../../Components/JournalNavbar/JournalNavbar';
import JournalCarousel from "../../Components/JournalCarousel/JournalCarousel";
import './Index.css';

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <JournalNavbar/>
                <JournalCarousel/>

            </div>
        );
    }
}

export default IndexPage;
