import React from "react";
import Hamburger from "./Hamburger";
import navLinks from "../data/navLinks";
import headshot from "../assets/headshot.jpg";
import CreateLinkNav from "./CreateLinkNav";

export default function NavBar() {
    return (
        <>
            {/* headshot */}
            <img
                src={headshot}
                className="fixed sm:left-[25px] sm:top-6 left-[13px] top-[12px] rounded-full h-12 w-12 z-30 border-2 border-white/40"
            ></img>
            <Hamburger />
            {/* navbar with glass */}
            <div className="md:block hidden fixed top-[26px] left-1/2 -translate-x-1/2 z-50">
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
                    <ul className="flex items-center gap-8 px-6 py-2 text-white font-medium">
                        {navLinks.map((el) => (
                            <CreateLinkNav
                                key={el.id}
                                name={el.name}
                                href={el.href}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
