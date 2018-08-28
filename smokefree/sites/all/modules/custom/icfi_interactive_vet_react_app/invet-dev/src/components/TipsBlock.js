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
                            <p className="larger">These facts about nicotine replacement therapy may surprise you. They may also encourage you to try NRT to see if it’s right for you. Even if you tried NRT before, it might be worth trying again.</p>
                        </div>
                        <FlipCard /> 
                    </section> 
                </div> 
            </div> 
        );
    }
}

export default TipsBlock;