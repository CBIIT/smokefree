import React, { Component } from 'react';
import './SmokefreeTXT.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Row, Col} from 'react-bootstrap/lib';
import FlexView from 'react-flexview';
import { DefaultButton } from '../../components/Button/Button';
import PhoneForm from '../../components/Form/Form';


class SmokefreeTXT extends Component {
    render() {
      return (
        <div className="txt">
        <div className="brush">
        <FlexView vAlignContent="center" width="100%">
        <PhoneForm/>
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