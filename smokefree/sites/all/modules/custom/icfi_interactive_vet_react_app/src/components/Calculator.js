import React, { Component } from 'react'

import CigarettePanel from './CigarettePanel';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            showCigarettes: true,
            cigPanel: 'active',
            chewPanel: null
        }
    } 
    
  render() {
    const cigPane = () => {
        this.setState({
            showCigarettes: true,
            cigPanel: 'active',
            chewPanel: null
        });
    }
    const chewPane = () => {
        this.setState({
            showCigarettes: false, 
            cigPanel: null, 
            chewPanel: 'active'
        });
    }
    return (
        <div className="row">
                <div className="col-md-12">
                    <div className="dosage">
                        <p></p>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nonactive"><b>Do You…</b></li>
                            <li role="presentation" className={this.state.cigPanel}><a onClick={cigPane} style={{cursor:'pointer'}} aria-controls="cigarettes" role="tab" data-toggle="tab">Smoke Cigarettes?</a></li>
                            <li role="presentation" className={this.state.chewPanel}><a onClick={chewPane} style={{cursor:'pointer'}} aria-controls="smokeless" role="tab" data-toggle="tab">Dip or Chew Tobacco?</a></li>
                        </ul>
                        <CigarettePanel showCigarettes={this.state.showCigarettes} />
                    </div>
                </div>
            </div>
    )
  }
}

export default Calculator;
