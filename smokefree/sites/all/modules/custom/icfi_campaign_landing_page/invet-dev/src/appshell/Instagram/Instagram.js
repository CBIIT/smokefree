import React, { Component } from 'react';
import './Instagram.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import { DefaultButton } from '../../components/Button/Button';
import { SocialButton } from '../../components/Button/SocialButton';

class Instagram extends Component {

  constructor(props){
    super(props);

    this.state = {
      domain: '',
      model: 'sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/instagram-image.png',
    }
  }

  componentDidUpdate() {


    if (this.state.domain !== this.props.domain) {
    if(this.props.domain === 'women'){
      this.setState({
        domain: this.props.domain,
        model: 'sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/instagram-image-women.png',
        facebook: 'https://www.facebook.com/smokefree.women/',
        instagram: 'https://www.instagram.com/smokefreeus',
        facebookText: '@SmokefreeWomen'
      })
    }
    else if (this.props.domain === 'teen'){
      this.setState({
        domain: this.props.domain,
        model: 'sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/instagram-image-teen.png',
        facebook: 'https://www.facebook.com/smokefreeUS/',
        instagram: 'https://www.instagram.com/smokefreeus',
        facebookText: '@SmokefreeUS'
      })
    }
    else{
        this.setState({
          domain: this.props.domain,
          model: 'sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/instagram-image.png',
          facebook: 'https://www.facebook.com/SmokefreeUS',
          instagram: 'https://www.instagram.com/smokefreeus/?hl=en',
          facebookText: '@SmokefreeUS'
        })
     
    }
    };
  }


    render() {
      return (
        <div className="instagram-section">
        <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/top-3.png"  alt="top image" className="topBorder" />
           <h2>Stay Connected</h2>
           <p>Support can go a long way when quitting smoking. Connect with people like you through Smokefree's supportive social media communities.</p>
           <Row className="socialButtonRow">
           <Col xs={12} lg={7}>
           <SocialButton href={this.state.facebook} text={this.state.facebookText} imgName="facebook.png" textClass="socialText"/>
           <SocialButton href={this.state.instagram} text="@SmokefreeUS" imgName="instagram.png" textClass="socialText"/>
           </Col>
           </Row>


           <img src={this.state.model} className="instagramImage" alt="app screen" />
          <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/instagram-bg.png" className="instagram-bg"/>
        </div>
       
      )
    }
  }
  
  export default Instagram;