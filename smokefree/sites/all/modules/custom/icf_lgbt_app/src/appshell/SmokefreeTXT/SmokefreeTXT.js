import React, { Component } from 'react';
import './SmokefreeTXT.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Row, Col} from 'react-bootstrap/lib';
import FlexView from 'react-flexview';
import { DefaultButton } from '../../components/Button/Button';
class SmokefreeTXT extends Component {
    render() {
      return (
        <div className="txt">
        <div className="brush">
        <FlexView vAlignContent="center" width="100%">
        <Row className="txtInputRow">
          <Col xs={12} md={8} lg={9}>
          <input type="text" className="txtInput" placeholder="Phone Number"></input>
          </Col>
          <Col xs={12} md={4} lg={3}>
          <DefaultButton href="#" text="Start Now"/>
          </Col>
          <Col xs={12}>
          <p className="unsubscribe">To unsubscribe text STOP to 47848</p>
          </Col>
        </Row>
        </FlexView>
        </div>
          <Row >
            <Col xs={12} md={12} lg={6} sm={12}>
            <h2>SmokefreeTXT</h2>
            <p>Get daily text messages with encouragement, advice, and tips to help you quit smoking.</p>
            </Col>
          </Row>
          <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/text-bubbles.png" className="txtimage" alt="text bubbles" />
        </div>
       
      )
    }
  }
  
  export default SmokefreeTXT;