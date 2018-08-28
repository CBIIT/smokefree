import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="first">Quit for Good with Nicotine Replacement Therapy</h1>
                </div> 
            </div> 
            <section className="row">
                <div className="col-md-6">
                    <p>Nicotine replacement therapy (NRT) is safe, effective, and the most commonly used family of quit-tobacco medications. It reduces withdrawal feelings by providing nicotine—but none of the dangerous chemicals that you’re exposed to when you use tobacco. NRT delivers far less nicotine than cigarettes or smokeless tobacco products do, and much more slowly. This makes it less addictive. Most people find it easy to get off nicotine medicines after a few months.</p>
                    
                    <p>Nicotine medicines are proven to increase your chances of quitting, but they won’t completely take away the urge to smoke. For best results, carefully follow the directions for using NRT. Use a high enough dose, and use the medicine for the recommended time (2–4 months). Combining NRT with counseling can improve your chances of quitting and staying quit.</p>
                </div> 
                <div className="col-md-6">
                    <img src="/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/quit-with-nrt.jpg" className="img-responsive" alt="Quitting with NRT is safe and effective." />
                </div> 
            </section> 
        </div>
    );
}

export default Hero;