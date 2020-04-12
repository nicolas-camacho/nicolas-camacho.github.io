import React from 'react'
//styles
import '../styles/layout.css'
//components
import Navbar from './navbar/navbar'

const Layout = ({children}) => (
    <>
        <div className={`top-line`}></div>
        <div className={`main-container`}>
            <div className={`content`}>
                <Navbar />
                <hr className={`separator`}></hr>
                {children}
            </div>
        </div>
    </>
)

export default Layout