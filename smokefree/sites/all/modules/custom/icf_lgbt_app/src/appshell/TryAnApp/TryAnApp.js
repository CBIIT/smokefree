import React, { Component } from 'react';
import './TryAnApp.css';
import 'react-bootstrap/dist/react-bootstrap';

const SectionImage = require('../../assets/try-an-app.png');

class TryAnApp extends Component {
    render() {
      return (
        <div>
            <img src={SectionImage} className="img-responsive" alt=""/>
        </div>
       
      )
    }
  }
  
  export default TryAnApp;