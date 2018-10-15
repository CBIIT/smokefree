import React, { Component } from 'react';
import './StrongEnough.css';
import 'react-bootstrap/dist/react-bootstrap';

const SectionImage = require('../../assets/strong-enough.png');

class StrongEnough extends Component {
    render() {
      return (
        <div>
            <img src={SectionImage} className="img-responsive" alt=""/>
        </div>
       
      )
    }
  }
  
  export default StrongEnough;