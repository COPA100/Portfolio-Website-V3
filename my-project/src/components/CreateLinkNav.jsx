import React from "react";

export default function CreateLinkNav(props) {
    return (
        <li>
            <a
                href={props.href}
                onClick={props.onClick}
                className="hover:text-blue-400 transition-all"
            >
                {props.name}
            </a>
        </li>
    );
}
