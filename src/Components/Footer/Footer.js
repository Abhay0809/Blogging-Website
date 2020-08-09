import React from 'react'
import './Footer.css'

import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaGithubSquare
} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="container">
            <p className="text">SOCIAL CONNECT:</p>
        <div className="btn fb-btn">
        <a href="https://www.facebook.com/abhay.anand.792/">
            <FaFacebookSquare id="fb" />
            </a>
        </div>
        <div className="btn ig-btn">
        <a href="https://www.instagram.com/codo__sapien/">
            <FaInstagramSquare id="ig" />
            </a>
        </div>
        <div className="btn tw-btn">
            <a href="https://github.com/Abhay2611/">
                <FaGithubSquare id="tw" />
            </a>
        </div>
    </div>
    )
}
