import React from "react";
import ProjectCard, { createCard } from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
    return (
        <div className="min-h-screen" id="projects">
            {projects.map(createCard)}
        </div>
    );
}
