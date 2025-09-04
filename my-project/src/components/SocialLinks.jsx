import React from "react";
import socialLinks from "../data/socialLinks";

function createSocialLink(item) {
    return (
        <li key={item.id}>
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.alt}
                title={item.alt}
                className="hover:text-blue-400 transition-colors"
            >
                {item.svg}
            </a>
        </li>
    );
}

function SocialLinks() {
    return (
        <div className="">
            {/* gradient bar only use for desktop size*/}
            <div className="sm:block hidden fixed left-12 w-[2px] h-screen z-10 bg-gradient-to-t from-indigo-500 via-teal-500 to-blue-500 animate-gradient-y"></div>
            <div className="fixed sm:left-6 sm:bottom-6 w-13 z-20 left-3 bottom-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
                    <ul className="flex flex-col items-center sm:gap-5 gap-4 px-2 py-3 text-white font-medium">
                        {socialLinks.map(createSocialLink)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;
