import React from 'react'

const TherapySelection = (props) => {
    const selections = props.youSelected;
    const selectionList = selections.map(selection => {
        return (
            
            <div id="facts">
                <h4 className={`${selection.iconPath}`}>{selection.title}</h4>
                <p>{selection.text}</p>
            </div>
        )
    })
  return (
    <div className="col-md-4">
        <div className="box">
        <hr />
            <h3>You Selected this Therapy:</h3>
            <br />
            {selectionList}
            {props.showButton ? (<a href={props.factsSheetUrl} className="btn-invet btn-default btn-center" style={{ color: 'white', backgroundColor: 'rgb(8, 117, 153)' }}>Download a Fact Sheet</a>) : null}
        </div> 
    </div>
  )
  
}
export default TherapySelection;