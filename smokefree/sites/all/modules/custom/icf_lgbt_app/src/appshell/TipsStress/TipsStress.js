import React, { Component } from 'react';
import './TipsStress.css';
import 'react-bootstrap/dist/react-bootstrap';
import FlipCard from '../../components/Flipcard/FlipCard';

class TipsStress extends Component {
  render() {
    return (
       <div className="tips">
         <h2>Cope With Stress</h2>
         <p>Part of being smokefree is learning new, healthier ways to deal with stress without smoking.</p>
         <div className="flip">
         <FlipCard/>
         </div>
        
      </div>
     
    )
  }
  }
  
  export default TipsStress;