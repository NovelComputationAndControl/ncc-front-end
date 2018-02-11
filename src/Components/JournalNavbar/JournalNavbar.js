import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './JournalNavbar.css';

class JournalNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header>
                <Navbar color="red" light expand="md">
                    <NavbarBrand href="/">Novel Computation & Control</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            {/*For sections*/}
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/journal/">Journal</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/issues/">Issues</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/guidelines/">Guidelines</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/account/">Account</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default JournalNavbar;
