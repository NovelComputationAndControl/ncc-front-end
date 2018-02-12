import React from 'react'
import './authorCircle.css'

class AutorCircle extends React.Component {
    render() {
        return (
            <div className="text-center align-self-center p-lg-4 p-md-2 p-sm-2">
                <h4>{this.props.name || "Radu-Emil Precup"}</h4>
                <h5 className="text-muted">
                    {this.props.university || "Universitatea Tehnica din Cluj Napoca"}
                </h5>
            </div>
        );
    }
}

export default AutorCircle