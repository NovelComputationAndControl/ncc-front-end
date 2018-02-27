import React from 'react'
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

import Icon from 'react-icons-kit';
import {envelop} from 'react-icons-kit/icomoon/envelop';
import {phone} from 'react-icons-kit/icomoon/phone';
import ContactCard from "../../components/ContactCard/ContactCard";


class ContactPage extends React.Component {

    render() {
        return (
            <div id="top">
                <div className="container pt-5">
                    <header>
                        <h1>Contact Us</h1>
                        <p>If you have any question or just want to talk, don't hesitate to contact us!</p>
                    </header>
                    <section className="d-flex flex-wrap py-5">
                        <ContactCard title="Main office" description="The main office of the journal"
                                     telephone="777-777-7777" email="name@example.com"/>
                        <ContactCard title="Editor In-Chief" description="Contact the Editor in-Chief of the Journal"
                                     telephone="777-777-7777" email="name@example.com"/>
                        <ContactCard title="Development Team" description="Contact the development team"
                                     telephone="777-777-7777" email="name@example.com"/>
                    </section>
                </div>
                <section>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.6525220148856!2d21.2266823017737!3d45.748111841716586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x255d397f5edeea71!2sFaculty+of+Computer+Science!5e0!3m2!1sen!2sro!4v1519766098981"
                        width="100%" height="350">
                    </iframe>
                </section>
            </div>
        );
    }
}

export default ContactPage;