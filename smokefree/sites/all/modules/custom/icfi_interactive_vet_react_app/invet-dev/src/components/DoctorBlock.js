import React from 'react';

const DoctorBlock = () => {
    return (
        <div className="section_block">
            <div className="container">
                <section className="row">
                    <div className="col-md-12">
                        <h2>Talk to Your Doctor</h2>
                    </div> 
                    <div className="col-md-6">
                        <p>Talk with your healthcare provider about the best NRT or other tobacco cessation medication for you. It will be based on your experiences with medications in the past, how much you currently smoke, dip, or chew; and any other medical conditions you have.</p>
                        <p>Your doctor may recommend prescription medicines such as bupropion (Zyban®/Wellbutrin®) or varenicline (CHANTIX®) to help you quit. These medications do not contain nicotine, but they can reduce your urge to smoke.</p>
                        <p>Call 1-855-QUIT-VET (1-855-784-8838), VA’s <a href="#">smoking quitline</a> for veterans, to speak with a tobacco cessation counselor Monday–Friday. Counseling is available in English and Spanish.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/talk-to-your-dr.jpg" className="img-responsive" alt="Talk to your doctor about NRT and your health" />
                    </div>
                </section>
            </div> 
        </div> 
    );
}

export default DoctorBlock;