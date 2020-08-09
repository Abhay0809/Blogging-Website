import React from 'react'
import './Navbar.css'
import '../../index.css'

export default function Navbar() {
    return (
        <nav className="navi">
            <img src={require('./img/logo.png')} height={30} width={30} alt="logo" className="logo" />&nbsp; 
            <span className="head-text" >
                Designed by Abhay
            </span>
        </nav>
    )
}
