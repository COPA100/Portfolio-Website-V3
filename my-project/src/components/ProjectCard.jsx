import React from "react";
import TechButton from "./TechButton";

function ProjectCard(props) {
    return (
        <div
            key={props.id}
            className="group bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto flex flex-col overflow-hidden hover:border-white/50 transition-all"
        >
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={props.alt}
            >
                <div className="overflow-hidden">
                    <img
                        src={props.img}
                        className="w-full h-auto object-cover group-hover:scale-[120%] transition-all duration-300"
                        alt={props.title}
                    ></img>
                </div>

                <div className="p-5">
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-lg">{props.title}</h1>
                    </div>
                    <p>{props.desc}</p>

                    <div className="mt-3">
                        <ul className="flex gap-3">
                            {props.tech.map((element, index) => (
                                <TechButton key={index} name={element} />
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ProjectCard;
