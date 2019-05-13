import React, { Component } from 'react';
import './StrongEnough.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Row, Col} from 'react-bootstrap/lib';
import { DefaultButton } from '../../components/Button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

class StrongEnough extends Component {
    render() {
      return (
        <div className="strongEnough">
       
          <Row>
            <Col xs={12}>
            <h2>MANAGE YOUR CRAVINGS</h2>
            <p>Quitting smoking is about fighting one craving at a time. Be prepared to deal with cravings with these helpful tips.</p>
            </Col>
          </Row>

          <Row>
            <div className="tipCard greyCard tipCard1" data-aos="zoom-in">
              <div className="tipCardHead top">
                <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/toothbrush.png" className="tipImage tipCard1Image"/>
              </div>
              <div className="tipCardBody">
                <p>Bring a toothbrush and toothpaste everywhere. Brush your teeth whenever you have a craving.</p>
              </div>
            </div>
            <div className="tipCard brownCard" data-aos="zoom-in" data-aos-delay="10" >
              <div className="tipCardHead top">
              <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/gum.png" className="tipImage tipCard2Image"/>
              </div>
              <div className="tipCardBody">
              <p>Nicotine replacement therapy (NRT) like gum, patches, or lozenges can reduce cravings and withdrawal symptoms.</p>
              </div>
            </div>
          
         
            <div className="tipCard brownCard" data-aos="zoom-in" data-aos-delay="20">
            <div className="tipCardBody">
            <p>Stretch or walk for 10 minutes or until your craving passes.</p></div>
              <div className="tipCardHead top">
              <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/shoe.png" className="tipImage tipCard3Image"/>
              </div>
             
            </div>
            <div className="tipCard greyCard" data-aos="zoom-in" data-aos-delay="30">
            <div className="tipCardBody">
            <p>Distract yourself through cravings by playing a game or watching a video on your phone.</p>
            </div>
              <div className="tipCardHead top">
              <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/game.png" className="tipImage tipCard4Image"/>
              </div>
            
            </div>
          </Row>
          <Row>
          <DefaultButton href="https://smokefree.gov/tools-tips" text="CHECK MORE TIPS"/>
          </Row>
        </div>
       
      )
    }
  }
  AOS.init({
    duration : 500
  });
  export default StrongEnough;