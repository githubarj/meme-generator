import React from "react";
import "../index.css"
import trollFace from"../assets/TrollFace.png"

export default function Navbar () {
    return (
        <nav>
            {/* logo section */}
            <div className="logo">
                <img src= {trollFace} alt="troll face" className="icon" />
                <h1 className="title">Meme Generator</h1>
            </div>
            {/* sentence section */}
            <div className="sentence">
                <p>React Course - Project 3</p>
            </div>
        </nav>
    )
}