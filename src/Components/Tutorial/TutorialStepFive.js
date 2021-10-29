import React from 'react'

export default function TutorialStepFive(props) {
    const {settutorialStep, toggleBookmark, jobid} = props

    const infoText = "Suche wie du liebst. Ob Job, oder Unternehmen."

    const onClickHandle = () => {
        toggleBookmark(jobid)
        settutorialStep(-1)
    }


    return (
        <React.Fragment>
            <div className="position-fixed bg-absolventenkongress-blau" style={{top:0, height:"100%", width:"100%", opacity:"0.84"}}/>
            <div className="position-fixed w-100 " style={{top:"110px"}}>
                <div className="rounded bg-white mx-1" style={{height:"60px"}}/>
            </div>

            <div className="position-fixed d-flex d-flex justify-content-center w-100" style={{top:"190px"}}>
                <div className="tutorialInfobox rounded d-flex flex-column align-items-start font-weight-bold p-3" >
                    <div className="text-body mb-2" >4/4</div>
                    <div className="text-body mb-2" style={{fontSize:"20px"}}>{infoText}</div>
                    <input onClick={onClickHandle} type="button" value="Tour beenden" className="bg-dark border-0 font-weight-bold text-white rounded px-5 py-2 mb-2" style={{fontSize:"15px"}}/>
                </div>
            </div>
        </React.Fragment>
    )
}
