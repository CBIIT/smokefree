import React, { Component } from 'react';
import './LearnAbout.css';
import 'react-bootstrap/dist/react-bootstrap';


class LearnAbout extends Component {
    render() {
      return (
         <div className="learnabout">
           <h2>Learn About Quitting on smokefree.gov</h2>
           <a className="button" href="/express-yourself-without-cigarettes" target="_blank"><span className="buttonText">Express Yourself <br/>without cigarettes</span></a>
           <a className="button" href="/marketing-tobacco-lgbt-communities" target="_blank"><span className="buttonText">Marketing Tobacco to  <br/>LGBT COMMUNITIES</span></a>
           <a className="button" href="/social-smoking-and-fitting" target="_blank"><span className="buttonText">Social Smoking</span></a>
           <a className="button" href="/stress-relief-without-smoking" target="_blank"><span className="buttonText">Stress AND Smoking</span></a>
        </div>
       
      )
    }
  }
  
  export default LearnAbout;