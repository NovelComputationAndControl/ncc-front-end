import React from 'react';
import JournalNavbar from '../../Components/JournalNavbar/JournalNavbar';
import JournalCarousel from "../../Components/JournalCarousel/JournalCarousel";
import './Index.css';
import AuthorCard from "../../Components/AuthorCard/AuthorCard";
import AuthorCircle from "../../Components/AuthorCircle/AutorCircle";

import MihaiImage from "./mihai.png";

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
                                    <AuthorCard image={MihaiImage} name="Mihai Udrescu" title="Editor-in-Chief"
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
                        <h2 className="p-2">Editors</h2>
                        <div className="d-flex flex-wrap justify-content-around">
                            <AuthorCircle name="Hitoshi Oi" university="University of Aizu, Japan"/>
                            <AuthorCircle name="Jean Luca Tempesi" university="University of York, UK"/>
                            <AuthorCircle name="Ioan Dumitrache" university="Universitatea Politehnica Bucuresti"/>
                            <AuthorCircle name="Liviu Miclea" university="Universitatea Tehnica din Cluj Napoca"/>
                            <AuthorCircle name="Lucian Vintan" university='Universitatea "Lucian Blaga" din Sibiu'/>
                            <AuthorCircle name="Radu-Emil Precup" university="Universitatea Politehnica Timisoara"/>
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
