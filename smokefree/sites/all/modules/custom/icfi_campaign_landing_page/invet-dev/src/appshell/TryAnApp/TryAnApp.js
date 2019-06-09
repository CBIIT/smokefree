import React, { Component } from 'react';
import './TryAnApp.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Row, Col} from 'react-bootstrap/lib';

class TryAnApp extends Component {


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
        ios: 'https://itunes.apple.com/app/apple-store/id494552000?pt=564700&ct=SFW2019&mt=8',
        android: 'https://play.google.com/store/apps/details?id=com.mmgct.quitstart&referrer=utm_source%3DSFWLandingPage%26utm_medium%3DWebsite%26utm_campaign%3DSFG2019'
      })
    }
    else if (this.props.domain === 'teen'){
      this.setState({
        domain: this.props.domain,
        ios:'https://itunes.apple.com/app/apple-store/id494552000?pt=564700&ct=SFT2019&mt=8',
        android:'https://play.google.com/store/apps/details?id=com.mmgct.quitstart&referrer=utm_source%3DSFTLandingPage%26utm_medium%3DWebsite%26utm_campaign%3DSFG2019'
      })
    }
    else{
        this.setState({
          domain: this.props.domain,
          ios:'https://itunes.apple.com/app/apple-store/id494552000?pt=564700&ct=SFG2019&mt=8',
          android:'https://play.google.com/store/apps/details?id=com.mmgct.quitstart&referrer=utm_source%3DSFGLandingPage%26utm_medium%3DWebsite%26utm_campaign%3DSFG2019'
         
        })
     
    }
    };
  }



    render() {
      return (
        <div className="tryapp">
         <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/top-2.png"  alt="top image" className="topBorder" />
        <div className="stores">
          <Row>
            <Col xs={12} sm={6} md={12} className="downloadBtn leftDownloadBtn">
            <a href="https://itunes.apple.com/app/apple-store/id494552000?pt=564700&ct=SFG2019&mt=8" target="_blank" className="storeButtonContainer">
            <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/apple-store.png"   alt="apple store" className="img-responsive storeIcon"  />
            </a>
            </Col>
            <Col xs={12} sm={6} md={12} className="downloadBtn rightDownlaodBtn">
            <a href="https://play.google.com/store/apps/details?id=com.mmgct.quitstart&referrer=utm_source%3DSFGLandingPage%26utm_medium%3DWebsite%26utm_campaign%3DSFG2019
" target="_blank" className="storeButtonContainer">
            <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/google-play-2.png"  alt="google play" className="img-responsive storeIcon" />
       
            </a>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={12}>
          <h2>Get QUITSTART APP</h2>
          <p>Get a free personalized mobile app with quit tips, ways to fight cravings, inspiration, and help to become smokefree.</p>
          </Col>
        </Row>
         
          <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/app-image.png" className="appscreenimage" alt="app screen" />
          <img src="sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/quitGuide-bg.png" className="quitguide-bg"/>
        </div>
       
      )
    }
  }
  
  export default TryAnApp;