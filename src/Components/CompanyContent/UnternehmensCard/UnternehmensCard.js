import React, {useContext} from 'react'
import {useParams} from "react-router-dom";
import {CompanyWJobsContext} from '../../Context/CompanyWJobsContext'
import UnternehmensCardOutput from './UnternehmensCardOutput'

export default function UnternehmensCard() {

    const id  = parseInt(useParams().id)
    const {companyListInit, jobListInit, selection, bookmarkList, toggleBookmark} = useContext(CompanyWJobsContext)

    const company = companyListInit.current.find(company => company.fid === id)
    let jobsFromCompany = jobListInit.current.filter(job => job.companyFid === id)

    let doesSelectionInlcTags = false
    for (const tag of company.tags) {
        if(selection.includes(tag)){
            doesSelectionInlcTags=true
            break
        }
    }  

    if(doesSelectionInlcTags)
        jobsFromCompany = jobsFromCompany.filter(job => selection.includes(job.tag))


    return (
        <React.Fragment>
            <UnternehmensCardOutput selection={selection} company={company} jobsFromCompany={jobsFromCompany} bookmarkList={bookmarkList} toggleBookmark={toggleBookmark}/>
        </React.Fragment>
    )
}
