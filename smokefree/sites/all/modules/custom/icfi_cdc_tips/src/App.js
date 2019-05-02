import React, { Component } from 'react';
import './App.css';
import AppHeader from './appshell/AppHeader/AppHeader.js';
import AppFooter from './appshell/AppFooter/AppFooter.js';
import LearnAbout from './appshell/LearnAbout/LearnAbout.js';
import TryAnApp from './appshell/TryAnApp/TryAnApp.js';
import SmokefreeTXT from './appshell/SmokefreeTXT/SmokefreeTXT.js';
import TipsStress from './appshell/TipsStress/TipsStress.js';
import Instagram from './appshell/Instagram/Instagram.js';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import StrongEnough from './appshell/StrongEnough/StrongEnough';
import AOS from 'aos';
import 'aos/dist/aos.css';


class App extends Component {
  render() {
    return (
      
      <div className="App">
      

       
        <AppHeader/>
        <Grid className="content">
          <Row>
            <Col xs={12}  sm={7} className="sectionCard" data-aos="fade-up">
            <LearnAbout />
            </Col>
            <Col xs={12} sm={5} className="sectionCard" data-aos="fade-up">
            <TryAnApp/>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6} className="sectionCard" data-aos="fade-up">
            <SmokefreeTXT/>
            </Col>
            <Col xs={12} sm={6} className="sectionCard" data-aos="fade-up">
            <TipsStress/>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={5} className="sectionCard" data-aos="fade-up">
            <Instagram/>
            </Col>
            <Col xs={12} sm={7} className="sectionCard" data-aos="fade-up">
            <StrongEnough/>
            </Col>
          </Row>
        </Grid>
        <AppFooter/>
      </div>
     
    );
  }
}
AOS.init({
  duration : 2000
});



export default App;
