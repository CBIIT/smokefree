import React, { Component } from 'react';
import './TipsStress.css';
import 'react-bootstrap/dist/react-bootstrap';
import FlipCard from '../../components/Flipcard/FlipCard';
import { DefaultButton } from '../../components/Button/Button';
import {Row, Col} from 'react-bootstrap/lib';


class TipsStress extends Component {
  render() {
    return (
       <div className="tips">
       <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/top-4.png"  alt="top image" className="topBorder" />
         <h2>Create a Quit Plan</h2>
         <p>
         Build your personalized quit plan by setting a quit date, learning how to handle cravings, and more! Start planning your smokefree journey.
        </p>
         <Row>
         <Col xs={12} md={7}>
          <DefaultButton href="https://smokefree.gov/build-your-quit-plan" text="CREATE MY PLAN"/>
          </Col>
         </Row>
        
         <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/calendar.png" className="quitPlanImage" alt="app screen" />
          <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/quitPlan-bg.png" className="quitPlan-bg"/>
      </div>
     
    )
  }
  }
  
  export default TipsStress;