import React from "react";
import TypingText from "../components/TypingText";

export default function Hero() {
    return (
        <div id="home">
            <div className="min-h-screen w-full bg-[#020617] relative z-[-1]">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "#020617",
                        backgroundImage: `
                    linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
                    radial-gradient(circle at 50% 50%, rgba(139,92,246,0.2) 0%, transparent 70%)
                  `,
                        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
                    }}
                />

                <div className="relative h-screen w-full flex flex-col items-center justify-center">
                    <div
                        className="sm:w-[60vw] w-[95vw] bg-gradient-to-r from-indigo-500 via-teal-500 to-blue-500
         bg-clip-text text-transparent animate-gradient-x"
                    >
                        <div className="flex ">
                            <h2 className="text-[5vw] sm:text-[2vw] text-white opacity-50">
                                F
                                <TypingText text="ullstack* Engineer" speed={100} />
                            </h2>
                        </div>

                        <div className="flex items-center justify-center">
                            <h1 className="text-[24vw] sm:text-[12vw] font-bold text-center leading-none">
                                C
                                <TypingText text="OLIN" speed={250} />
                            </h1>
                            <div className="flex-grow h-[2px] bg-white/50 ml-3 sm:mr-[14%] animate-fade-right"></div>
                        </div>

                        <div className="flex items-center justify-end">
                            <div className="flex-grow h-[2px] bg-white/50 mr-3 sm:ml-[14%] animate-fade-left"></div>
                            <h1 className="text-[24vw] sm:text-[12vw] font-bold text-center leading-none">
                                P
                                <TypingText text="ARK" speed={250} />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
