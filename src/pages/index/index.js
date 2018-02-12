import React from 'react';
import JournalNavbar from '../../components/journalNavbar/journalNavbar';
import JournalCarousel from "../../components/journalCarousel/journalCarousel";
import './index.css';
import AuthorCard from "../../components/authorCard/authorCard";
import JournalFooter from "../../components/journalFooter/journalFooter";

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
                                                    description="Universitatea Politehnica Timisoara."
                                                    twitter="rmarculescu" website="https://peerj.com/rmarculescu/"
                                        />
                                    </div>
                                    <div className="p-2 child">
                                        <AuthorCard name="Paul Bogdan" title="Associate Editor-in-Chief"
                                                    description="Universitatea Politehnica Timisoara."
                                                    website="https://viterbi.usc.edu/directory/faculty/Bogdan/Paul"/>
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
