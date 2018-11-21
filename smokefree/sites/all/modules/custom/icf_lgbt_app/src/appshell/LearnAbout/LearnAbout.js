import React, { Component } from 'react';
import './LearnAbout.css';
import 'react-bootstrap/dist/react-bootstrap';
import { DefaultButton } from '../../components/Button/Button';


class LearnAbout extends Component {
    render() {
      return (
         <div className="learnabout">
           <h2>Learn About Quitting on smokefree.gov</h2>
           <DefaultButton href="/express-yourself-without-cigarettes" text="Express Yourself without cigarettes" />
           <DefaultButton href="/marketing-tobacco-lgbt-communities" text="Marketing Tobacco to LGBT COMMUNITIES"/>
           <DefaultButton href="/social-smoking-and-fitting" text="Social Smoking" />
           <DefaultButton href="/stress-relief-without-smoking" text="Stress AND Smoking" />
          
        </div>
       
      )
    }
  }
  
  export default LearnAbout;