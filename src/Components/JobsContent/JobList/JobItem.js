import React from 'react'
import { Link } from 'react-router-dom'
import JobSeperator from './JobSeperator'
import star from '../../../public/Star.svg'
import bookmarked from '../../../public/Bookmarked.svg'

export default function JobItem(props) {
    const {data, saved, toggleBookmark, isTutorial} = props
    const {jobid, companyFid, companyUrl, companyName, tag, stellenbezeichnung, standorte, seperator, stand} = data
    const urlJob = `/jobs/${jobid}`
    const urlUnternehmen = `/unternehmen/${companyFid}`
    const urlFoto = `https://www.staufenbiel.de/image/ressourcen/uip/fid${companyFid}/${companyUrl}`

    return (
        <React.Fragment>
            <li className={`d-flex border-top border-right border-bottom rounded mb-2 bigleftBorder-${tag}`} style={{zIndex: isTutorial && 1}}>
                <div className="align-self d-flex flex-shrink-0 justify-content-center mx-1 my-2 " style={{width:"86px"}}>
                    <Link className="d-flex align-items-center" to={urlUnternehmen}><img  src={urlFoto} alt="Logo" style={{maxHeight:"86px", maxWidth:"86px"}} /></Link>
                </div>
                <div className="w-100 d-flex flex-column py-2 pr-2">
                    <div style={{fontWeight:"600"}}><Link to={urlJob} className="text-body">{stellenbezeichnung}</Link></div>
                    <div className="mb-3"><Link to={urlUnternehmen} className="text-muted">{companyName}</Link></div>
                    <div className="text-muted mt-auto">{standorte === null ? "Deutschland" : standorte }</div>
                    <div className="d-flex justify-content-between">
                        <div>
                            {`Stand: ${stand}`}
                        </div>
                        <button onClick={() => toggleBookmark(jobid)} className="bg-white border-0 p-0"><img src={saved ? bookmarked : star} alt="star" height="21"/></button>
                    </div>
                </div>
            </li>
            {seperator && <JobSeperator data={data}/>}
        </React.Fragment>
    )
}