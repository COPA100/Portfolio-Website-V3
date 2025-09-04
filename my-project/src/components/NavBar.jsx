import React from "react";
import navLinks from "../data/navLinks";
import headshot from "../assets/headshot.jpg";

function createLink(link) {
    return (
        <li key={link.id}>
            <a
                href={link.href}
                className="hover:text-blue-400 transition-colors"
            >
                {link.name}
            </a>
        </li>
    );
}

export default function NavBar() {
    return (
        <div className="">
            {/* headshot */}
            <img
                src={headshot}
                className="fixed sm:left-[25px] sm:top-6 left-[13px] top-[12px] rounded-full h-12 w-12 z-50 border-2 border-white/40"
            ></img>

            {/* color line for hamburger menu on mobile sizes */}
            <div className="sm:hidden block fixed top-[34px] w-screen h-[2px] z-10 bg-gradient-to-r from-indigo-500 via-teal-500 to-blue-500 animate-gradient-x"></div>
            {/* hamburger menu */}
            <div className="fixed sm:top-[23px] sm:right-[23px]  top-[13px] right-[14px] md:hidden z-50 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg p-1 pb-0">
                <button className="focus:rotate-90 transition-all opacity-75 text-white hover:text-blue-500">
                    <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-colors"
                    >
                        <path
                            d="M5 8H13.75M5 12H19M10.25 16L19 16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            {/* navbar with glass */}
            <div className="md:block hidden fixed top-[26px] left-1/2 -translate-x-1/2 z-[100] ">
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
                    <ul className="flex items-center gap-8 px-6 py-2 text-white font-medium">
                        {navLinks.map(createLink)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
