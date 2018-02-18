import React from 'react'
import CountUp from 'react-countup';

const statisticsRow = (props) => {
    return (
        <section className="section-statstics container-fluid">
            <div className="container p-5">
                <div className="d-flex flex-wrap justify-content-around">
                    <div className="text-center">
                        <CountUp
                            className="count-number d-block"
                            start={0}
                            end={1200}
                            duration={4}
                            useEasing={true}
                            useGrouping={true}
                        />
                        <p><span role="img" aria-label="University hat">🎓</span> Papers Submitted
                            <span role="img" aria-label="University hat">🎓</span>
                        </p>
                        <button className="btn btn-success">Submit a paper</button>
                    </div>

                    <div className="text-center">
                        <CountUp
                            className="count-number d-block"
                            start={0}
                            end={200}
                            duration={5}
                            useEasing={true}
                            useGrouping={true}
                        />
                        <p><span role="img" aria-label="cool emoji">😎</span> Registered Researchers
                            <span role="img" aria-label="cool emoji">😎</span></p>
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="text-center">
                        <CountUp
                            className="count-number d-block"
                            start={0}
                            end={1}
                            duration={6}
                            useEasing={true}
                            useGrouping={true}
                        />
                        <p><span role="img" aria-label="red book">📕</span> Issues Published
                            <span role="img" aria-label="red book">📕</span></p>
                        <button className="btn btn-danger">View Issues</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default statisticsRow;