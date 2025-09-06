import { useState } from "react";
import navLinks from "../data/navLinks";
import CreateLinkNav from "./CreateLinkNav";

export default function Hamburger() {
    const [open, setOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleMenu = () => {
        if (open) {
            closeMenu();
        } else {
            setOpen(true);
        }
    };

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setOpen(false);
            setIsClosing(false);
        }, 300);
    };

    return (
        <div className="">
            {/* same gradient line thing i used for the hero page */}
            <div className="sm:hidden block fixed top-[34px] w-screen h-[2px] z-20 bg-gradient-to-r from-indigo-500 via-teal-500 to-blue-500 animate-gradient-x"></div>
            {/* hamburger menu */}
            <div className="fixed sm:top-[23px] sm:right-[23px]  top-[12px] right-[14px] md:hidden z-70 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg p-1 pb-0">
                <button
                    onClick={toggleMenu}
                    className={`transition-transform duration-300 opacity-75 text-white hover:text-blue-500 ${
                        open ? "rotate-90" : ""
                    }`}
                >
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

            {/* div with the hamburger panel that pops up */}
            {open && (
                <>
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
                        onClick={closeMenu}
                    />
                    <div
                        className={`fixed top-0 right-0 w-1/2 h-screen z-40 bg-white/10 backdrop-blur-md border-l border-white/20 shadow-lg flex justify-center items-center ${
                            isClosing
                                ? "animate-slide-out-right"
                                : "animate-slide-in-right"
                        }`}
                    >
                        <ul className="flex flex-col px-6 py-2 text-white font-medium gap-10 uppercase text-center">
                            {navLinks.map((element) => (
                                <CreateLinkNav
                                    key={element.id}
                                    name={element.name}
                                    href={element.href}
                                    onClick={closeMenu}
                                />
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}
