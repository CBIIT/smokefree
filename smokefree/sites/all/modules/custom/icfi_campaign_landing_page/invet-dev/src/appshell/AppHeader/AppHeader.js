import React, { Component } from 'react';
import FlexView from 'react-flexview';
import './AppHeader.css';
import 'react-bootstrap/dist/react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileHero = require('../../assets/header.png');
const Logo = require('../../assets/smokefree.png');
const FreeLife = require('../../assets/this-free-life.png');





class AppHeader extends Component {

  constructor(props){
    super(props);

    this.state = {
      domain: '',
      bgClass: '',
      logo: 'sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/smokefree-logo-reverse.png',

    }
  }


  componentDidUpdate() {


    if (this.state.domain !== this.props.domain) {
    if(this.props.domain === 'women'){
      this.setState({
        domain: this.props.domain,
        bgClass: "appheader womenHeader",
        logo: 'sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/smokefree.png',
        logoLink: 'https://women.smokefree.gov/'
      })
    }
    else if (this.props.domain === 'teen'){
      this.setState({
        domain: this.props.domain,
        bgClass: "appheader teenHeader",
        logo: 'sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/smokefree.png',
        logoLink: 'https://teen.smokefree.gov/'
      })
    }
    else{
     
        this.setState({
          domain: this.props.domain,
          bgClass: "appheader",
          logo: 'sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/smokefree-reverse.png',
          logoLink: 'https://smokefree.gov/'
        })
     
    }
    };
    console.log(this.props.domain);
  }
  





    render() {



      return (
        <div className={this.state.bgClass}>
        <Grid className="appHeaderContent">
         
        <Row className="show-grid">
          <Col xs={12} sm={7} md={5}>
            <Row>
              <FlexView vAlignContent="center" width="100%" marginTop="20px" marginLeft="15px">
              <a href={this.state.logoLink} target="_blank">
              <img src={this.state.logo} width="123" height="auto" className="heroImg xsHidden" alt="Smokefree-logo" />
              <img src='sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/smokefree.png' width="164" height="auto" className="heroImg xsDisplay" alt="Smokefree-logo" />
              </a>
            
              </FlexView>
            </Row>
            <Row>
              <Col xs={12} >
              <h1 className="AppH1" data-aos="fade-right">Make Today Your<br /><span className="btnLine">Quit Day.</span></h1>
              <p className="AppPara" data-aos="fade-in">Are you ready to say goodbye to smoking? Today is a great day to quit, and we can help. Explore these tools and make a plan for how you are going to become smokefree for good.</p>
              </Col>
            </Row>
           
         
          </Col>
        </Row>
       
      </Grid>
        {/*
      <img src="/modules/custom/icf_lgbt_app/react/src/assets/header-mobile.jpg" className="responsive-img mobileHead" alt="mobile hero" />
      */}
   
      </div>
      )
    }
  }
  AOS.init({
    duration : 1000
  });


  export default AppHeader;