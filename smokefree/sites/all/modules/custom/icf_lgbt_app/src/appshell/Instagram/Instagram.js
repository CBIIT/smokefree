import React, { Component } from 'react';
import './Instagram.css';
import 'react-bootstrap/dist/react-bootstrap';


class Instagram extends Component {
    render() {
      return (
        <div className="instagram-section">
           <h2>SmokefreeUS Instagram</h2>
           <p>Together we can quit smoking! Join us on <a href="https://www.instagram.com/smokefreeus/?hl=en" target="_blank">Instagram</a> for motivational images, helpful tips, and inspiration.</p>
           
           <a href="https://www.instagram.com/smokefreeus/?hl=en" className="button"><span className="buttonText">Go To Instagram</span></a>

            <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/instagram-photo.png" className="img-responsive" alt="instagram cover"/>
        
        </div>
       
      )
    }
  }
  
  export default Instagram;