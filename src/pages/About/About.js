import React from 'react';
import AuthorCard from '../../components/AuthorCard/AuthorCard'

class AboutPage extends React.Component {

    render() {
        return (
            <main className="container py-5">
                <article>
                    <header>
                        <h1 id="heading">About Publications</h1>
                    </header>

                    <p>IEEE Computer Society produces peer-reviewed, technical journals, magazines, books, and
                        conference
                        publications, in addition to online courses, certification programs, conferences, career
                        development
                        services, and networking opportunities. IEEE Computer Society publications are led and governed
                        by
                        the Publications Board, which includes operations committees for each publishing line.</p>
                    <h2>Editorial Board</h2>
                    <div className="d-flex flex-wrap justify-content-around">
                        <div className="p-1 child">
                            <AuthorCard name="Mihai Udrescu" title="Editor-in-Chief"
                                        description="Universitatea Politehnica Timisoara."
                                        website="https://peerj.com/MUdrescu/" twitter="MihaiUdrescu"
                            />
                        </div>
                        <div className="p-1 child">
                            <AuthorCard name="Radu Marculescu" title="Associate Editor-in-Chief"
                                        description="Universitatea Politehnica Timisoara."
                                        twitter="rmarculescu" website="https://peerj.com/rmarculescu/"
                            />
                        </div>
                        <div className="p-1 child">
                            <AuthorCard name="Paul Bogdan" title="Associate Editor-in-Chief"
                                        description="Universitatea Politehnica Timisoara."
                                        website="https://viterbi.usc.edu/directory/faculty/Bogdan/Paul"/>
                        </div>
                        <div className="p-1 child">
                            <AuthorCard name="Lucian Prodan" title="Associate Editor-in-Chief"
                                        description="Universitatea Politehnica Timisoara."
                                        website="http://www.acsa.upt.ro/about_us/lucian_prodan.htm"
                            />
                        </div>

                        <div className="p-1 child">
                            <AuthorCard name="Hitoshi Oi" title="Editor"
                                        description="University of Aizu Japan."
                            />
                        </div>
                        <div className="p-1 child">
                            <AuthorCard name="Jean Luca Tempesi" title="Editor"
                                        description="University of York UK."
                            />
                        </div>
                        <div className="p-1 child">
                            <AuthorCard name="Ioan Dumitrache" title="Editor"
                                        description="Universitatea Politehnica Bucuresti."
                            />
                        </div>
                        <div className="p-1 child">
                            <AuthorCard name="Liviu Miclea" title="Editor"
                                        description="Universitatea Tehnica din Cluj Napoca."
                            />
                        </div>
                        <div className="p-1 child">
                            <AuthorCard name="Lucian Vintan" title="Editor"
                                        description='Universitatea "Lucian Blaga" din Sibiu.'
                            />
                        </div>  
                        <div className="p-1 child">
                            <AuthorCard name="Radu-Emil Precup" title="Editor"
                                        description="Universitatea Politehnica Timisoara."/>
                        </div>
                    </div>
                </article>

            </main>
    )
    }
    }

    export default AboutPage;