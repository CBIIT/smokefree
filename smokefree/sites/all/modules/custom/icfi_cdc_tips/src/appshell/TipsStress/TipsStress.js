import React, { Component } from 'react';
import './TipsStress.css';
import 'react-bootstrap/dist/react-bootstrap';
import FlipCard from '../../components/Flipcard/FlipCard';
import {Row, Col} from 'react-bootstrap/lib';
import { DefaultButton } from '../../components/Button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
class TipsStress extends Component {
  render() {
    return (
       <div className="apptips">
         <h2>Create a Quit Plan</h2>
         <p>Embrace the power of planning. Build your personalized quit plan to set a quit date, 
         understand your smoking triggers, choose strategies for dealing with cravings, 
         and find additional tools and resources to help you become smokefree.</p>
         {/*
         <a className="flip">
         <FlipCard/>
         </a>
         */}
         <Row>
          <DefaultButton href="https://smokefree.gov/build-your-quit-plan" text="MAKE MY PLAN"/>
         </Row>

         <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/make-plan.jpg" className="img-responsive tips-img" alt="Make a plan"  data-aos="fade-in" data-aos-delay="30"/>
      </div>
     
    )
  }
  }

  AOS.init({
    duration : 2000
  });
  export default TipsStress;