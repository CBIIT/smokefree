import React, { Component } from 'react';
import './Instagram.css';
import 'react-bootstrap/dist/react-bootstrap';

const SectionImage = require('../../assets/instagram.png');

class Instagram extends Component {
    render() {
      return (
        <div>
            <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/instagram.png" className="img-responsive" alt=""/>
        </div>
       
      )
    }
  }
  
  export default Instagram;