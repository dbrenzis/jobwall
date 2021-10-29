import React, {useContext} from 'react'
import {useParams} from "react-router-dom";
import {CompanyWJobsContext} from '../../Context/CompanyWJobsContext'
import JobCardOutput from './JobCardOutput'

export default function JobCard() {

    const id  = parseInt(useParams().id)
    const {jobListInit} = useContext(CompanyWJobsContext)

    const job = jobListInit.current.find(job => job.jobid === id)

    return (
        <React.Fragment>
            <JobCardOutput job={job} /> 
        </React.Fragment>
    )
}
