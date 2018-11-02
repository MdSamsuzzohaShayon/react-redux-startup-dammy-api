import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavItem, Navbar, NavDropdown, Nav, MenuItem} from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Redux Project</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Very
      </NavItem>
                            <NavItem eventKey={2} href="#">
                                Besic
      </NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                Link Right
      </NavItem>
                            <NavItem eventKey={2} href="#">
                                Link Right
      </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
      </div>
        )
    }
}
