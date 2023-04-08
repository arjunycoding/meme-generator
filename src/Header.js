import React from "react"
import logo from "./images/logo.png"

export default function Header() {
    return (
        <div className="header">
            {/* <img src={logo} alt="meme-troll" className="header--image " /> */}
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--">Arjun Yuvaraj</h4>
        </div>
    )
}