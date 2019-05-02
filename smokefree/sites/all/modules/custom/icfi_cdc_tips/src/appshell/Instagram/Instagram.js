import React, { Component } from 'react';
import './Instagram.css';
import 'react-bootstrap/dist/react-bootstrap';
import { SocialButton } from '../../components/Button/SocialButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Instagram extends Component {
    render() {
      return (
        <div className="instagram-section">
           <h2>Stay Connected</h2>
           <p>Support can go a long way when quitting smoking. Connect with people like you through CDC and NCI’s supportive social media communities.</p>
           <SocialButton href="https://www.facebook.com/cdctobaccofree/" text="@CDCTobaccoFree" imgName="facebook.png"/>
           <SocialButton href="https://twitter.com/CDCTobaccoFree" text="@CDCTobaccoFree" imgName="twitter.png"/>
           <SocialButton href="https://www.instagram.com/smokefreeus/?hl=en" text="@smokefreeus" imgName="instagram.png"/>
           <a href="https://www.instagram.com/smokefreeus/?hl=en" target="_blank">
            <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/social-media.png" className="img-responsive instagram-img" alt="instagram cover"  data-aos="fade-in" data-aos-delay="30"/>
            </a>
        </div>
       
      )
    }
  }
  AOS.init({
    duration : 2000
  });
  export default Instagram;