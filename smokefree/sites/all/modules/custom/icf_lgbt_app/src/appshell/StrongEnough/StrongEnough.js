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
              <li>Set a quit date and create your personalized <a href="https://smokefree.gov/build-your-quit-plan" target="_blank">quit plan</a>.</li>
              <li>Talk to a doctor about <a href="https://smokefree.gov/tools-tips/how-to-quit/medications-can-help-you-quit" target="_blank">medications</a> and other ways to help you quit.</li>
              <li>Call a quitline. Try <a href="tel:18007848669" target="_blank" className="rmUnderline">1-800-QUIT-NOW</a>(1-800-784-8669) or <a href="tel:18774487848" target="_blank" className="rmUnderline">1-877-44U-QUIT</a> (1-877-448-7848).</li>
              <li>Find an LGBT–friendly healthcare provider through the <a href="http://www.glma.org/index.cfm?fuseaction=Page.viewPage&pageId=939&grandparentID=534&parentID=938&nodeID=1" target="_blank">Gay and Lesbian Medical Association</a> <i class="fa fa-external-link"></i>.</li>
            </ul>
            </Col>
          </Row>
         
        </div>
       
      )
    }
  }
  
  export default StrongEnough;