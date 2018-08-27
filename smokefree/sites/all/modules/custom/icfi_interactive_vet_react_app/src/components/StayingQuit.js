import React from 'react'

const StayingQuit = (props) => {
  return (
    <div className="col-md-8">
        <div className="row">
            <div className="col-md-12">
                <h3>Your Chances of Staying Quit…</h3>
            </div>
            <div className="col-md-5 col-sm-6">
                <div id="chances">
                     <p className="larger">You are up to <strong>{props.times}</strong> more likely to stay quit.</p> <p className="larger">{props.paragraphTwo} </p>        
                </div>
            </div>
            <div className="col-md-7 col-sm-6">
                <div id="emoji">
                    <img src={`${props.face}`} alt="Emoji Placeholder" className="img-responsive"/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default StayingQuit;
