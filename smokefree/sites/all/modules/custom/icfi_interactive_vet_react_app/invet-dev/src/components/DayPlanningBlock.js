import React from 'react'

const DayPlanningBlock = (props) => {
  return (
      <div>
        <div class="row">
            <div class="col-md-6">
                <h3>Planning Your Day</h3>
                <div class="selection-icons">
                    <div class="patch" style={{display: props.quitTipsIconPatch}}></div>
                    <div class="gum" style={{display: props.quitTipsIconGum}}></div>
                    <div class="lozenge" style={{display: props.quitTipsIconLozenge}}></div>
                    <div class="counseling" style={{display: props.quitTipsIconCounseling}}></div>
                </div>
            </div>
        </div>
        <div class="row">
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
        </div>
  )
}
export default DayPlanningBlock;