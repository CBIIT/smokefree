import React, { Component } from 'react'

class FlipCard extends Component {
    constructor() {
        super();
        this.state = {
            tips:{
                tipId: 1, 
                tipTitle: 'NRT works.', 
                tipText: 'NRT can double a smoker’s chances of quitting smoking for good.', 
                buttonText: 'NEXT FACT',
                counter: 1
            }
        }
    }
  render() {
    const tipsData = {
        tips:[
            {
                tipId: 1, 
                tipTitle: 'NRT works.', 
                tipText: 'NRT can double a smoker’s chances of quitting smoking for good.', 
                buttonText: 'NEXT FACT'
            },
            {
                tipId: 2, 
                tipTitle: 'NRT helps with tough cravings.', 
                tipText: 'The worst withdrawal symptoms usually last only a few days to a couple of weeks. NRT can help make these symptoms less intense.', 
                buttonText: 'NEXT FACT'
            },
            {
                tipId: 3, 
                tipTitle: 'Combining NRT improves your chances of staying quit.', 
                tipText: 'NRT products can be used safely together. Try a long-acting patch with a short-acting lozenge or gum to fight off cravings.', 
                buttonText: 'NEXT FACT'
            },
            {
                tipId: 4, 
                tipTitle: 'It’s OK if you slip up.', 
                tipText: 'It is safe to continue using NRT even if you slip and smoke one or two cigarettes. Staying on NRT increases your chances of getting back on track for quitting.', 
                buttonText: 'NEXT FACT'
            },
            {
                tipId: 5, 
                tipTitle: 'NRT is safe.', 
                tipText: 'Research shows that NRT is safe and effective for almost all adults. Pregnant women, teens, and people with serious health issues should talk to their doctor before using NRT.', 
                buttonText: 'NEXT FACT'
            },
            {
                tipId: 6, 
                tipTitle: 'NRT is available over the counter.', 
                tipText: 'NRT is so safe, it doesn’t require a doctor’s prescription.',
                buttonText: 'NEXT FACT'
            },
            {
                tipId: 7, 
                tipTitle: 'NRT is designed to prevent addiction.', 
                tipText: 'NRT delivers far less nicotine than cigarettes or smokeless tobacco products do, and much more slowly. This makes it less addictive. Most people find it easy to get off nicotine medicines after a few months.', 
                buttonText: 'START OVER'
            },
        ]
    }

    const nextFact = (e) => {
        if(this.state.tips.tipId <= 6) {
            this.setState({
                tips: tipsData.tips[0 + this.state.tips.tipId],
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
            <div className="card">
                <div className="front">
                    <div className="ticker">
                        FACT <span className="flip-card-current">{this.state.tips.tipId}</span>/<span className="flip-card-total">7</span>
                    </div> 
                    <div className="flip-card-wrapper">
                        <h3 className="flip-card-title">{this.state.tips.tipTitle}</h3>
                        <p className="flip-card-content">{this.state.tips.tipText}</p>
                    </div> 
                    <button onClick={nextFact} className="btn btn-default btn-center btn-flip">{this.state.tips.buttonText}</button>
                </div> 
                <div className="back">
                    <div className="ticker">
                        FACT <span className="flip-card-current"></span>/<span className="flip-card-total">7</span>
                    </div> 
                    <div className="flip-card-wrapper">
                        <h3 className="flip-card-title"></h3>
                        <p className="flip-card-content"></p>
                    </div> 
                    <button className="btn btn-default btn-center btn-flip">NEXT FACT</button>
                </div>
            </div> 
        </div> 
    </div>
    )
  }
}

export default FlipCard;