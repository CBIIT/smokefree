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
                            <li role="presentation" className={this.state.cigPanel}><a onClick={cigPane} style={{cursor:'pointer'}} aria-controls="cigarettes" role="tab" data-toggle="tab"><span className="tab-text">Smoke Cigarettes?</span></a></li>
                            <li role="presentation" className={this.state.chewPanel}><a onClick={chewPane} style={{cursor:'pointer'}} aria-controls="smokeless" role="tab" data-toggle="tab"><span className="tab-text">Dip or Chew Tobacco?</span></a></li>
                        </ul>
                        <CigarettePanel showCigarettes={this.state.showCigarettes} />
                    </div>
                </div>
            </div>
    )
  }
}

export default Calculator;
