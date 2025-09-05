import React from "react";
import experience from "../data/experience";

function createExperience() {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto p-5 flex flex-col gap-3">
            <div className="flex justify-between">
                <h1>Title</h1>
                <p>July 2025 - Present</p>
            </div>
            <ul>
                <li>Hi</li>
                <li>Hi</li>
                <li>Hi</li>
            </ul>
        </div>
    );
}

export default function Experience() {
    return (
        <div id="experience" className="h-auto w-full text-white z-10">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-[1fr_2fr] px-5 pt-20 lg:pl-50 lg:pr-25 sm:pl-25 sm:pr-6">
                <div className="flex items-center h-fit">
                    <h1 className="text-4xl font-semibold">Experience</h1>
                    <div className="flex-grow h-[2px] bg-white/50 ml-3"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto p-5 flex flex-col gap-3">
                    {createExperience()}
                </div>
            </div>
        </div>
    );
}
