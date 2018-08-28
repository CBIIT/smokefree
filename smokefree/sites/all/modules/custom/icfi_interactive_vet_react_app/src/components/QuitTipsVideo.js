import React from 'react'

const QuitTipsVideo = (props) => {
    const tips = props.quickTips;
    const tipList = tips.map((tip) =>{
        return (<li>{tip}</li>);
    })
  return (
    <div className="row">
        <div className="col-md-6">
            <div className="quit-tips">
                <h3>Quit Tips</h3>
                <ul className="list-group" id="quit-tips-content">
                    {tipList}        
                </ul>
            </div>
        </div> 
        <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={`${props.videoUrl}`}></iframe>
            </div>
        </div> 
    </div>
  )
}
export default QuitTipsVideo;