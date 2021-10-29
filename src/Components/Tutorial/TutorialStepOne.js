import React from 'react'

export default function TutorialStepOne(props) {

    const {selection, settutorialStep} = props

    const infoText = selection.length > 0 ? `Du hast die Vorauswahl ${selection[0]} getroffen.` : "Filter nach Branchen und passe deine Treffer an."

    return (
        <React.Fragment>
            <div className="position-fixed bg-absolventenkongress-blau" style={{top:0, height:"100%", width:"100%", opacity:"0.84"}}/>
            <div className="position-fixed row no-gutters w-100 pl-2" style={{top:"65px"}}>
                <div className="col-10 rounded bg-white " style={{height:"50px"}}/>
            </div>
            <div className="position-fixed d-flex d-flex justify-content-center w-100" style={{top:"140px"}}>
                <div className="tutorialInfobox rounded d-flex flex-column align-items-start font-weight-bold p-3" >
                    <div className="text-body mb-2" >1/4</div>
                    <div className="text-body mb-2" style={{fontSize:"20px"}}>{infoText}</div>
                    <input onClick={() => settutorialStep(1)} type="button" value="Weiter" className="bg-dark border-0 font-weight-bold text-white rounded px-5 py-2 mb-2" style={{fontSize:"15px"}}/>
                    <input onClick={() => settutorialStep(-1)} type="button" value="Tour Überspringen" className="border-0 bg-absolventenkongress-gelb font-weight-bold p-0" style={{textDecoration:"underline"}}/>
                </div>
            </div>
        </React.Fragment>
    )
}
