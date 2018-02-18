import React from 'react'
import AuthorCard from "../../../components/AuthorCard/AuthorCard";

const authorRow = () => {
    return (
        <section className="container-fluid authorRow">
            <div className="container">
                <div className="p-2"></div>
                <div>
                    <div>
                        <h2>Chief Editors</h2>
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
                                        description="Universitatea Politehnica Timisoara."
                                        website="http://www.acsa.upt.ro/about_us/lucian_prodan.htm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default authorRow;