import React from "react"
import { BrowserRouter } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar--links">
                <Link to='' smooth className="navbar--link">
                    Home
                </Link>
                {/* <Link to='#about' smooth className="navbar--link">
                    About
                </Link> */}
                <Link to='#skills' smooth className="navbar--link">
                    Skills
                </Link>
                <Link to='#projects' smooth className="navbar--link">
                    Projects
                </Link>
                <Link to='#contact' smooth className="navbar--link">
                    Contact
                </Link>
                <div className="navbar--logos">
                    <a href="https://github.com/jackpotter-developer" target="_blank">
                        <img src="./github-logo.png" className="navbar--logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jack-potter-a90abb262/" target="_blank">
                        <img src="./linked-in-logo.png" className="navbar--logo"/>
                    </a>
                </div>
            </div>
        </nav>
    )
}