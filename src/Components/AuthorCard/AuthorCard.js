import React from 'react'
import "./AuthorCard.css"

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import UnknownImage from './unknown.jpg'

class AuthorCard extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <CardImg className="hidden-sm-down" top
                             src={ this.props.image || UnknownImage }
                             alt={ this.props.name + "'s photo" }/>
                    <CardBody>
                        <CardTitle className="text-center">{this.props.name}</CardTitle>
                        <CardSubtitle className="text-center font-weight-bold">{this.props.title}</CardSubtitle>
                        <CardText className="text-justify text-center">{this.props.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default AuthorCard;
