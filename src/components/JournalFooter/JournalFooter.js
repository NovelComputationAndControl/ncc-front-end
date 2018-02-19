import React from 'react'
import "./JournalFooter.css"
import {HashLink as Link} from 'react-router-hash-link';

const journalFooter = (props) => {
    return (
        <footer className="container-fluid footer">
            <section className="d-flex flex-row flex-wrap">
                <div className="child-40 flex-column p-5 ">
                    <h2>Novel</h2>
                    <h2>Computation &</h2>
                    <h2>Control</h2>
                    <p></p>
                    <p>Bulevardul Vasile Pârvan 2, <b>Timișoara</b> 300223</p>
                    <p><b>Tel:</b> <a href="tel:777-7777-7777">777-7777-7777</a></p>
                </div>
                <div className="child-30 flex-column p-5 ">
                    <h5>About Us</h5>
                    <ul className="list-unstyled">
                        <li><Link to={{pathname: "/", hash: "top"}}>Homepage</Link></li>
                        <li><Link to={{
                            pathname: "about_us",
                            hash: "top",
                        }}>About Us</Link></li>
                        <li><a href="https://www.upt.ro/">Univeristatea Politehnica Timisoara</a></li>
                        <li><Link to="/guidelines">Submission Guidelines</Link></li>
                        <li><a href="https://github.com/NovelComputationAndControl"
                               target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="child-20 flex-column p-5 ">
                    <h5>Legal</h5>
                    <ul className="align-self-start list-unstyled">
                        <li><Link to="/policy">Privacy Policy</Link></li>
                        <li><Link to="/policy">Cookie Policy</Link></li>
                    </ul>
                </div>
            </section>
            <hr/>
            <section className="text-center copyright">
                <p>© {(new Date().getFullYear())} Novel Computation & Control.</p>
            </section>
        </footer>
    )
};

export default journalFooter