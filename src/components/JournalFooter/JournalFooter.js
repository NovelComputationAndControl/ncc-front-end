import React from 'react'
import "./JournalFooter.css"

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
                        <li><a href="/home">Homepage</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="https://www.upt.ro/">Univeristatea Politehnica Timisoara</a></li>
                        <li><a href="/guidelines">Submission Guidelines</a></li>
                        <li><a href="https://github.com/NovelComputationAndControl"
                               target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="child-20 flex-column p-5 ">
                    <h5>Legal</h5>
                    <ul className="align-self-start list-unstyled">
                        <li><a href="/policy">Privacy Policy</a></li>
                        <li><a href="/policy">Cookie Policy</a></li>
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