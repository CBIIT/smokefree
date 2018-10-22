import React, { Component } from 'react';
import './StrongEnough.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Row, Col} from 'react-bootstrap/lib';

class StrongEnough extends Component {
    render() {
      return (
        <div className="strongEnough">
         <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/strong-enough-brush.png" className="brush" alt="background brush"  />
          <Row>
            <Col xs={12} md={8} lg={6} sm={12}>
            <h2>You are strong enough to quit</h2>
            <p>LGBT people face adversity and overcome it every day. 
              You can use that same strength to quit smoking. <strong>We’ve got tools to help you</strong>:</p>
            <ul>
              <li>Set a quit date and create your personalized <a src="#" target="_blank">quit plan</a>.</li>
              <li>Talk to a doctor about <a src="#" target="_blank">medications</a> and other ways to help you quit.</li>
              <li>Call a quitline. Try <a src="#" target="_blank">1-800-QUIT-NOW</a>(1-800-784-8669) or <a src="#" target="_blank">1-877-44U-QUIT</a> (1-877-448-7848).</li>
              <li>Find an LGBT–friendly healthcare provider through the <a src="#" target="_blank">Gay and Lesbian Medical Association</a>.</li>
            </ul>
            </Col>
          </Row>
         
        </div>
       
      )
    }
  }
  
  export default StrongEnough;