import React, { Component } from 'react';
import './TipsStress.css';
import 'react-bootstrap/dist/react-bootstrap';

const SectionImage = require('../../assets/tips-and-stress.png');

class TipsStress extends Component {
    render() {
      return (
        <div>
            <img src={SectionImage} className="img-responsive" alt=""/>
        </div>
       
      )
    }
  }
  
  export default TipsStress;