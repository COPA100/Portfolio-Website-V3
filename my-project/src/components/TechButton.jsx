import React from "react";

export default function TechButton(props) {
    return (
        <li className="w-fit bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg px-2 py-1">
            {props.name}
        </li>
    );
}
