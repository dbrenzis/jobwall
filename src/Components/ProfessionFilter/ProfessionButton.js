import React from 'react'

export default function ProfessionButton(props) {
    const {buttonName, checked, handleChange, isFirst, isLast, disabled, isTutorial} = props

    let buttonDesign = `w-100 p-0 text-center font-weight-bold border border-${buttonName} `
    buttonDesign += checked ? `text-white bg-${buttonName} ` : `text-${buttonName} bg-white `

    if(isFirst){
        buttonDesign += "mr-1 rounded-left"
    } else if (isLast){
        buttonDesign += "rounded-right"
    }else{
        buttonDesign += "mr-1"
    }

    return (
        <div className="col-2 pr-1" style={{zIndex: isTutorial && "1"}}>
            <button disabled={disabled} className={buttonDesign} type="button" name={buttonName} onClick={handleChange} style={{height: "40px", opacity: disabled && "0.25"}}>
                {buttonName}
            </button>
        </div>
    )

}
