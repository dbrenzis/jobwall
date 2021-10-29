import React from 'react'
import { useHistory } from "react-router-dom";
import briefcase from '../../public/Briefcase.svg'
import companyIcon from '../../public/Company.svg'
import ArrowBack from '../../public/Arrow-Back.svg'


export default function DisplayFilter(props) {
    const {handleChangeJoblistView, isJoblist, currentLocation, tutorialStep} = props
    const history = useHistory();
    const isJoblistToCompany = history.location.state && history.location.state.isJoblistToCompany
    const buttonClassName = "w-100 rounded-top d-flex align-items-center justify-content-center text-darkgrey border-0 "
    const buttoStyle ={height:"40px"}

    let titelLeft = "Jobliste"
    let titelRight = "Unternehmensliste"
    let iconLeft = briefcase
    let iconRight = companyIcon
    let classNameLeft,classNameRight = null
    let leftButtondisabled = true
    let leftButtonFunction = () => history.goBack()
    let rightButtonFunction = null

    switch (currentLocation[0]) {
        case "jobs":
            classNameLeft=buttonClassName.concat("bg-white")
            classNameRight=buttonClassName.concat("bg-white")
            iconLeft = ArrowBack

            if(isJoblist && !isJoblistToCompany){
                titelLeft = "Alle Jobs"
                titelRight = "Aktueller Job"
                iconRight = briefcase
            }else{
                titelLeft = "Zum Unternehmen"
                titelRight = "Aktueller Job"
                iconRight = briefcase
            }
            break;

        case "unternehmen":
            classNameLeft=buttonClassName.concat("bg-white")
            classNameRight=buttonClassName.concat("bg-white")
            iconLeft = ArrowBack

            if(isJoblist){
                titelLeft = "Alle Jobs"
                titelRight = "Unternehmen"
            }else{
                titelLeft = "Alle Unternehmen"
                titelRight = "Unternehmen"
            }
            break;
    
        default:
            leftButtondisabled = false
            classNameLeft = buttonClassName.concat(isJoblist ? "bg-white" : "bg-ltgrey")
            classNameRight = buttonClassName.concat(isJoblist ? "bg-ltgrey" : "bg-white")
            leftButtonFunction = () => handleChangeJoblistView("jobliste")
            rightButtonFunction = () => handleChangeJoblistView("companyliste")
            break;
    }
    
    const tutorialStyle = {zIndex: tutorialStep === 5 && 1}


    return (
        <div className="container-fluid bg-washedwhite">
            <div className="row no-gutters align-items-end" style={{height:"50px"}} >
                <div className="col-6 pr-1" style={tutorialStyle}>
                    <button className={classNameLeft} onClick={leftButtonFunction} style={buttoStyle} >
                        <img src={iconLeft} alt="icon" className="m-2"/>
                        {titelLeft}
                    </button>
                </div>
                <div className="col-6 pl-1" style={tutorialStyle}>
                    <button disabled={leftButtondisabled} className={classNameRight} onClick={rightButtonFunction} style={buttoStyle} >
                        <img src={iconRight} alt="icon" className="m-2"/>
                        {titelRight}
                    </button>
                </div>
            </div>
        </div>
    )
}
