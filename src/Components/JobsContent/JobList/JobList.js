import React, {useContext} from 'react'
import {CompanyWJobsContext} from '../../Context/CompanyWJobsContext'
import JobItem from './JobItem'

export default function JobList(props) {

    const {tutorialStep} = props
    const {jobList, bookmarkList, toggleBookmark} = useContext(CompanyWJobsContext)

    if(!jobList)
        return <h1>Loading..</h1>

    let jobItemList = []
    let counter = 0;
    let currentFid = jobList[0].companyFid;
    let itemForSeperator = null

    for (let i = 0; i < jobList.length; i++) {
        const item = jobList[i];

        if(item.companyFid === currentFid){
            counter++
            if(counter > 3)
                continue

            if(counter === 3)
                itemForSeperator = item
                
            else
                jobItemList.push(item)
        }else{
            currentFid = item.companyFid
            if(counter > 3){
                itemForSeperator.seperator = true
                itemForSeperator.alternativJobs = (counter-3)
                jobItemList.push(itemForSeperator)
            }
            if(counter === 3){
                jobItemList.push(itemForSeperator)
            }
            itemForSeperator = null
            counter = 1
            jobItemList.push(item)
        }
    }

    if(counter > 3){
        itemForSeperator.seperator = true
        itemForSeperator.alternativJobs = (counter-3)
        jobItemList.push(itemForSeperator)
    }
    if(counter === 3){
        jobItemList.push(itemForSeperator)
    }
    
    jobItemList = jobItemList.map((item,i) => {
        const saved = bookmarkList.includes(item.jobid)
        
        const isTutorial = i===0 && (tutorialStep >= 1 && tutorialStep <= 3)
    
        return <JobItem isTutorial={isTutorial} key={item.jobid} data={item} saved={saved} toggleBookmark={toggleBookmark}/>
    });

    return (
        <ul className="list-group">
            <h2 className="mt-3 mb-2" style={{fontSize: "17px"}}>
                {`${jobList.length} Treffer`}
            </h2>
            {jobItemList}
        </ul>
    )
}
