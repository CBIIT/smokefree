import React, { Component } from 'react';
import './FlipCard.css'
import {Row, Col} from 'react-bootstrap/lib';


class FlipCard extends Component {
    constructor() {
        super();
        this.state = {
            tips:{
                tipId: 1, 
                tipTitle: 'Be Kind', 
                tipText: 'Doing something nice for others helps reduce your stress.',
                buttonText: 'NEXT FACT',
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
                tipTitle: 'Be Kind', 
                tipText: 'Doing something nice for others helps reduce your stress.',
                buttonText: 'NEXT FACT',
                next: 2,
                flipped: 0
            },
            {
                tipId: 2, 
                tipTitle: 'Lorem Ipsum 2', 
                tipText: 'Maecenas aliquet libero in erat congue, sed volutpat nisi ultrices. ', 
                buttonText: 'NEXT FACT',
                next: 3,
                flipped: 1
            },
            {
                tipId: 3, 
                tipTitle: 'Lorem Ipsum 3', 
                tipText: 'NMorbi vel neque vitae magna rutrum congue non eu ligula.', 
                buttonText: 'NEXT FACT',
                next: 4,
                flipped: 1
            },
            {
                tipId: 4, 
                tipTitle: 'Lorem Ipsum 4', 
                tipText: 'Suspendisse pulvinar vestibulum nisl sit amet vehicula.', 
                buttonText: 'NEXT FACT',
                next: 5,
                flipped: 1
            },
            {
                tipId: 5, 
                tipTitle: 'Lorem Ipsum 5', 
                tipText: 'Mauris maximus leo purus, nec faucibus velit elementum eget.', 
                buttonText: 'START OVER',
                next: 6,
                flipped: 1
            },
           
        ]
    }

    const nextFact = (e) => {
        
        if(this.state.tips.tipId <= 4) {
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
                        <Col className="removePadding" xs={8}><h3 className="flip-card-title">{this.state.tips.tipTitle}</h3></Col>
                        <Col className="removePadding" xs={4}>
                        <div className="ticker">
                        FACT <span className="flip-card-current">{this.state.tips.tipId}</span>/<span className="flip-card-total">5</span>
                        </div> 
                        </Col>
                    </Row>
                    <Row >
                        <Col className="removePadding" xs={12}>
                        <p className="flip-card-content">{this.state.tips.tipText}</p>
                        </Col>
                    </Row>
                    </div> 
                    <a onClick={nextFact} className="button"><span className="buttonText">{this.state.tips.buttonText}</span></a>
                </div> 
             
            </div> 
        </div> 
    
    )
  }
}

export default FlipCard;
