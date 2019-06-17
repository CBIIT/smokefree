import React, { Component } from 'react';
import FlexView from 'react-flexview';
import './AppHeader.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileHero = require('../../assets/header.png');
const Logo = require('../../assets/smokefree-logo.png');
const FreeLife = require('../../assets/this-free-life.png');






class AppHeader extends Component {
    render() {
      return (
        <div className="appheader">
        <Grid className="appHeaderContent">
         
        <Row className="show-grid">
          <Col xs={12} md={6}>
            <Row>
              <FlexView vAlignContent="center" width="100%" marginTop="20px" marginLeft="15px">
              <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/smokefree-logo-reverse.png" width="144" height="auto" className="heroImg" alt="Smokefree-logo" />
             
             
              <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/tips-from-former-smokers.png" width="70" height="auto" className="heroImg rightIcon" alt="tips-from-former-smokers" />
              </FlexView>
            </Row>
            <Row>
              <Col xs={12}>
              <h1 className="AppH1" data-aos="fade-in" >YOU CAN QUIT</h1>
             
              </Col>
            </Row>
           
         
          </Col>
          <Col xs={12} md={6} className="heroImage">
            <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/hero-image.png" width="100%" height="auto" data-aos="fade-in" data-aos-delay="80"></img>
          </Col>
        </Row>
       
      </Grid>
    
      
   
      </div>
      )
    }
  }

  AOS.init({
    duration : 2000
  });
  export default AppHeader;