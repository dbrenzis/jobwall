import React from 'react'

export default function TutorialStepThree(props) {
    
    const {withButtons, settutorialStep, toggleBookmark, jobid} = props

    const infoText = "Merke dir die Jobs und spare Zeit"

    const onClickHandle = () => {
        toggleBookmark(jobid)
        settutorialStep(3)
    }

    const buttons =  
    (
        <React.Fragment>
            <input onClick={onClickHandle} type="button" value="Weiter" className="bg-dark border-0 font-weight-bold text-white rounded px-5 py-2 mb-2" style={{fontSize:"15px"}}/>
            <input onClick={() => settutorialStep(-1)} type="button" value="Tour Überspringen" className="border-0 bg-absolventenkongress-gelb font-weight-bold p-0" style={{textDecoration:"underline"}}/>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <div className="position-fixed bg-absolventenkongress-blau" style={{top:0, height:"100%", width:"100%", opacity:"0.84"}}/>
            <div className="position-fixed w-75 px-2 " style={{top:"50px"}}>
                <div className="arrow_box-right rounded font-weight-bold p-3" style={{height:"80px", fontSize:"20px"}}>Hier befinden sich alle germekten Jobs</div>
            </div>
            <div className="position-fixed w-100 px-2" style={{top:"200px"}}>
                <div className="rounded bg-white" style={{height:"120px"}}/>
            </div>

            <div className="position-fixed d-flex justify-content-end w-100 ml-4" style={{top:"345px", paddingRight:"55px"}}>
                <div className="tutorialInfoboxright d-flex flex-column align-items-start font-weight-bold p-3" >
                    <div className="text-body mb-2" >3/4</div>
                    <div className="text-body mb-2" style={{fontSize:"20px"}}>{infoText}</div>
                    {withButtons && buttons}
                </div>
            </div>
        </React.Fragment>
    )
}

