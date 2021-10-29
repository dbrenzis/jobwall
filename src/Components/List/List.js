import React from 'react'
import JobList from '../JobsContent/JobList/JobList'
import UnternehmensList from '../CompanyContent/UnternehmensList/UnternehmensList'

export default function List(props) {

    const {tutorialStep} = props

    return (
        <div className="container-fluid">
            {
            props.isJoblist ?
                <JobList tutorialStep={tutorialStep} />
            :
                <UnternehmensList/>
            }
        </div>
    )
}
