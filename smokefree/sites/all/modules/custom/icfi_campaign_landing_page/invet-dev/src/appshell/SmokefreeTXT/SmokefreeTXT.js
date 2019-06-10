import React, { Component } from 'react';
import './SmokefreeTXT.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Row, Col} from 'react-bootstrap/lib';
import FlexView from 'react-flexview';
import { DefaultButton } from '../../components/Button/Button';
import PhoneForm from '../../components/Form/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';

class SmokefreeTXT extends Component {
    render() {
      return (
        <div className="txt">
        <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/top-1.png"  alt="top image" className="topBorder" />
        <div className="brush">
        <FlexView vAlignContent="center" width="100%">
        <PhoneForm/>
        </FlexView>
        </div>
        <Row >
            <Col xs={12}>
            <h2>Join SmokefreeTXT</h2>
            <p>Get daily text messages with encouragement, advice, and tips to help you quit smoking.</p>
            </Col>
            <Col xs={12}>
            <img data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/crave-bubble.png"  alt="crave bubble" className="crave-bubble pull-right" />
            <img data-aos="fade-up" data-aos-offset="20" data-aos-delay="200" src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/SFtxt.png"  alt="SFtxt bubble" className="SFtxt pull-left" />
            </Col>
          </Row>
        </div>
       
      )
    }
  }
  AOS.init({
    duration : 2000
  });
  export default SmokefreeTXT;