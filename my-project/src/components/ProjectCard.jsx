import React from "react";

function ProjectCard(props) {
    return (
        <div className="">
            <div className="">
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}

function createCard(info) {
    return (
        <ProjectCard
            key={info.id}
            name={info.name}
            desc={info.desc}
            img={info.img}
        />
    );
}

export default ProjectCard;
export { createCard };
