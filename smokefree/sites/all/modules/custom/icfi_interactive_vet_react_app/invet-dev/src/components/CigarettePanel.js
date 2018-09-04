import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChewPanel from './ChewPanel';

class CigarettePanel extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                dosage: '10 or fewer',
                gum: '2mg',
                patch: '14mg',
                key: 1,
                clickClassPlus : 'cigarette-amount_11_20',
                clickClassMinus : 'cigarette-amount_21'
            }
        }
    }
    render() {
        const { showCigarettes, showChew } = this.props;

        const calculatorData = {
            cigarettes: [
                {
                    dosage: '10 or fewer',
                    gum: '2mg',
                    patch: '14mg',
                    key: 1,
                    clickClassPlus : 'cigarette-amount_11_20',
                    clickClassMinus : 'cigarette-amount_21'
                },
                {
                    dosage: '11-20',
                    gum: '2mg',
                    patch: '21mg',
                    key: 2,
                    clickClassPlus : 'cigarette-amount_21',
                    clickClassMinus : 'cigarette-amount_10_less'
                },
                {
                    dosage: '21 or more',
                    gum: '4mg',
                    patch: '21mg',
                    key: 3,
                    clickClassPlus : 'cigarette-amount_10_less',
                    clickClassMinus : 'cigarette-amount_11_20'
                }
            ]
        }

        const cigaretteChangeHandler = () => {
            if(this.state.data.key <= 2) {
                this.setState({
                    data: calculatorData.cigarettes[0 + this.state.data.key]
                })
            } else {
                this.setState({
                    data: {
                        dosage: '10 or fewer',
                        gum: '2mg',
                        patch: '14mg',
                        key: 1,
                        clickClassPlus : 'cigarette-amount_11_20',
                        clickClassMinus : 'cigarette-amount_21'
                    }
                })
            }
        }

        const cigaretteChangeHandlerDown = () => {
            if(this.state.data.key === 1) {
                this.setState({
                    data: calculatorData.cigarettes[2]
                })
            } else if(this.state.data.key === 2) {
                this.setState({
                    data: calculatorData.cigarettes[0]
                })
            } else if(this.state.data.key === 3) {
                this.setState({
                    data: calculatorData.cigarettes[1]
                })
            }
        }

        return (
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="cigarettes" style={{display: showCigarettes ? 'block' : 'none' }}>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-3">
                            <h3>Estimate Your Nicotine Dosage</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <p className="larger">How many cigarettes do you smoke per day?</p>
                            <div className="spacer-10"></div>
                            <div className="row">
                                <div className="col-md-3 col-xs-3">
                                    <button onClick={cigaretteChangeHandlerDown} className={'btn-invet btn-default btn-minus ' + this.state.data.clickClassMinus}>
                                        <span className="glyphicon glyphicon-minus"></span>
                                        <span className="sr-only">Minus</span>
                                    </button>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="cigarette-amount">{this.state.data.dosage}</div>
                                </div>
                                <div className="col-md-3 col-xs-3">
                                    <button onClick={cigaretteChangeHandler} className={'btn-invet btn-default btn-plus pull-right ' + this.state.data.clickClassPlus}>
                                        <span className="glyphicon glyphicon-plus"></span>
                                        <span className="sr-only">Plus</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-12">
                            <div className="box">
                                <div className="cigarette-solution">
                                    <h4>TRY THESE NRTs<span className="red">*</span></h4>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-5 col-sm-4">
                                            <ReactCSSTransitionGroup component="div" className="solution-wrapper" transitionName="fade" transitionEnterTimeout={500} transitionLeave={false}>
                                                <div key={this.state.data.key} className="circle gum-amount">{this.state.data.gum}</div>
                                                <div className="solution-type"><b>Gum or Lozenge</b></div>
                                            </ReactCSSTransitionGroup>
                                        </div>
                                        <div className="col-lg-4 col-md-2 col-sm-4">
                                            <div className="and"></div>
                                        </div>
                                        <div className="col-lg-4 col-md-5 col-sm-4">
                                            <ReactCSSTransitionGroup component="div" className="solution-wrapper" transitionName="fade" transitionEnterTimeout={500} transitionLeave={false}>
                                                <div key={this.state.data.key} className="circle patch-amount">{this.state.data.patch}</div>
                                                <div className="solution-type"><b>Patch</b></div>
                                            </ReactCSSTransitionGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="small">*See NRT package inserts for complete dosing recommendations and talk to your health care provider.</p>
                        </div>
                    </div>
                </div>
                <ChewPanel showChew={showChew} />
            </div>
        )
    }
}

export default CigarettePanel;
