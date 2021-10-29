import React from 'react'

export default function SelectedProfession(props) {

    const {selection, tags} = props

    const getOpacity = (filterArray) => {
        if(!selection.length)
            return "1"
        else
            return selection.includes(filterArray) ? "1" : "0.25"
    }

    const professionItems = tags.map(item => <div key={item} className={`bg-${item} rounded ml-1`} style={{height:"5px", width:"22px", opacity: getOpacity(item)}}></div>)

    return (
        <React.Fragment>
            {professionItems}
        </React.Fragment>
    )
}
