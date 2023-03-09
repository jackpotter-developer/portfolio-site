import React from "react";
import Skillcard from "./Skillcard";
import skillData from "../skillData";

export default function Skills(){

    const cards = skillData.map(item => {
        return (
            <Skillcard 
                title={item.title}
                description={item.description}
                image={item.image}
            />
        )
    })

    return(
        <div className="skills--content" id="skills">
            <h2 className="skills--title">Skills</h2>
            <hr className="skills--hr"></hr>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}