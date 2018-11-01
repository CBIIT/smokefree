import React, { Component } from 'react';
import './Instagram.css';
import 'react-bootstrap/dist/react-bootstrap';
import { DefaultButton } from '../../components/Button/Button';

class Instagram extends Component {
    render() {
      return (
        <div className="instagram-section">
           <h2>SmokefreeUS Instagram</h2>
           <p>Together we can quit smoking! Join us on <a href="https://www.instagram.com/smokefreeus/?hl=en" target="_blank">Instagram</a> for motivational images, helpful tips, and inspiration.</p>
           <DefaultButton href="https://www.instagram.com/smokefreeus/?hl=en" text="Go To Instagram"/>
           <a href="https://www.instagram.com/smokefreeus/?hl=en" target="_blank">
            <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/instagram-photo.png" className="img-responsive" alt="instagram cover"/>
            </a>
        </div>
       
      )
    }
  }
  
  export default Instagram;