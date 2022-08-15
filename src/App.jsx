import React from "react";
import "./index.css"
import Navbar from "./Components/Navbar"
import Meme from "./Components/Meme";

export default function App () {
  return (
    <div className="container">
      <Navbar />
      <Meme />
    </div>
  )
}