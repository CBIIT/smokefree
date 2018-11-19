import React, { Component } from 'react';
import FlexView from 'react-flexview';
import './AppHeader.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap/lib';

const MobileHero = require('../../assets/header.png');
const Logo = require('../../assets/smokefree-logo.png');
const FreeLife = require('../../assets/this-free-life.png');





class AppHeader extends Component {
    render() {
      return (
        <div className="appheader">
        <Grid>
         
        <Row className="show-grid">
          <Col xs={12} sm={5}>
            <Row>
              <FlexView vAlignContent="center" width="100%" marginTop="20px" marginLeft="15px">
              <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/smokefree-logo.png" width="164" height="auto" className="heroImg" alt="Smokefree-logo" />
             
             
              <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/this-free-life.png" width="150" height="auto" className="heroImg rightIcon" alt="this-free-life" />
              </FlexView>
            </Row>
            <Row>
              <Col xs={12}>
              <h1 className="AppH1">I am <br className="mobileHide"/><span className="highLight">strong <br className="mobileHide"/>enough</span> <br className="mobileHide"/>to quit</h1>
              </Col>
            </Row>
           
         
          </Col>
        </Row>
       
      </Grid>
      <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/header.png" className="responsive-img mobileHead" alt="mobile hero" />
      </div>
      )
    }
  }
  
  export default AppHeader;