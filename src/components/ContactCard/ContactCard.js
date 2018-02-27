import React from 'react'
import {phone} from "react-icons-kit/icomoon/phone";
import {envelop} from "react-icons-kit/icomoon/envelop";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Icon} from "react-icons-kit";

class ContactCard extends React.Component {
    render() {
        let telephone = null;
        let email = null;

        if (this.props.telephone) {
            telephone =
                <p><Icon className="mx-2" icon={phone}/><a href={"tel:" + this.props.telephone}>{this.props.telephone}</a>
                </p>
        }

        if (this.props.email) {
            email =
                <p><Icon className="mx-2" icon={envelop}/><a href={"mailto:" + this.props.email}>{this.props.email}</a>
                </p>
        }

        return (
            <Card className="p-2 mx-2 child">
                <CardBody>
                    <CardTitle className="text-center">{this.props.title}</CardTitle>
                    <CardSubtitle className="text-center font-weight-bold">
                        {this.props.description}
                    </CardSubtitle>
                    <CardText className="text-justify pt-3">
                        {telephone}
                        {email}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

export default ContactCard;