import React, { Component} from 'react';
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


  constructor(){
    super();

    this.state = {
      domain: ''
    }
  }




  componentDidMount() {
    const values = window.location.href;
    if(values.includes("vet")|| values.includes("veterans")){
      this.setState({
       domain: "vet"
      }) 
    }
    else if (values.includes("sfw") || values.includes("women")){
      this.setState({
        domain: "women"
      })
    }
    else if (values.includes("teen") || values.includes("teen")){
      this.setState({
        domain: "teen"
      })
    }
    else{
      this.setState({
        domain: "general"
      })
    }
    
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }



  render() {
    const domain = this.state.domain;

    return (
      
      <div className="App">
      
       
        <AppHeader domain={domain}/>
        <Grid className="content">
          <Row>
            <Col xs={12} md={7} sm={6} className="sectionCard" data-aos="fade-up">
            <SmokefreeTXT domain={domain}/>
            </Col>
            <Col xs={12} md={5} sm={6} className="sectionCard" data-aos="fade-up">
            <TryAnApp domain={domain}/>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6} className="sectionCard" data-aos="fade-up">
            <Instagram domain={domain}/>
            </Col>
            <Col xs={12} sm={6} className="sectionCard" data-aos="fade-up">
            <TipsStress domain={domain}/>
            </Col>
          </Row>

         
        </Grid>
      </div>
     
    );
  }
}

AOS.init({
  duration : 1000
});

export default App;
