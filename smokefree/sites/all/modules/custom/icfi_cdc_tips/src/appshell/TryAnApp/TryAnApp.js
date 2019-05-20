import React, { Component } from 'react';
import './TryAnApp.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Row, Col} from 'react-bootstrap/lib';

class TryAnApp extends Component {
    render() {
      return (
        <div className="tryapp">
        <div className="stores">
          <Row>
            <Col xs={12} md={12} className="downloadBtn leftDownloadBtn">
            <a href="https://itunes.apple.com/app/apple-store/id494552000?pt=564700&ct=TIPS2019&mt=8" target="_blank" className="storeButtonContainer">
            <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/apple-store-icon.png"   alt="apple store" className="img-responsive storeIcon"  />
            </a>
            </Col>
            <Col xs={12} md={12} className="downloadBtn rightDownlaodBtn">
            <a href="https://play.google.com/store/apps/details?id=com.mmgct.quitstart&referrer=utm_source%3DCDCTips%26utm_medium%3DCDCWebsite%26utm_campaign%3DTips2019" target="_blank" className="storeButtonContainer">
            <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/google-play-icon.png"  alt="google play" className="img-responsive storeIcon" />
       
            </a>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={12}>
          <h2>quitSTART App</h2>
          <p>The quitSTART app gives you tailored tips, inspiration, and challenges to help you become smokefree.</p>
          </Col>
        </Row>
          <Row>
            <Col xs={12} md={6} lg={5} sm={12}>
            
            
            </Col>
          </Row>
          <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/app-image.png" className="appscreenimage" alt="app screen" />
          <img src="/sites/all/modules/custom/icfi_cdc_tips/src/assets/quitguide-bg.png" className="quitguide-bg"/>
        </div>
       
      )
    }
  }
  
  export default TryAnApp;