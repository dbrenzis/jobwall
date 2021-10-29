import React from 'react'
import {Link} from 'react-router-dom'

export default function JobSeperator(props) {
    const data = props.data
    const urlUnternehmen = `/unternehmen/${data.companyFid}`

    return (
        <div className="mt-n1 mb-2">
            <u><Link to={urlUnternehmen} className="text-body">{`${data.alternativJobs} weitere Jobs von ${data.companyName} anzeigen`}</Link></u>
        </div>
    )
}
