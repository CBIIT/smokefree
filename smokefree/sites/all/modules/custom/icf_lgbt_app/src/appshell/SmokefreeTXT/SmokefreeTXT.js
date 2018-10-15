import React, { Component } from 'react';
import './SmokefreeTXT.css';
import 'react-bootstrap/dist/react-bootstrap';

const SectionImage = require('../../assets/smokefreetxt.png');

class SmokefreeTXT extends Component {
    render() {
      return (
        <div>
            <img src={SectionImage} className="img-responsive" alt=""/>
        </div>
       
      )
    }
  }
  
  export default SmokefreeTXT;