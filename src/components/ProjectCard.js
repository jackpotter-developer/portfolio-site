import React from "react";

export default function ProjectCard(props){

    return(
        <div className="projectcard">
            <img src={props.image} alt=""/>
            <p className="projectcard--title">{props.title}</p>
            <p className="projectcard--description">{props.description}</p>
            <a href={props.link} className="projectcard--link" target="_blank">View project</a>
        </div>
    )
}

