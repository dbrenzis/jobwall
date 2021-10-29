import React from 'react'
import UnternehmensCardItem from './UnternehmensCardItem'
import SelectedProfession from '../SelectedProfession/SelectedProfession'

export default function UnternehmensCardOutput(props) {
    const {selection, company, jobsFromCompany, bookmarkList, toggleBookmark} = props
    const {fid, fname, bigroundlogo, headerimage, jobs, tags, stand} = company

    const urlCompanyPic = `https://www.staufenbiel.de/image/ressourcen/uip/fid${fid}/${bigroundlogo}&w=100`
    const urlCompanyHeaderPic = `https://www.staufenbiel.de/image/ressourcen/uip/fid${fid}/${headerimage}&w=500`

    

    const jobItemList = jobsFromCompany.map(job => {

        const saved = bookmarkList.includes(job.jobid)

        return <UnternehmensCardItem key={job.jobid} job={job} saved={saved} toggleBookmark={toggleBookmark}/>
    })

    return (
        <div className="container-fluid">
            <img className="img-fluid rounded mt-2" src={urlCompanyHeaderPic} alt="BildHeader"/>

            <div className="d-flex">
                <img className="shadow rounded-circle bg-white ml-1" height="80" width="80" style={{marginTop:"-40px"}} src={urlCompanyPic} alt="Bild"/>
                <div>
                    <div className="mt-2 ml-1" style={{fontSize:"20px", fontWeight:"600"}}>{fname}</div>
                    <div className="ml-1 text-muted">{jobs === 1 ? `1 ausgeschriebener Job` : `${jobs} ausgeschriebene Jobs` }</div> 
                    <div className="d-flex align-items-center mt-1">
                        <SelectedProfession selection={selection} tags={tags}/>
                    </div>
                </div>
                <div className="rounded border mt-1 ml-auto font-weight-bold" style={{height:"62px", width:"62px"}}>
                    <div className="text-center" style={{fontSize:"16px"}}>
                        STAND
                    </div>
                    <div className="text-center" style={{fontSize:"26px"}}>
                        {stand}
                    </div>
                </div>
            </div>

            <ul className="list-group">
                <h2 className="mt-3 mb-2" style={{fontSize: "17px"}}>
                    {`${jobsFromCompany.length} Treffer`}
                </h2>
                {jobItemList}
            </ul>
        </div>
    )
}
