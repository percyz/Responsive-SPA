import React, { Component } from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';

export default class Footer extends Component {

  getNav(){
    return [
      {title: 'Home', content: ['Content', 'Content', 'Content', 'Content']},
      {title: 'Language', content: ['Content', 'Content', 'Content', 'Content']},
      {title: 'Project', content: ['Content', 'Content', 'Content', 'Content']},
      {title: 'Framewrok', content: ['Content', 'Content', 'Content', 'Content']},
    ]
  }

  render() {

    const { width } = this.props;
    const isMobile = width <= 500;

    const navs = this.getNav().map( (items, key) => {
      return (
            <div className="Footer-Nav" id={key}>
                <Link className="Footer-title" to="/">
                {items.title}
                </Link>
                {items.content.map( (item, key) => {
                  return (
                    <Link id={key} to="/">
                    {item}
                    </Link>
                  )
                })}
            </div>
      )
    })

    const navsMobile = this.getNav().map( (items, key) => {
      return (
        <div className="Footer-Menu" id={key}>
          <SplitButton
            //bsStyle={}
            title={items.title}
            key={key}
            id={`split-button-basic-${key}`}
          >
            {items.content.map( (item, key) => {
              return (
                <MenuItem eventKey={key} to="/">
                {item}
                </MenuItem>
              )
            })}
          </SplitButton>
        </div>
      )
    })

    return (
        <header className="Footer">

          {isMobile? navsMobile : navs}
    
        </header>
    );
  }
}

