import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";
import React from 'react';

const Work = () => {
  return (
    <div className="Work-Container">
        <h1 className="Project-Heading">Sorting</h1>
        <div className="Project-Container">
             {WorkData.map((val, ind) => {
                return(
                    <WorkCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />
                )
             })}
        </div>
    </div>
  )
}

export default Work;
