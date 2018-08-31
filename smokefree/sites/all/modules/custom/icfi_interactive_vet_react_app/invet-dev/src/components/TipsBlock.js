import React from 'react';
import { Component } from 'react';
import FlipCard from './FlipCard';


class TipsBlock extends Component {
    render() { 
        return (
            <div className="section_block">
                <div className="container">
                    <section className="row">
                        <div className="col-md-12">
                            <h2>Nicotine Facts</h2>
                        </div>
                        <div className="col-md-5">
                            <p className="larger">These facts about NRT may surprise you. Like the fact that NRT contains only purified nicotine and none of the other toxins found in tobacco. That way, you can safely reduce your dependence on nicotine. Click through to learn more facts about NRT.</p>
                        </div>
                        <FlipCard /> 
                    </section> 
                </div> 
            </div> 
        );
    }
}

export default TipsBlock;