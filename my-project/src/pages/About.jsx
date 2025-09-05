import React from "react";
import about from "../data/about";

function createParagraph(item) {
    return (
        <p key={item.id}>{item.text}</p>
    );
}

export default function About() {
    return (
        <div id="about" className="h-auto w-full text-white z-10">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-[1fr_2fr] px-5 pt-20 lg:pl-50 lg:pr-25 sm:pl-25 sm:pr-6">
                <div className="flex items-center h-fit">
                    <h1 className="text-4xl font-semibold">About</h1>
                    <div className="flex-grow h-[2px] bg-white/50 ml-3"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto p-5 flex flex-col gap-3">
                    {about.map(createParagraph)}
                </div>
            </div>
        </div>
    );
}
