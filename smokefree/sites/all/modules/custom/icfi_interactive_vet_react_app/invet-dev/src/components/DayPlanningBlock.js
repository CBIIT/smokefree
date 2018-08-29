import React from 'react'

const DayPlanningBlock = (props) => {
  return (
    <div className="row">
        <div className="col-md-12">
            <h3>Planning Your Day</h3>
        </div>
        <div className="col-md-5">
            <div id="yourday">
            <p className="larger">{props.planningyourDay}</p>       
            </div>
            <div className="quote-block">
                <blockquote id="nrt-quote">
                     {props.quote}   
                </blockquote>
            </div>
        </div>
        <div className="col-md-6 col-md-offset-1">
            <img src={`${props.gifImage}`} className="img-responsive" alt="gif image"/>
        </div>
    </div> 
  )
}
export default DayPlanningBlock;