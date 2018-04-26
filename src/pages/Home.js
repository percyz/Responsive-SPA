import React, { Component } from 'react';
import { Panel, Button, FormGroup, FormControl, InputGroup, Glyphicon, Carousel } from 'react-bootstrap';

import './Home.css';

export default class Home extends Component {

  getLanguage(){
    return [
      {title: 'React', photo:'../images/defaultPhoto.jpg', content: 'The incredibly popular industry titan that continues to grow in popularity year over year, built and maintained by Facebook.'},
      {title: 'Angular', photo:'../images/defaultPhoto.jpg', content: 'The incredibly popular industry titan that continues to grow in popularity year over year, built and maintained by Facebook.'},
      {title: 'Ember', photo:'../images/defaultPhoto.jpg', content: 'The incredibly popular industry titan that continues to grow in popularity year over year, built and maintained by Facebook.'},
      {title: 'Vue', photo:'../images/defaultPhoto.jpg', content: 'The incredibly popular industry titan that continues to grow in popularity year over year, built and maintained by Facebook.'},
      {title: 'Python', photo:'../images/defaultPhoto.jpg', content: 'The incredibly popular industry titan that continues to grow in popularity year over year, built and maintained by Facebook.'},
      {title: 'C++', photo:'../images/defaultPhoto.jpg', content: 'The incredibly popular industry titan that continues to grow in popularity year over year, built and maintained by Facebook.'},
    ]
  }

  render() {

    const { width } = this.props;
    const isMobile = width <= 500;

    const languages = this.getLanguage().map( (item, key) => {
      return (
          <Panel className="Panel" id={key}>
            <Panel.Heading>{item.title}</Panel.Heading>
            <Panel.Body className="Panel-body" >
              <img alt="true" src={require('../images/defaultPhoto.png')} width="260" height="150" />
              <div className="Panel-body-content" >
                 <p>{item.content}</p>
                 <Button bsStyle="primary">View More</Button>
              </div>
            </Panel.Body>
          </Panel>
      )
    })

    const languageMobile = this.getLanguage().map( (item, key) => {
      return (
          <Carousel.Item id={key}>
            <Panel className="Panel">
              <Panel.Heading>{item.title}</Panel.Heading>
              <Panel.Body className="Panel-body" >
                <img alt="true" src={require('../images/defaultPhoto.png')} width="260" height="150" />
                <div className="Panel-body-content" >
                  <p>{item.content}</p>
                  <Button bsStyle="primary">View More</Button>
                </div>
              </Panel.Body>
            </Panel>
          </Carousel.Item>
      )
    })

    return (
      <div className="Home">
        <div className="Home-head">
          <h3 className="Home-head-title" >Welcome</h3>
          <p className="Home-intro">
            To get more information, please visit the language profile page.
          </p>
          <div className={isMobile? "Home-search-mobile" : "Home-search"} >
            <p className="Home-search-title">Search</p>
         
            <FormGroup>
              <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>
                  <Glyphicon glyph="search" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </div>
        </div>

        <div className="Home-body">
          {isMobile? <Carousel className="Carousel" >{languageMobile}</Carousel> : languages}
        </div>

        <div className="Home-banner">
          <img alt="true" src={require('../images/banner.png')} className={isMobile? "Home-banner-item-mobile" : "Home-banner-item"} />
          <img alt="true" src={require('../images/banner.png')} className={isMobile? "Home-banner-item-mobile" : "Home-banner-item"} />
        </div>
      </div>
    );
  }
}

