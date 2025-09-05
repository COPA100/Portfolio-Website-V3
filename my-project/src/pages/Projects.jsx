import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.jsx";
import TechButton from "../components/TechButton.jsx";

export default function Projects() {
    return (
        <div id="projects" className="h-auto w-full text-white z-10">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-[1fr_2fr] px-5 xl:pt-24 sm:pt-10 pt-5 lg:pl-50 lg:pr-25 sm:pl-25 sm:pr-6">
                <div className="flex items-center h-fit">
                    <h1 className="text-4xl font-semibold">Projects</h1>
                    <div className="flex-grow h-[2px] bg-white/50 ml-3"></div>
                </div>
                <div className="flex flex-col gap-5">
                    {projects.map(ProjectCard)}
                </div>
            </div>
        </div>
    );
}
