import React from 'react'
import { Link } from 'gatsby'
//styles
import './navbar.css'

const linkStyles = {
    color: '#58b368',
    fontSize: '20px',
    textDecoration: 'none'
}

const Navbar = () => (
    <div className={`nav-container`}>
        <div>
            <p style={{fontSize: '20px'}}>Nicolas Camacho</p>
        </div>
        <div className={`links-container`}>
            <p>
                <Link style={linkStyles}>projects</Link>
                <span> - </span>
                <Link style={linkStyles}>blog</Link>
                <span> - </span>
                <Link style={linkStyles}>interests</Link>
            </p>
        </div>
    </div>
)

export default Navbar