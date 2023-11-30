import "./WorkCard.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="Project-Card">
            <img src={props.imgsrc} alt="back"/>
            <h2 className="Project-Title">
                {props.title}
            </h2>
        <div className="Project-Details">
            <p>
                {props.text}
            </p>
            <div className="Project-btn">
                <NavLink to={props.view} className="btn">Algorithm</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard;
