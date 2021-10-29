import React from 'react'
import { Link } from 'react-router-dom'

export default function JobCardOutput(props) {
    const {job} = props
    const {companyFid, bigroundlogo, headerimage, stellenbezeichnung, standorte, htmldescription, stand, tag} = job

    const urlUnternehmen = `/unternehmen/${companyFid}`
    const urlCompanyPic = `https://www.staufenbiel.de/image/ressourcen/uip/fid${companyFid}/${bigroundlogo}&w=400`
    const urlCompanyHeaderPic = `https://www.staufenbiel.de/image/ressourcen/uip/fid${companyFid}/${headerimage}&w=950`

    return (
        <div className="container-fluid">
            <img className={`img-fluid rounded mt-2 bigleftBorder-${tag}`} src={urlCompanyHeaderPic} alt="BildHeader"/>

            <div className="d-flex">
                <Link to={urlUnternehmen} replace style={{marginTop:"-40px"}}><img className="shadow rounded-circle bg-white ml-1" height="80" width="80" src={urlCompanyPic} alt="Bild"/></Link>
                <div>
                    <div className="mt-2 ml-1" style={{fontSize:"20px", fontWeight:"600"}}>{stellenbezeichnung}</div>
                    <div className="ml-1 text-muted">{standorte === null ? "Deutschland" : standorte }</div> 
                </div>
                <div className="rounded border mt-1 ml-auto font-weight-bold flex-shrink-0" style={{height:"62px", width:"62px"}}>
                    <div className="text-center" style={{fontSize:"16px"}}>
                        STAND
                    </div>
                    <div className="text-center" style={{fontSize:"26px"}}>
                        {stand}
                    </div>
                </div>
            </div>

            <button className="my-4 rounded w-100 bg-staufenbielrot text-white border-0"  style={{height:"54px",  fontSize:"20px", fontWeight:"600"}}>Zum Stand</button>

            <div dangerouslySetInnerHTML={{__html: htmldescription}}></div>
        </div>
    )
}
