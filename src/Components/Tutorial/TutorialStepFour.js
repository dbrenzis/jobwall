import React from 'react'


export default function TutorialStepFour(props) {
    const {settutorialStep, setChecked} = props

    const infoText = "Merke dir die Jobs und spare Zeit"

    const onClickHandle = () => {
        settutorialStep(5)
        setChecked(false)
    }


    return (
        <React.Fragment>
            <div className="position-fixed bg-absolventenkongress-blau" style={{top:0, height:"100%", width:"100%", opacity:"0.84"}}/>

            <div className="position-fixed d-flex justify-content-end w-100 ml-4" style={{top:"345px", paddingRight:"55px", zIndex:1}}>
                <div className="tutorialInfoboxright d-flex flex-column align-items-start font-weight-bold p-3">
                    <div className="text-body mb-2" >3/4</div>
                    <div className="text-body mb-2" style={{fontSize:"20px"}}>{infoText}</div>
                    <input onClick={onClickHandle} type="button" value="Weiter" className="bg-dark border-0 font-weight-bold text-white rounded px-5 py-2 mb-2" style={{fontSize:"15px"}}/>
                    <input onClick={() => settutorialStep(-1)} type="button" value="Tour Überspringen" className="border-0 bg-absolventenkongress-gelb font-weight-bold p-0" style={{textDecoration:"underline"}}/>
                </div>
            </div>
        </React.Fragment>
    )
}
