import React, { Component } from 'react';
import './LearnAbout.css';
import 'react-bootstrap/dist/react-bootstrap';
import { DefaultButton } from '../../components/Button/Button';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import { Shake } from 'reshake';
import AOS from 'aos';
import 'aos/dist/aos.css';


class LearnAbout extends Component {
    render() {
      return (
         <div className="learnabout">
          <Row>
           <Col xs={12} className="learnaboutTop">
           <h2>Call 1-800-QUIT NOW</h2>
           <p>
           <a href="tel:1-800-784-8669">1-800-QUIT-NOW</a> (1-800-784-8669) is a toll-free number run by the National Cancer Institute (NCI) that will connect you 
           to your state’s tobacco quitline. Hours of operation and services vary from state to state.
           </p>
            </Col></Row>
           {/*
           <DefaultButton href="/express-yourself-without-cigarettes" text="Express Yourself without cigarettes" />
           <DefaultButton href="/marketing-tobacco-lgbt-communities" text="Marketing Tobacco to LGBT COMMUNITIES"/>
           <DefaultButton href="/social-smoking-and-fitting" text="Social Smoking" />
           <DefaultButton href="/stress-relief-without-smoking" text="Stress AND Smoking" />
           */}
           <Row>
           <Col xs={12}  lg={6} className="phoneNumbersContainer">
           <div className="phoneNumbers"  data-aos="flip-left" data-aos-offset="50" data-aos-delay="50">
           <Shake h={4} v={4} r={3} dur={870} int={29.6} max={50} fixed={true} fixedStop={false} freez={false}>
           <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/phone-icon.png" className="phoneIcon"/>
           </Shake>
           <p>
           English: <a href="tel:1-800-QUIT-NOW">1-800-QUIT-NOW</a><br/>
           Spanish: <a href="tel:1-855-335-3569">1-855-335-3569</a><br/>
           Korean: <a href="tel:1-800-556-5564">1-800-556-5564</a><br/>
           Mandarin and Cantonese:<br/> <a href="tel:1-800-838-8917">1-800-838-8917</a><br/>
           Vietnamese: <a href="tel:1-800-778-8440">1-800-778-8440</a>
           </p>
           </div>
           </Col>
          
           </Row>
           <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/hands-on-bg.png" className="handsOn"/>
        </div>
       
      )
    }
  }
  AOS.init({
    duration : 2000
  });

  export default LearnAbout;