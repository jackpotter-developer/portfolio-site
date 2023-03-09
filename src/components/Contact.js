import React from "react";

export default function Contact(){
    return (
        <div className="contact" id="contact">
            <h3 className="contact--title">Connect with me</h3>
            <p className="contact--description">To get in contact, send me an email at <mark className="contact--email">jack.w.potter@gmail.com</mark>, or connect with me on LinkedIn or Github.</p>
            <div className="contact--imgs">
                <a href="https://www.linkedin.com/in/jack-potter-a90abb262/" target="_blank">
                    <img src="./linked-in-logo.png" className="contact--logo"/>
                </a>
                <a href="https://github.com/jackpotter-developer" target="_blank">
                    <img src="./github-logo.png" className="contact--logo"/>
                </a>
            </div>
        </div>
    )
}