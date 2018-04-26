import React, { Component } from 'react';
import { Nav, NavItem, ButtonToolbar, Dropdown, MenuItem, Glyphicon, NavDropdown } from 'react-bootstrap';

import logo from '../logo.svg';
import './Header.css';

export default class Header extends Component {

  renderWeb() {
      return (
          <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
          
            <h1 className="Header-title">Computer Languages</h1>

            <Nav bsStyle="pills" >
                <NavItem eventKey={1} href="/">
                Home
                </NavItem>
                <NavDropdown eventKey="2" title="About" id="nav-dropdown">
                    <MenuItem eventKey="2.1">About React</MenuItem>
                    <MenuItem eventKey="2.2">About Angular</MenuItem>
                    <MenuItem eventKey="2.3">About Python</MenuItem>
                </NavDropdown>
                <NavItem eventKey={3} href="/">
                Contact
                </NavItem>
            </Nav>
        </header>
      )
  }
  
  renderMobile() {
      return (
          <header className="Header-mobile">
              <div className="Header-mobile-nav">
                <ButtonToolbar>
                    <Dropdown id="dropdown-custom-1">
                        <Dropdown.Toggle>
                            Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <MenuItem eventKey="1">Home</MenuItem>
                            <Nav bsStyle="pills" stacked>
                                <NavDropdown eventKey="2" title="About" id="nav-dropdown">
                                    <MenuItem eventKey="2.1">About React</MenuItem>
                                    <MenuItem eventKey="2.2">About Angular</MenuItem>
                                    <MenuItem eventKey="2.3">About Python</MenuItem>
                                </NavDropdown>
                            </Nav>                         
                            <MenuItem eventKey="3">Contact</MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonToolbar>

                <img src={logo} className="Header-logo" alt="logo" />

                <Glyphicon glyph="search" />
            </div>
             <h1 className="Header-title">Computer Languages</h1>
            </header>
      )
  }

  
  render() {

    const { width } = this.props;
    const isMobile = width <= 500;

    return (

        isMobile? this.renderMobile() : this.renderWeb()

    );
  }
}

