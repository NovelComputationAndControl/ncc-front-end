import React from 'react'
import "./AuthorCard.css"

import Icon from 'react-icons-kit';
import {twitter} from 'react-icons-kit/fa/twitter';
import {globe} from 'react-icons-kit/fa/globe';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const authorCard = (props) => {
    let authorImage = null;
    let twitterIcon = null;
    let websiteIcon = null;

    if (props.image) {
        authorImage = <CardImg className="hidden-sm-down" top
                               src={props.image}
                               alt={props.name + "'s photo"}/>
    }

    if (props.twitter) {
        twitterIcon = <a href={"https://twitter.com/" + props.twitter} target="_blank">
            <Icon size={32} icon={twitter}/>
        </a>
    }

    if (props.website) {
        websiteIcon = <a href={props.website} target="_blank">
            <Icon size={32} icon={globe}/>
        </a>
    }

    return (
        <div className="author-card">
            <Card>
                {authorImage}
                <CardBody>
                    <CardTitle className="text-center">{props.name}</CardTitle>
                    <CardSubtitle className="text-center font-weight-bold">{props.title}</CardSubtitle>
                    <CardText className="text-justify text-center">{props.description}</CardText>
                    <div className="text-center">
                        {websiteIcon}
                        {twitterIcon}
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default authorCard;
