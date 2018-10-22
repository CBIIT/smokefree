import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class FlipCard extends Component {
    constructor() {
        super();
        this.stateFront = {
            tips:{
                tipId: 1, 
                tipTitle: 'NRT works.', 
                tipText: 'When used as directed, NRT can double your chances of quitting for good.',
                buttonText: 'NEXT FACT',
                counter: 1,
                next: 2
            }
        }
        this.stateBack = {
            tips:{
                tipId: 2, 
                tipTitle: 'NRT helps with tough cravings.', 
                tipText: 'The worst withdrawal symptoms usually last only a few days to a couple of weeks. NRT can help make these symptoms less intense.', 
                buttonText: 'NEXT FACT',
                counter: 2,
                next: 3
            }
        }
    }
  render() {
    const tipsData = {
        tips:[
            {
                tipId: 1, 
                tipTitle: 'NRT works.', 
                tipText: 'When used as directed, NRT can double your chances of quitting for good.',
                buttonText: 'NEXT FACT',
                next: 2
            },
            {
                tipId: 2, 
                tipTitle: 'NRT helps with tough cravings.', 
                tipText: 'The worst withdrawal symptoms usually last only a few days to a couple of weeks. NRT can help make these symptoms less intense.', 
                buttonText: 'NEXT FACT',
                next: 3
            },
            {
                tipId: 3, 
                tipTitle: 'Combining NRT improves your chances of staying quit.', 
                tipText: 'NRT products can be used safely together. Try a long-acting patch with a short-acting lozenge or gum to fight off cravings.', 
                buttonText: 'NEXT FACT',
                next: 4
            },
            {
                tipId: 4, 
                tipTitle: 'It’s OK if you slip up.', 
                tipText: 'It is safe to continue using NRT even if you slip and smoke one or two cigarettes. Staying on NRT increases your chances of getting back on track for quitting.', 
                buttonText: 'NEXT FACT',
                next: 5
            },
            {
                tipId: 5, 
                tipTitle: 'NRT is safe.', 
                tipText: 'Research shows that NRT is safe and effective for almost all adults. Pregnant women, teens, and people with serious health issues should talk to their doctor before using NRT.', 
                buttonText: 'NEXT FACT',
                next: 6
            },
            {
                tipId: 6, 
                tipTitle: 'NRT is available over the counter.', 
                tipText: 'NRT is so safe, it doesn’t require a doctor’s prescription.',
                buttonText: 'NEXT FACT',
                next: 7
            },
            {
                tipId: 7, 
                tipTitle: 'NRT is designed to prevent addiction.', 
                tipText: 'NRT is far less addictive than tobacco because it delivers less nicotine at a slower rate. Most people can taper down and stop using NRT after a few months.',
                buttonText: 'START OVER',
                next: 1
            },
        ]
    }

    const nextFact = (e) => {
        if(this.stateFront.tips.tipId <= 6) {
            this.setState({
                tips: tipsData.tips[0 + this.stateFront.tips.tipId],
            })
        } else {
            this.setState({
                tips: tipsData.tips[0]
            })
        }
    }
        

    return (
        <div className="col-md-6 col-md-offset-1">
        <div id="flip-card">
            <ReactCSSTransitionGroup component="div" className="card" transitionName="flip" transitionEnterTimeout={300} transitionLeave={false}>
                <div key={this.stateFront.tips.tipId} className="front">
                    <div className="ticker">
                        FACT <span className="flip-card-current">{this.stateFront.tips.tipId}</span>/<span className="flip-card-total">7</span>
                    </div> 
                    <div className="flip-card-wrapper">
                        <h3 className="flip-card-title">{this.stateFront.tips.tipTitle}</h3>
                        <p className="flip-card-content">{this.stateFront.tips.tipText}</p>
                    </div> 
                    <button onClick={nextFact} className={'btn-invet btn-default btn-center btn-flip fact_' + this.stateFront.tips.next}>{this.stateFront.tips.buttonText}</button>
                </div> 


                <div key={this.stateBack.tips.tipId} className="back">
                    <div className="ticker">
                        FACT <span className="flip-card-current">{this.stateBack.tips.tipId}</span>/<span className="flip-card-total">7</span>
                    </div> 
                    <div className="flip-card-wrapper">
                        <h3 className="flip-card-title">{this.stateBack.tips.tipTitle}</h3>
                        <p className="flip-card-content">{this.stateBack.tips.tipText}</p>
                    </div> 
                    <button onClick={nextFact} className={'btn-invet btn-default btn-center btn-flip fact_' + this.stateBack.tips.next}>{this.stateBack.tips.buttonText}</button>
                </div> 
            </ReactCSSTransitionGroup> 
        </div> 
    </div>
    )
  }
}

export default FlipCard;