import React from "react";
import TypingText from "../components/TypingText";

export default function Hero() {
    return (
        <div id="home">
            <div className="relative h-screen w-full flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-fade-in">
                    <div
                        className="rounded-full"
                        style={{
                            width: "clamp(250px, 65vmin, 750px)",
                            height: "clamp(250px, 65vmin, 750px)",
                            background:
                                "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.08) 30%, rgba(139,92,246,0.04) 60%, rgba(139,92,246,0.02) 80%, transparent 100%)",
                            filter: "blur(40px)",
                            boxShadow:
                                "0 0 120px rgba(139,92,246,0.5), 0 0 200px rgba(139,92,246,0.25)",
                        }}
                    />
                </div>

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
    );
}
