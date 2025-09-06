import React from "react";
import experience from "../data/experience";
import FadeInOnScroll from "../components/FadeInOnScroll";

function createExperience(props) {
    return (
        <div
            key={props.id}
            className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto p-5 flex flex-col gap-2"
        >
            <p className="sm:hidden block text-xs">{props.date}</p>
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-lg leading-none">
                    {props.title}
                </h1>
                <p className="sm:block hidden text-sm">{props.date}</p>
            </div>
            <h2 className="text-blue-400">{props.employer}</h2>
            <ul className="list-disc ml-5 opacity-80">
                {props.text.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Experience() {
    return (
        <div
            id="experience"
            className="h-auto w-full  text-white z-10 xl:mb-36 lg:mb-28 md:mb-20 sm:mb-12 mb-4"
        >
            <div className="grid gap-3 grid-cols-1 md:grid-cols-[1fr_2fr] px-5 sm:pt-24 pt-18 lg:pl-50 lg:pr-25 sm:pl-25 sm:pr-6">
                <FadeInOnScroll direction="left">
                    <div className="flex items-center h-fit">
                        <h1 className="text-4xl font-semibold">Experience</h1>
                        <div className="flex-grow h-[2px] bg-white/50 ml-3"></div>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div className="flex flex-col gap-5">
                        {experience.map(createExperience)}
                    </div>
                </FadeInOnScroll>
            </div>
        </div>
    );
}
