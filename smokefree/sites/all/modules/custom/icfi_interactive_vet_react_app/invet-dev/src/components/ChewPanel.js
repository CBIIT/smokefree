import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ChewPanel extends Component {
constructor() {
    super();
    this.state = {
        selections: ['Within 5 Minutes', '6-30 Minutes', '31-60 Minutes', 'After 60 Minutes'],
        data: {
            selection: 'Within 5 Minutes',
            gum: '2mg',
            patch: '21mg',
            amounts: '1'
        },
        currentAmount: '1',
        currentTime: '5 mins' 
    }
}


  render() {
    const calculatorData = {
            selections: ['Within 5 Minutes', '6-30 Minutes', '31-60 Minutes', 'After 60 Minutes'],
            withinFiveMinutes: {
                selection: 'Within 5 Minutes',
                amountOfCans: {
                    one: {
                        amount: '1',
                        gum: '2mg',
                        patch: '21mg'
                    },
                    twoToThree: {
                        amount: '2-3',
                        gum: '2mg',
                        patch: '21mg'
                    },
                    moreThanThree: {
                        amount: 'More than 3',
                        gum: '4mg',
                        patch: '21mg'
                    }
                }
            },
            sixToThirty: {
                selection: '6-30 Minutes',
                amountOfCans: {
                    one: {
                        amount: '1',
                        gum: '2mg',
                        patch: '14mg'
                    },
                    twoToThree: {
                        amount: '2-3',
                        gum: '2mg',
                        patch: '21mg'
                    },
                    moreThanThree: {
                        amount: 'More than 3',
                        gum: '2mg',
                        patch: '21mg'
                    }
                }
            },
            thirtyOneToSixty: {
                selection: '31-60 Minutes',
                amountOfCans: {
                    one: {
                        amount: '1',
                        gum: '2mg',
                        patch: '14mg'
                    },
                    twoToThree: {
                        amount: '2-3',
                        gum: '2mg',
                        patch: '14mg'
                    },
                    moreThanThree: {
                        amount: 'More than 3',
                        gum: '2mg',
                        patch: '21mg'
                    }
                }
            },
            afterSixty: {
                selection: 'After 60 Minutes',
                amountOfCans: {
                    one: {
                        amount: '1',
                        gum: '2mg',
                        patch: '14mg'
                    },
                    twoToThree: {
                        amount: '2-3',
                        gum: '2mg',
                        patch: '14mg'
                    },
                    moreThanThree: {
                        amount: 'More than 3',
                        gum: '2mg',
                        patch: '14mg'
                    }
                }
            },
        }

    const calculateNrt = (e) => {
        this.setState({
            currentTime: e.target.value
        })
        if(e.target.value === '5-mins' && this.state.amounts === '1') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(e.target.value === '5-mins' && this.state.amounts === '2-3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(e.target.value === '5-mins' && this.state.amounts === 'More than 3') {
            this.setState({
                data: {
                    gum: '4mg',
                    patch: '21mg'
                }
            })
        }
        if(e.target.value ==='6-30' && this.state.amounts === '1') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(e.target.value ==='6-30' && this.state.amounts === '2-3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(e.target.value ==='6-30' && this.state.amounts === 'More than 3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(e.target.value ==='31-60' && this.state.amounts === '1') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(e.target.value ==='31-60' && this.state.amounts === '2-3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(e.target.value ==='31-60' && this.state.amounts === 'More than 3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(e.target.value ==='After-60' && this.state.amounts === '1') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(e.target.value ==='After-60' && this.state.amounts === '2-3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(e.target.value ==='After-60' && this.state.amounts === 'More than 3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
    }

    const updateNRT = (amount) => {
        console.log(amount + " " + this.state.currentTime);
        if(this.state.currentTime === '5-mins' && amount === '1') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(this.state.currentTime === '5-mins' && amount === '2-3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(this.state.currentTime === '5-mins' && amount === 'More than 3') {
            this.setState({
                data: {
                    gum: '4mg',
                    patch: '21mg'
                }
            })
        }
        if(this.state.currentTime ==='6-30' && amount === '1') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(this.state.currentTime ==='6-30' && amount === '2-3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(this.state.currentTime ==='6-30' && amount === 'More than 3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(this.state.currentTime ==='31-60' && amount === '1') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(this.state.currentTime ==='31-60' && amount === '2-3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(this.state.currentTime ==='31-60' && amount === 'More than 3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '21mg'
                }
            })
        }
        if(this.state.currentTime ==='After-60' && amount === '1') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(this.state.currentTime ==='After-60' && amount === '2-3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
        if(this.state.currentTime ==='After-60' && amount === 'More than 3') {
            this.setState({
                data: {
                    gum: '2mg',
                    patch: '14mg'
                }
            })
        }
    }

    const updateAmountsUp = () => {
        if (this.state.amounts === '1') {
            this.setState({
                amounts: '2-3'
            })
        } else if (this.state.amounts === '2-3') {
            this.setState({
                amounts: 'More than 3'
            })
        } else {
            this.setState({
                amounts: '1'
            })
        }
        updateNRT(this.state.amounts);
    }

    const updateAmountsDown = () => {
        if (this.state.amounts === '1') {
            this.setState({
                amounts: 'More than 3'
            })
        } else if (this.state.amounts === '2-3') {
            this.setState({
                amounts: '1'
            })
        } else {
            this.setState({
                amounts: '2-3'
            }) 
        }
        console.log(this.state.amounts);
        updateNRT(this.state.amounts);
    }


   
    return (
        <div role="tabpanel" className="tab-pane active" id="smokeless">
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
                        <button onClick={updateAmountsDown} className="btn btn-default btn-minus">
                            <span className="glyphicon glyphicon-minus"></span>
                            <span className="sr-only">Minus</span>
                        </button>
                    </div>
                    <div className="col-xs-6">
                        <div className="smokeless-amount">{this.state.amounts}</div>
                    </div>
                    <div className="col-xs-3">
                        <button onClick={updateAmountsUp} className="btn btn-default btn-plus pull-right">
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
                    <select onChange={calculateNrt}>
                        <option className="select-item" value="5-mins">{calculatorData.selections[0]}</option>
                        <option className="select-item" value="6-30">{calculatorData.selections[1]}</option>
                        <option className="select-item" value="31-60">{calculatorData.selections[2]}</option>
                        <option className="select-item" value="After-60">{calculatorData.selections[3]}</option>
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
                                <ReactCSSTransitionGroup component="div" className="solution-wrapper" transitionName="fade" transitionEnterTimeout={500} transitionLeave={false}>
                                    <div key={this.state.data.gum} className="circle gum-amount">{this.state.data.gum}</div>
                                    <div className="solution-type"><b>Gum or Lozenge</b></div>
                                </ReactCSSTransitionGroup>
                            </div>
                            <div className="col-lg-4 col-md-2 col-sm-4">
                                <div className="and"></div>
                            </div>   
                            <div className="col-lg-4 col-md-5 col-sm-4">
                                <ReactCSSTransitionGroup component="div" className="solution-wrapper" transitionName="fade" transitionEnterTimeout={500} transitionLeave={false}>
                                    <div key={this.state.data.patch} className="circle patch-amount">{this.state.data.patch}</div>
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
