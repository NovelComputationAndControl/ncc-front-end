import React from 'react'
import "./JournalFooter.css"

class JournalFooter extends React.Component {
    render() {
        return (
            <footer className="container-fluid footer">
                <section className="d-flex flex-row">
                    <div className="flex-column p-5 w-50">
                        <h2>Novel</h2>
                        <h2>Computation &</h2>
                        <h2>Control</h2>
                        <p></p>
                        <p>Bulevardul Vasile Pârvan 2, <b>Timișoara</b> 300223</p>
                        <p><b>Tel:</b> <a href="tel:777-7777-7777">777-7777-7777</a> </p>
                    </div>
                    <div className="flex-column p-5 w-25">
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Homepage</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Univeristatea Politehnica Timisoara</a></li>
                            <li><a href="#">Submission Guidelines</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex-column p-5 w-25">
                        <h5>Legal</h5>
                        <ul className="align-self-start list-unstyled">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </section>
                <hr/>
                <section className="text-center copyright">
                    <p>© {(new Date().getFullYear())} Novel Computation & Control.</p>
                </section>
            </footer>
        )
    }
}

export default JournalFooter