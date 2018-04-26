import React, { Component } from 'react';
import { Nav, NavItem, ButtonToolbar, Dropdown, Glyphicon, MenuItem } from 'react-bootstrap';

import logo from '../logo.svg';
import './Header.css';

export default class Header extends Component {

  renderWeb() {
      return (
        <Nav bsStyle="pills" stacked >
            <NavItem eventKey={1} href="/home">
            Home
            </NavItem>
            <NavItem eventKey={2} href="/home">
            About
            </NavItem>
            <NavItem eventKey={3} href="/home">
            Contact
            </NavItem>
        </Nav>
      )
  }
  
  renderMobile() {
      return (
            <ButtonToolbar>
                <Dropdown noCaret>
                    <Dropdown.Toggle>
                        Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                        <MenuItem eventKey="1">Home</MenuItem>
                        <MenuItem eventKey="2">About</MenuItem>
                        <MenuItem eventKey="3">Contact</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
            </ButtonToolbar>
      )
  }

  
  render() {

    const { width } = this.props;
    const isMobile = width <= 500;

    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
          
            <h1 className="Header-title">Computer Languages</h1>

            {isMobile? this.renderMobile() : this.renderWeb()}
        </header>
    );
  }
}

