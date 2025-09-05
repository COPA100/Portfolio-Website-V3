import React from "react";

export default function About() {
    return (
        <div id="about" className="h-screen w-full text-white z-10">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-[1fr_2fr] px-5 pt-20 lg:pl-50 lg:pr-25 sm:pl-25 sm:pr-6">
                <div className="flex items-center h-fit">
                    <h1 className="text-4xl font-semibold">About</h1>
                    <div className="flex-grow h-[2px] bg-white/50 ml-3"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg w-full h-auto p-5 flex flex-col gap-3">
                    <p>
                        I am a first-year at the University of Virginia
                        receiving my B.S. in Computer Science in May 2029. I
                        have a passion for web development and enjoy creating
                        aesthetic and functional websites that provide
                        exceptional user experiences.
                    </p>
                    <p>
                        When I'm not coding, I enjoy exploring new design
                        trends, contributing to open-source projects, and
                        learning about emerging technologies in the field.
                    </p>
                    <p>
                        I'm excited to grow my skills through internships and
                        collaborative projects while building innovative
                        solutions that make a positive impact.
                    </p>
                </div>
            </div>
        </div>
    );
}
