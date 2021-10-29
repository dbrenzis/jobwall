import React, {useContext} from 'react'
import {CompanyWJobsContext} from '../Context/CompanyWJobsContext'

import TutorialStepOne from './TutorialStepOne'
import TutorialStepTwo from './TutorialStepTwo'
import TutorialStepThree from './TutorialStepThree'
import TutorialStepFour from './TutorialStepFour'
import TutorialStepFive from './TutorialStepFive'

export default function Tutorial(props) {

    const {tutorialStep ,settutorialStep, setChecked} = props
    const {selection, jobList, toggleBookmark} = useContext(CompanyWJobsContext)


    let tutorialOutput = null    
    switch (tutorialStep) {
        case 0:
            tutorialOutput = <TutorialStepOne selection={selection} settutorialStep={settutorialStep} />
            break;
        
        case 1:
            tutorialOutput = <TutorialStepTwo settutorialStep={settutorialStep}/>
            break;
        
        case 2:
            tutorialOutput = <TutorialStepThree withButtons={true} settutorialStep={settutorialStep} toggleBookmark={toggleBookmark} jobid={jobList[0].jobid} />
            break;
        
        case 3:
            tutorialOutput = <TutorialStepThree/>
            setTimeout(() => {
                setChecked(true)
                settutorialStep(4)
            }, 2000);
            break;

        case 4:
            tutorialOutput = <TutorialStepFour  settutorialStep={settutorialStep} setChecked={setChecked}/>
            break;
        
        case 5:
            
            tutorialOutput = <TutorialStepFive settutorialStep={settutorialStep} toggleBookmark={toggleBookmark} jobid={jobList[0].jobid} />
            break;


        default:
            break;
    }


    
    return (
        <React.Fragment>
            {tutorialOutput && tutorialOutput}
        </React.Fragment>
    )
}
