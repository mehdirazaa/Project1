import "./HeroImage.css";
import backimage from "../assets/image2.jpg";
import React from "react";
import { Link } from "react-router-dom";;
 
const HeroImage = () => {
  return (
    <div className="Hero">
      <div className="Mask">
        <img className="backimage" src = {backimage} alt = "backimage"/>
      </div>
      <div className="content">
        <h1>Sorting Algorithms</h1>
        <div>
            <Link to="/Sorting" className="btn">Sorting</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage;
