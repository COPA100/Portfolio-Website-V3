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
                className="hover:text-blue-500 transition-colors"
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
            <div className="sm:block hidden fixed left-12 w-[2px] h-screen z-50 bg-gradient-to-t from-indigo-500 via-teal-500 to-blue-500 animate-gradient-y"></div>
            {/* all the other links */}
            <div className="fixed sm:left-7 sm:bottom-6 sm:top-auto sm:-translate-x-0 w-auto z-50 top-[12px] left-1/2 -translate-x-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
                    <ul className="flex sm:flex-col sm:py-3 sm:px-2 items-center sm:gap-5 gap-4 px-4 py-[11px] text-white/75 font-medium">
                        {socialLinks.map(createSocialLink)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;
