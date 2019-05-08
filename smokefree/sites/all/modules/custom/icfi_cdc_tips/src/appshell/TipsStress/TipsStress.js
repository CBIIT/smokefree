import React, { Component } from 'react';
import './TipsStress.css';
import 'react-bootstrap/dist/react-bootstrap';
import FlipCard from '../../components/Flipcard/FlipCard';

class TipsStress extends Component {
  render() {
    return (
       <div className="apptips">
         <h2>Cope With Stress</h2>
         <p>Part of being smokefree is learning new, healthier ways to deal with stress without smoking.</p>
         <a className="flip">
         <FlipCard/>
         </a>
        
      </div>
     
    )
  }
  }
  export default TipsStress;