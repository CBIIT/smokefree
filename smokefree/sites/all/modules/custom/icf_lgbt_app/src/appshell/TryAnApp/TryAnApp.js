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
            <Col xs={12} sm={6} md={12} className="downloadBtn leftDownloadBtn">
            <a href="https://itunes.apple.com/app/apple-store/id494552000?pt=564700&ct=ThisFreeLife&mt=8" target="_blank" className="storeButtonContainer">
            <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/apple-store-icon.png"   alt="apple store" className="img-responsive storeIcon"  />
            </a>
            </Col>
            <Col xs={12} sm={6} md={12} className="downloadBtn rightDownlaodBtn">
            <a href="https://play.google.com/store/apps/details?id=com.mmgct.quitstart&referrer=utm_source%3DSmokefreeGov%26utm_medium%3DWebsite%26utm_campaign%3DThisFreeLife" target="_blank" className="storeButtonContainer">
            <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/google-play-icon.png"  alt="google play" className="img-responsive storeIcon" />
       
            </a>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={12}>
          <h2>Quit with An App</h2>
          </Col>
        </Row>
          <Row>
            <Col xs={12} md={6} lg={5} sm={12}>
            
            <p>Download quitSTART for tips, inspiration, 
              and challenges so you can live as the true, tobacco free you.</p>
            </Col>
          </Row>
          <img src="/sites/all/modules/custom/icf_lgbt_app/src/assets/app-image.png" className="appscreenimage" alt="app screen" />
        </div>
       
      )
    }
  }
  
  export default TryAnApp;