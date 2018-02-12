import React from 'react'
import "./authorCard.css"

import Icon from 'react-icons-kit';
import {twitter} from 'react-icons-kit/fa/twitter';
import {globe} from 'react-icons-kit/fa/globe';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class AuthorCard extends React.Component {
    render() {
        let authorImage = null;
        let twitterIcon = null;
        let websiteIcon = null;

        if (this.props.image) {
            authorImage = <CardImg className="hidden-sm-down" top
                                   src={this.props.image}
                                   alt={this.props.name + "'s photo"}/>
        }

        if (this.props.twitter) {
            twitterIcon = <a href={"https://twitter.com/" + this.props.twitter} target="_blank">
                <Icon size={32} icon={twitter}/>
            </a>
        }

        if (this.props.website) {
            websiteIcon = <a href={this.props.website} target="_blank">
                <Icon size={32} icon={globe}/>
            </a>
        }

        return (
            <div className="author-card">
                <Card>
                    {authorImage}
                    <CardBody>
                        <CardTitle className="text-center">{this.props.name}</CardTitle>
                        <CardSubtitle className="text-center font-weight-bold">{this.props.title}</CardSubtitle>
                        <CardText className="text-justify text-center">{this.props.description}</CardText>
                        <div className="text-center">
                            {websiteIcon}
                            {twitterIcon}
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default AuthorCard;
