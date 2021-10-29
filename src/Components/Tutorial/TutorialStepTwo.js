import React from 'react'

export default function TutorialStepTwo(props) {
    const {settutorialStep} = props

    const infoText = "Die Farbe markiert die passende Branche."

    return (
        <React.Fragment>
            <div className="position-fixed bg-absolventenkongress-blau" style={{top:0, height:"100%", width:"100%", opacity:"0.84"}}/>
            <div className="position-fixed w-100 px-2 " style={{top:"200px"}}>
                <div className="rounded bg-white" style={{height:"120px"}}/>
            </div>

            <div className="position-fixed d-flex w-100 ml-4" style={{top:"345px"}}>
                <div className="tutorialInfoboxleft d-flex flex-column align-items-start font-weight-bold p-3" >
                    <div className="text-body mb-2" >2/4</div>
                    <div className="text-body mb-2" style={{fontSize:"20px"}}>{infoText}</div>
                    <input onClick={() => settutorialStep(2)} type="button" value="Weiter" className="bg-dark border-0 font-weight-bold text-white rounded px-5 py-2 mb-2" style={{fontSize:"15px"}}/>
                    <input onClick={() => settutorialStep(-1)} type="button" value="Tour Überspringen" className="border-0 bg-absolventenkongress-gelb font-weight-bold p-0" style={{textDecoration:"underline"}}/>
                </div>
            </div>
        </React.Fragment>
    )
}
