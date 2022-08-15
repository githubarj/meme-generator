import React from "react";
import "../index.css";
import getNew from "../assets/getNew.png";

export default function Meme() {
  return (
    <form action="">
      <div className="inputs">
        <input type="text" className="part-1" placeholder="Top text" />
        <input type="text" className="part-2" placeholder="Bottom text" />
      </div>
      <button>
        <p className="button-text">Get a new meme Image</p>
        <img src={getNew} alt="get new image" className="getNew" />
      </button>
    </form>
  );
}
