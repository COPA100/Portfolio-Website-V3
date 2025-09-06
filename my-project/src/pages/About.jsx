import React from "react";
import about from "../data/about";
import FadeInOnScroll from "../components/FadeInOnScroll";

function createParagraph(props) {
    return <p key={props.id}>{props.text}</p>;
}

export default function About() {
    return (
        <div
            id="about"
            className="h-auto w-full text-white z-10 xl:mb-36 lg:mb-28 md:mb-20 sm:mb-12 mb-4"
        >
            <div className="grid gap-3 grid-cols-1 md:grid-cols-[1fr_2fr] px-5 sm:pt-24 pt-18 lg:pl-50 lg:pr-25 sm:pl-25 sm:pr-6">
                <FadeInOnScroll direction="left">
                    <div className="flex items-center h-fit">
                        <h1 className="text-4xl font-semibold">About</h1>
                        <div className="flex-grow h-[2px] bg-white/50 ml-3"></div>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto p-5 flex flex-col gap-3">
                        {about.map(createParagraph)}
                    </div>
                </FadeInOnScroll>
            </div>
        </div>
    );
}
