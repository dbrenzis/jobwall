import React from 'react'
import logo from '../../public/Logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="container-fluid" >
            <div className="row align-items-center" style={{height:"60px"}}>
                <div className="col">
                    <Link to="/"><img src={logo} alt="Bild" height="40"/></Link>
                </div>
                <div className="col">
                    <h2 className="font-weight-bold text-right" style={{height:"20px", fontSize:"16px"}}>
                        Digitale Jobwall
                    </h2>
                </div>
            </div>
        </div>
    )
}
