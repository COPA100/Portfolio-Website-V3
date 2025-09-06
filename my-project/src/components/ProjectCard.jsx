import React from "react";
import TechButton from "./TechButton";
import FadeInOnScroll from "./FadeInOnScroll";

function ProjectCard(props) {
    return (
        <FadeInOnScroll>
            <div className="group bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto flex flex-col overflow-hidden hover:border-white/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-white/13 transition-all duration-300 ease-out">
                <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={props.alt}
                >
                    <div className="overflow-hidden relative">
                        <img
                            src={props.img}
                            className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-500 ease-out"
                            alt={props.title}
                        ></img>
                        {/* cool shadow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-5 relative z-10">
                        <div className="flex justify-between">
                            <h1 className="font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                                {props.title}
                            </h1>
                        </div>
                        <p className="group-hover:text-white/90 transition-colors duration-300">
                            {props.desc}
                        </p>

                        <div className="mt-3">
                            <ul className="flex flex-wrap gap-3">
                                {props.tech.map((element, index) => (
                                    <div key={index}>
                                        <TechButton name={element} />
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        </FadeInOnScroll>
    );
}

export default ProjectCard;
