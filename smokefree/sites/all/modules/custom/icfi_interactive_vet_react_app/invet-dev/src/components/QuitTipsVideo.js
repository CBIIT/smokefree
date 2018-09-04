import React from 'react'

const QuitTipsVideo = (props) => {
    const tips = props.quickTips;
    const tipList = tips.map((tip) =>{
        return (<li className="quit-tips-content">{tip}</li>);
    })
  return (
    <div className="row">
        <div className="col-md-6">
            <div className="quit-tips">
                <h3>Quit Tips</h3>
                <ul className="list-group" id="quit-tips-content">
                    {tipList}        
                </ul>
                <div class="selection-icons">
                        <div class="patch" style={{display: props.quitTipsIconPatch}}></div>
                        <div class="gum" style={{display: props.quitTipsIconGum}}></div>
                        <div class="lozenge" style={{display: props.quitTipsIconLozenge}}></div>
                        <div class="counseling" style={{display: props.quitTipsIconCounseling}}></div>
                </div>
            </div>
        </div> 
        <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe width="420" height="315" title="video to help you quit" src={props.videoUrl} frameborder="0" allowfullscreen></iframe>
            </div>
        </div> 
    </div>
  )
}
export default QuitTipsVideo;