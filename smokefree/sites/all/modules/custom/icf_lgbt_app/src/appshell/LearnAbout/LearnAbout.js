import React, { Component } from 'react';
import './LearnAbout.css';
import 'react-bootstrap/dist/react-bootstrap';


class LearnAbout extends Component {
    render() {
      return (
         <div className="learnabout">
           <h2>Learn About Quitting on smokefree.gov</h2>
           <div className="button"><span className="buttonText">Express Yourself <br/>without cigarettes</span></div>
           <div className="button"><span className="buttonText">Marketing Tobacco to  <br/>LGBT COMMUNITIES</span></div>
           <div className="button"><span className="buttonText">Social Smoking</span></div>
           <div className="button"><span className="buttonText">Stress AND Smoking</span></div>
        </div>
       
      )
    }
  }
  
  export default LearnAbout;