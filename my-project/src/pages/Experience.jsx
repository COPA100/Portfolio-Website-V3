import React from "react";
import experience from "../data/experience";

function createExperience(props) {
    return (
        <div
            key={props.id}
            className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto p-5 flex flex-col gap-1"
        >
            <p className="sm:hidden block text-xs">{props.date}</p>
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-lg leading-none">
                    {props.title}
                </h1>
                <p className="sm:block hidden text-sm">{props.date}</p>
            </div>
            <h2>{props.employer}</h2>
            <ul className="list-disc ml-5 pt-1 opacity-80">
                {props.text.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Experience() {
    return (
        <div id="experience" className="h-auto w-full text-white z-10">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-[1fr_2fr] px-5 xl:pt-24 sm:pt-10 pt-5 lg:pl-50 lg:pr-25 sm:pl-25 sm:pr-6">
                <div className="flex items-center h-fit">
                    <h1 className="text-4xl font-semibold">Experience</h1>
                    <div className="flex-grow h-[2px] bg-white/50 ml-3"></div>
                </div>
                <div className="flex flex-col gap-5">
                    {experience.map(createExperience)}
                </div>
            </div>
        </div>
    );
}
