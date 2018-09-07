import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ChewPanel extends Component {
    constructor() {
        super();
        this.state = {
            selections: ['Within 5 Minutes', '6-30 Minutes', '31-60 Minutes', 'After 60 Minutes'],
            data: {
                gum: '2mg',
                patch: '21mg',
                key: 0
            },
            amounts: '1',
            currentAmount: '1',
            clickClassNext: '2-3_cans_per_week',
            clickClassPrev: 'morethan3_cans_per_week',
            currentTime: '5-mins',
            amountsList: ['1', '2-3', 'More than 3']
        }
    }


    render() {

        const calculateNrt = (e) => {
            this.setState({
                currentTime: e.target.value
            })
            if(e.target.value === '5-mins' && this.state.amounts === '1') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 1
                    }
                })
            }
            if(e.target.value === '5-mins' && this.state.amounts === '2-3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 2
                    }
                })
            }
            if(e.target.value === '5-mins' && this.state.amounts === 'More than 3') {
                this.setState({
                    data: {
                        gum: '4mg',
                        patch: '21mg',
                        key: 3
                    }
                })
            }
            if(e.target.value ==='6-30' && this.state.amounts === '1') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 4
                    }
                })
            }
            if(e.target.value ==='6-30' && this.state.amounts === '2-3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 5
                    }
                })
            }
            if(e.target.value ==='6-30' && this.state.amounts === 'More than 3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 6
                    }
                })
            }
            if(e.target.value ==='31-60' && this.state.amounts === '1') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 8
                    }
                })
            }
            if(e.target.value ==='31-60' && this.state.amounts === '2-3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 77
                    }
                })
            }
            if(e.target.value ==='31-60' && this.state.amounts === 'More than 3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 7
                    }
                })
            }
            if(e.target.value ==='After-60' && this.state.amounts === '1') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 9
                    }
                })
            }
            if(e.target.value ==='After-60' && this.state.amounts === '2-3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 10
                    }
                })
            }
            if(e.target.value ==='After-60' && this.state.amounts === 'More than 3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 11
                    }
                })
            }
        }

        const updateNRT = (amount) => {
             if(this.state.currentTime === '5-mins' && amount === '1') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 12
                    }
                })
            }
            if(this.state.currentTime === '5-mins' && amount === '2-3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 13
                    }
                })
            }
            if(this.state.currentTime === '5-mins' && amount === 'More than 3') {
                this.setState({
                    data: {
                        gum: '4mg',
                        patch: '21mg',
                        key: 14
                    }
                })
            }
            if(this.state.currentTime ==='6-30' && amount === '1') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 15
                    }
                })
            }
            if(this.state.currentTime ==='6-30' && amount === '2-3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 16
                    }
                })
            }
            if(this.state.currentTime ==='6-30' && amount === 'More than 3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 17
                    }
                })
            }
            if(this.state.currentTime ==='31-60' && amount === '1') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 18
                    }
                })
            }
            if(this.state.currentTime ==='31-60' && amount === '2-3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 19
                    }
                })
            }
            if(this.state.currentTime ==='31-60' && amount === 'More than 3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '21mg',
                        key: 20
                    }
                })
            }
            if(this.state.currentTime ==='After-60' && amount === '1') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 21
                    }
                })
            }
            if(this.state.currentTime ==='After-60' && amount === '2-3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 22
                    }
                })
            }
            if(this.state.currentTime ==='After-60' && amount === 'More than 3') {
                this.setState({
                    data: {
                        gum: '2mg',
                        patch: '14mg',
                        key: 23
                    }
                })
            }
        }

        const updateAmountsUp = () => {
            if (this.state.amounts === '1') {
                var nextAmount = '2-3';
                this.setState({
                    amounts: '2-3',
                    currentAmount:'2-3',
                    clickClassNext: 'morethan3_cans_per_week',
                    clickClassPrev: '1_cans_per_week',
                })

            }  if (this.state.amounts === '2-3') {
                var nextAmount = 'More than 3';
                this.setState({
                    amounts: 'More than 3',
                    currentAmount:'More than 3',
                    clickClassNext: '1_cans_per_week',
                    clickClassPrev: '2-3_cans_per_week',
                })

            } if (this.state.amounts === 'More than 3') {
                var nextAmount = '1';
                this.setState({
                    amounts: '1',
                    currentAmount:'1',
                    clickClassNext: '2-3_cans_per_week',
                    clickClassPrev: 'morethan3_cans_per_week',
                })
            }
            updateNRT(nextAmount);
        }

        const updateAmountsDown = () => {
            if (this.state.amounts === '1') {
                var prevAmount = 'More than 3';
                this.setState({
                    amounts: 'More than 3',
                    currentAmount:'More than 3',
                    clickClassPrev: '2-3_cans_per_week',
                    clickClassNext: '1_cans_per_week',
                })
            } if (this.state.amounts === '2-3') {
                var prevAmount = '1';
                this.setState({
                    amounts: '1',
                    currentAmount:'1',
                    clickClassPrev: 'morethan3_cans_per_week',
                    clickClassNext: '2-3_cans_per_week',
                })
            } if (this.state.amounts === 'More than 3'){
                var prevAmount = '2-3';
                this.setState({
                    amounts: '2-3',
                    currentAmount:'2-3',
                    clickClassPrev: '1_cans_per_week',
                    clickClassNext: 'morethan3_cans_per_week',
                })
            }
            updateNRT(prevAmount);
        }


        return (
            <div role="tabpanel" className="tab-pane active" id="smokeless" style={{display: this.props.showChew ? 'block' : 'none' }}>
                <div className="row">
                    <div className="col-lg-8">
                        <h3>Estimate Your Nicotine Dosage</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-6 col-sm-offset-3">
                        <p className="larger">How many cans/pouches do you use per week?</p>
                        <div className="spacer-10"></div>
                        <div className="row">
                            <div className="col-xs-3">
                                <button onClick={updateAmountsDown.bind(this)} className={'btn-invet btn-default btn-minus ' + this.state.clickClassPrev}>
                                    <span className="glyphicon glyphicon-minus"></span>
                                    <span className="sr-only">Minus</span>
                                </button>
                            </div>
                            <div className="col-xs-6">
                                <div className="smokeless-amount">{this.state.currentAmount}</div>
                            </div>
                            <div className="col-xs-3">
                                <button onClick={updateAmountsUp.bind(this)} className={'btn-invet btn-default btn-plus pull-right ' + this.state.clickClassNext}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                    <span className="sr-only">Plus</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-6 col-sm-offset-3">
                        <div className="form-group">
                            <label className="larger">How soon after you wake up do you place your first dip?</label>
                            <div className="form-check">
                                <select style={{margin: 'auto'}} onChange={calculateNrt.bind(this)}>
                                    <option className="select-item 5-minutes" value="5-mins">{this.state.selections[0]}</option>
                                    <option className="select-item 6-30minutes" value="6-30">{this.state.selections[1]}</option>
                                    <option className="select-item 31-60minutes" value="31-60">{this.state.selections[2]}</option>
                                    <option className="select-item after-60minutes" value="After-60">{this.state.selections[3]}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-12">
                        <div className="box">
                            <div className="smokeless-solution">
                                <h4>TRY THESE NRTs<span className="red">*</span></h4>
                                <div className="row">
                                    <div className="col-lg-4 col-md-5 col-sm-4">
                                        <ReactCSSTransitionGroup component="div" className="solution-wrapper" transitionName="fade" transitionEnterTimeout={100} transitionLeave={false}>
                                            <div key={this.state.data.key} className="circle gum-amount">{this.state.data.gum}</div>
                                            <div className="solution-type"><b>Gum or Lozenge</b></div>
                                        </ReactCSSTransitionGroup>
                                    </div>
                                    <div className="col-lg-4 col-md-2 col-sm-4">
                                        <div className="and"></div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 col-sm-4">
                                        <ReactCSSTransitionGroup component="div" className="solution-wrapper" transitionName="fade" transitionEnterTimeout={100} transitionLeave={false}>
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
        )
    }
}

export default ChewPanel;
