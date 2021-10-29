import React from 'react'
import { Link } from 'react-router-dom'
import star from '../../../public/Star.svg'
import bookmarked from '../../../public/Bookmarked.svg'

export default function UnternehmensCardItem(props) {

    const {job, saved, toggleBookmark} = props
    const {jobid, companyFid, companyUrl, tag, stellenbezeichnung, standorte, stand} = job
    const urlJob = `/jobs/${jobid}`
    const urlFoto = `https://www.staufenbiel.de/image/ressourcen/uip/fid${companyFid}/${companyUrl}`

    return (
        <li className={`d-flex border-top border-right border-bottom rounded mb-2 bigleftBorder-${tag}`} style={{minHeight:"82px"}}>
            <div className="align-self-center d-flex flex-shrink-0 justify-content-center mx-1 my-2 " style={{width:"86px"}}>
                <div className="d-flex align-items-center"><img  src={urlFoto} alt="Logo" style={{maxHeight:"62px", maxWidth:"86px"}} /></div>
            </div>
            <div className="w-100 d-flex flex-column py-1 pr-1">
                <div style={{fontWeight:"600"}}><Link to={{pathname:urlJob, state:{isJoblistToCompany:true}}} className="text-body">{stellenbezeichnung}</Link></div>
                <div className="text-muted mb-3">{standorte === null ? "Deutschland" : standorte }</div>
                <div className="d-flex justify-content-between">
                    <div>
                        {`Stand: ${stand}`}
                    </div>
                    <button onClick={() => toggleBookmark(jobid)} className="bg-white border-0 p-0"><img src={saved ? bookmarked : star} alt="star" height="21"/></button>
                </div>
            </div>
        </li>
    )
}
