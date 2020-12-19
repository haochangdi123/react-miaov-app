import { logDOM } from '@testing-library/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header id="header">
            <nav className="menu">
               <a href="#">导航</a>
            </nav>
            <h1 className="logo">miaov.com</h1>
            <Link className="user" to="/login"></Link>
        </header>
    )
}


export default Header