import React from 'react'
import { Link } from 'react-router-dom'
import SelectedProfession from '../SelectedProfession/SelectedProfession'

export default function UnternehmensItem(props) {

    const {data, selection} = props
    const {fid, firmenlogo, fname, jobs, tags} = data
    const urlUnternehmen = `/unternehmen/${fid}`
    const urlFoto = `https://www.staufenbiel.de/image/ressourcen/uip/fid${fid}/${firmenlogo}`
    
    return (
        <li className="d-flex border rounded mb-2" style={{height:"82px"}}>
            <div className="align-self-center d-flex flex-shrink-0 justify-content-center mx-1 my-2 " style={{width:"86px"}}>
                <Link className="d-flex align-items-center" to={urlUnternehmen}><img  src={urlFoto} alt="Logo" style={{maxHeight:"62px", maxWidth:"86px"}} /></Link>
            </div>
            <div className="w-100 d-flex flex-column py-2 pr-2">
                <div style={{fontWeight:"600"}}><Link to={urlUnternehmen} className="text-body">{fname}</Link></div>
                <div className="mb-1 text-muted">{`${jobs} ausgeschriebene Jobs`}</div>
                <div className="d-flex align-items-center">
                    <SelectedProfession selection={selection} tags={tags}/>
                </div>
            </div>
        </li>
    )
}