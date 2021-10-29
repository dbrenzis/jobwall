import React, {useState, useEffect, createContext, useRef} from 'react'
import {useLocation} from "react-router-dom"

import {data} from '../../data/data'
import {isLive, filterNames} from '../../data/config'

export const CompanyWJobsContext = createContext()

export const CompanyWJobsProvider = (props) => {

    const query = new URLSearchParams(useLocation().search).get("bereich");
    const [selection, setSelection] = useState(() => filterNames.includes(query) ? [query] : [])
    const jobListInit = useRef(null)
    const companyListInit = useRef(null)
    const [jobList, setjobList] = useState(null)
    const [companyList, setcompanyList] = useState(null)
    const [bookmarkList, setbookmarkList] = useState([])

    const toggleBookmark = (jobID) => {
        setbookmarkList( prev => {
            if(prev.includes(jobID))
                return prev.filter(item => item !==jobID)
            else
                return [...prev,jobID]
        })
    }

    useEffect(() => {
        const fetchRawData = async () => {
            let rawData
            if(isLive){
                const response = await fetch("https://www.staufenbiel.de.local/machwasduliebst_2019/api/")
                const dataJson = await response.json()
                rawData = dataJson.data.companies 
            }else{
                rawData =data.data.companies
            }

            let companyL = rawData.map(({jobsData, ...item }) => item);
            companyListInit.current = companyL

            let jobListTmp = [];
            for (const company of rawData) {
                for (const job of company.jobsData) {
                    const jobWithCompanyName = {
                        ...job,
                        companyName: company.fname,
                        companyUrl: company.firmenlogo,
                        bigroundlogo: company.bigroundlogo,
                        headerimage: company.headerimage,
                        companyFid: company.fid,
                        stand: company.stand
                    }
                    jobListTmp.push(jobWithCompanyName)
                }   
            }
            jobListInit.current = jobListTmp

            if(selection.length){
                companyL = companyL.filter(company => {
                    for (const tag of company.tags) {
                        if(selection.includes(tag))
                            return true
                    }
                    return false
                })

                jobListTmp = jobListTmp.filter(item => selection.includes(item.tag))
            }
            
            setcompanyList(companyL)
            setjobList(jobListTmp)
        }

        const updateJobList = () => {
            let jobListTmp = jobListInit.current
            let companyListTmp = companyListInit.current
            if(selection.length){
                jobListTmp = jobListTmp.filter(item => selection.includes(item.tag))

                companyListTmp = companyListTmp.filter(company => {
                    for (const tag of company.tags) {
                        if(selection.includes(tag))
                            return true
                    }
                    return false
                })
            }
            
            setjobList(jobListTmp)
            setcompanyList(companyListTmp)
        }

        if(!jobListInit.current)
            fetchRawData()
        else
            updateJobList()

    }, [selection])

    if(!jobList || !companyList)
        return <h1>Loading..</h1>

    return(
        <CompanyWJobsContext.Provider value={{selection, setSelection, jobListInit, companyListInit, jobList, companyList, bookmarkList, toggleBookmark}}>
            {props.children}
        </CompanyWJobsContext.Provider>
    )
}