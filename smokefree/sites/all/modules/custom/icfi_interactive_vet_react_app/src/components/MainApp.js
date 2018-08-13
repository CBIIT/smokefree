import React, { Component } from 'react';

import Calculator from './Calculator';

class MainApp extends Component {
  render() {
    return (
        <div className="container">	
            <div className="row">
                <div id="nrt-selection">
                    <div className="col-sm-3 col-xs-6">
                        <div className="checkbox nrt-selection card-gray">
                            <label id="patch"><input type="checkbox" className="nrt-selection-checkbox" value="" />Patch</label>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="checkbox nrt-selection card-gray">
                            <label id="gum"><input type="checkbox" className="nrt-selection-checkbox" value=""/>Gum</label>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="checkbox nrt-selection card-gray">
                            <label id="lozenge"><input type="checkbox" className="nrt-selection-checkbox" value=""/>Lozenge</label>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="checkbox nrt-selection card-gray">
                            <label id="counseling"><input type="checkbox" className="nrt-selection-checkbox" value=""/>Counseling</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Your Chances of Staying Quit…</h3>
                        </div>
                        <div className="col-md-5 col-sm-6">
                            <div id="chances">
                                
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-6">
                            <div id="emoji">
                                <img src="images/nrt-animation-placeholder-1.jpg" alt="Emoji Placeholder" className="img-responsive"/>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <h3>You Selected this Therapy:</h3>
                        <hr />
                        <div id="facts">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-30"></div>
            <div className="row">
                <div className="col-md-6">
                    <div className="quit-tips">
                        <h3>Quit Tips</h3>
                        <ul id="quit-tips-content">
                            
                        </ul>
                    </div>
                </div> 
                <div className="col-md-6">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/U4vOVbXxPl4"></iframe>
                    </div>
                </div> 
            </div>
            <div className="spacer-30"></div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Planning Your Day</h3>
                </div>
                <div className="col-md-5">
                    <div id="yourday">
                        
                    </div>
                    <div className="quote-block">
                        <blockquote id="nrt-quote">
                        
                        </blockquote>
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-1">
                    <img src="images/nrt-slider-placeholder.jpg" className="img-responsive" alt="Placeholder"/>
                </div>
            </div> 
            <div className="spacer-30"></div>
            <Calculator />	
        </div>
    )
  }
}
export default MainApp;