import React from 'react';
import JournalNavbar from '../../Components/JournalNavbar/JournalNavbar';
import JournalCarousel from "../../Components/JournalCarousel/JournalCarousel";
import './Index.css';
import AuthorCard from "../../Components/AuthorCard/AuthorCard";

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
                <main className="container-fluid authorRow">
                    <section className="container">
                        <div className="p-2"></div>
                        <div>
                            <h1 className="p-2">Staff Members</h1>
                            <div className="d-flex flex-wrap justify-content-around">
                                <div className="p-2 child">
                                    <AuthorCard name="Mihai Udrescu" title="Editor-in-Chief"
                                                description="Mihai Udrescu is a proffesor at Universitatea Politehnica Timisoara."/>
                                </div>
                                <div className="p-2 child">
                                    <AuthorCard name="Radu Marculescu" title="Associate Editor-in-Chief"
                                                description="Mihai Udrescu is a proffesor at Universitatea Politehnica Timisoara."/>
                                </div>
                                <div className="p-2 child">
                                    <AuthorCard name="Paul Bogdan" title="Associate Editor-in-Chief"
                                                description="Mihai Udrescu is a proffesor at Universitatea Politehnica Timisoara."/>
                                </div>
                                <div className="p-2 child">
                                    <AuthorCard name="Lucian Prodan" title="Associate Editor-in-Chief"
                                                description="Mihai Udrescu is a proffesor at Universitatea Politehnica Timisoara."/>
                                </div>
                            </div>
                        </div>
                        <div className="p-2"></div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-4 text-center align-self-center">
                                <h1>Editors</h1>
                            </div>

                            <div className="col-sm-6 col-lg-4 align-self-top">
                                <ul>
                                    <li>
                                        <p>Hitoshi Oi <span className="text-muted">University of Aizu Japan</span>
                                        </p>
                                    </li>
                                    <li>Jean Luca Tempesi <span className="text-muted">University of York UK</span></li>
                                    <li>Ioan Dumitrache <span className="text-muted">Universitatea Politehnica Bucuresti</span></li>

                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-4 align-self-top">
                                <ul>
                                    <li>Liviu Miclea <span className="text-muted">Universitatea Tehnica din Cluj Napoca</span></li>
                                    <li>Lucian Vintan <span className="text-muted">Universitatea "Lucian Blaga" din Sibiu</span></li>
                                    <li>Radu-Emil Precup <span className="text-muted">Universitatea Politehnica Timisoara</span></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="container-fluid">
                </footer>
            </div>
        );
    }
}

export default IndexPage;
