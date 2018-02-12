import React from 'react';
import JournalNavbar from '../../Components/JournalNavbar/JournalNavbar';
import JournalCarousel from "../../Components/JournalCarousel/JournalCarousel";
import './Index.css';
import AuthorCard from "../../Components/AuthorCard/AuthorCard";
import JournalFooter from "../../Components/JournalFooter/JournalFooter";

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
                    <section className="container-fluid authorRow">
                        <div className="container">
                            <div className="p-2"></div>
                            <div>
                                <div className="text-center">
                                    <a href="/about"><h2>Editorial Board</h2></a>
                                </div>
                                <div className="d-flex flex-wrap justify-content-around">
                                    <div className="p-2 child">
                                        <AuthorCard name="Mihai Udrescu" title="Editor-in-Chief"
                                                    description="Universitatea Politehnica Timisoara."
                                                    website="https://peerj.com/MUdrescu/" twitter="MihaiUdrescu"
                                        />
                                    </div>
                                    <div className="p-2 child">
                                        <AuthorCard name="Radu Marculescu" title="Associate Editor-in-Chief"
                                                    description="Universitatea Politehnica Timisoara."/>
                                    </div>
                                    <div className="p-2 child">
                                        <AuthorCard name="Paul Bogdan" title="Associate Editor-in-Chief"
                                                    description="Universitatea Politehnica Timisoara."/>
                                    </div>
                                    <div className="p-2 child">
                                        <AuthorCard name="Lucian Prodan" title="Associate Editor-in-Chief"
                                                    description="Universitatea Politehnica Timisoara."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <JournalFooter/>
            </div>
        );
    }
}

export default IndexPage;
