import React, { Component } from 'react';
import './App.css';


import DoctorBlock from './components/DoctorBlock';
import Hero from './components/Hero';
import MainAPP from './components/MainApp';
import TipsBlock from './components/TipsBlock';

class App extends Component {
  render() {
    return (
      <div className="invet-app">
        <main id="main-content" role="main" tabIndex="-1">
          <div className="container">
            <Hero />
            <div className="section_block nicotine_replacement">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Choose Your Nicotine Replacement Therapy</h2>
                  </div> 
                </div> 
              </div> 
            </div>
            <MainAPP />
            <TipsBlock />
            <DoctorBlock />
            </div>
        </main>
      </div>
    );
  }
}

export default App;
