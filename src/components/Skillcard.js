import React from "react";

export default function Skillcard(props){

    return(
        <div className="skillcard">
            <img src={props.image} alt=""/>
            <p className="skillcard--title">{props.title}</p>
            <p className="skillcard--description">{props.description}</p>
        </div>
    )
}

