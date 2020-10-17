import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer wrapper">
            <span className="header__logo">bitaev.db</span>
            
            <div className="footer__links">
                <a href="https://www.instagram.com/bitaev.db/" className='header__link-inst footer__link '>Instagram</a>
                <a href="https://github.com/Sabfes" className="footer__link-git footer__link ">GitHub</a>
            </div>
        </div>
    )
}