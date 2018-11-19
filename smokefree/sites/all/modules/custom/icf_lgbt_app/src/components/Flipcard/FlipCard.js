import React, { Component } from 'react';
import './FlipCard.css'
import {Row, Col} from 'react-bootstrap/lib';


class FlipCard extends Component {
    constructor() {
        super();
        this.state = {
            tips:{
                tipId: 1, 
                tipTitle: 'Take 5 Deep Breaths', 
                tipText: 'Breathe slowly\u2014in through your nose, out through your mouth.',
                buttonText: 'NEXT STRESS TIP',
                counter: 1,
                next: 2,
                flipped: 0
            }
        }
    }
  render() {
    const tipsData = {
        tips:[
            {
                tipId: 1, 
                tipTitle: 'Take 5 Deep Breaths', 
                tipText: 'Breathe slowly\u2014in through your nose, out through your mouth.',
                buttonText: 'NEXT STRESS TIP',
                next: 2,
                flipped: 1
            },
            {
                tipId: 2, 
                tipTitle: 'Talk to a Friend', 
                tipText: 'You don’t have to deal with tough times alone.', 
                buttonText: 'NEXT STRESS TIP',
                next: 3,
                flipped: 1
            },
            {
                tipId: 3, 
                tipTitle: 'Break a Sweat', 
                tipText: 'Exercise releases endorphins, which naturally boost your mood.', 
                buttonText: 'NEXT STRESS TIP',
                next: 4,
                flipped: 1
            },
            {
                tipId: 4, 
                tipTitle: 'Treat Yourself', 
                tipText: 'Enjoy a hot bath, your favorite meal, or something else you love.', 
                buttonText: 'NEXT STRESS TIP',
                next: 5,
                flipped: 1
            },
            {
                tipId: 5, 
                tipTitle: 'Write it Down', 
                tipText: 'Journaling can reduce stress\u2014try focusing on the positive.', 
                buttonText: 'NEXT STRESS TIP',
                next: 6,
                flipped: 1
            },
            {
                tipId: 6, 
                tipTitle: 'Laugh Out Loud', 
                tipText: 'Watch funny YouTube videos when you need a good laugh.', 
                buttonText: 'NEXT STRESS TIP',
                next: 7,
                flipped: 1
            },
            {
                tipId: 7, 
                tipTitle: 'Stay in the Moment', 
                tipText: 'Practice mindfulness with a guided meditation app.', 
                buttonText: 'START OVER',
                next: 1,
                flipped: 1
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
       
        <div id="flip-card">
           
            <div className="card">
                <div key={this.state.tips.tipId} className={`front ${this.state.tips.flipped == 0? '':'flip'}`}>
                    
                    <div className="flip-card-wrapper">
                    <Row>
                        <Col className="removePadding" xs={9}><h3 className="flip-card-title">{this.state.tips.tipTitle}</h3></Col>
                        <Col className="removePadding" xs={3}>
                        <div className="ticker">
                        TIP <span className="flip-card-current">{this.state.tips.tipId}</span>/<span className="flip-card-total">7</span>
                        </div> 
                        </Col>
                    </Row>
                    <Row >
                        <Col className="removePadding" xs={12}>
                        <p className="flip-card-content">{this.state.tips.tipText}</p>
                        </Col>
                    </Row>
                    </div> 
                    <a onClick={nextFact} className={'button btn-invet btn-default btn-center btn-flip tip-' + this.state.tips.tipId}>
                    <div className="button-transition">
                    <span className="buttonText">{this.state.tips.buttonText}</span>
                    </div></a>
                </div> 
             
            </div> 
        </div> 
    
    )
  }
}

export default FlipCard;
