import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";

export default function Projects(){

    const projectCards = ProjectsData.map(item => {
        return (
            <ProjectCard 
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
            />
        )
    })

    return(
        <div className="projects" id="projects">
            <h2 className="projects--title">Projects</h2>
            <hr className="projects--hr"></hr>
            <div className="projects--cards">
                {projectCards}
            </div>
        </div>
    )
}