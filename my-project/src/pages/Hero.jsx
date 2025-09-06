import React from "react";
import TypingText from "../components/TypingText";

export default function Hero() {
    return (
        <div id="home">
            <div className="relative h-screen w-full flex flex-col items-center justify-center">
                <div className="animate-pulse">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-fade-in">
                        <div
                            className="rounded-full"
                            style={{
                                width: "clamp(250px, 65vmin, 750px)",
                                height: "clamp(250px, 65vmin, 750px)",
                                background:
                                    "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.08) 30%, rgba(139,92,246,0.04) 60%, rgba(139,92,246,0.02) 80%, transparent 10%)",
                                filter: "blur(40px)",
                                boxShadow:
                                    "0 0 120px rgba(139,92,246,0.5), 0 0 200px rgba(139,92,246,0.25)",
                            }}
                        />
                    </div>
                </div>

                <div
                    className="sm:w-[60vw] w-[95vw] bg-gradient-to-r from-indigo-500 via-teal-500 to-blue-500
                        bg-clip-text text-transparent animate-gradient-x"
                >
                    <div className="flex">
                        <h2 className="text-[5vw] sm:text-[2vw] text-white opacity-50">
                            F
                            <TypingText text="ullstack* Engineer" speed={100} />
                        </h2>
                    </div>

                    <div className="flex items-center justify-center">
                        <h1 className="text-[24vw] sm:text-[12vw] font-bold text-center leading-none ">
                            C
                            <TypingText text="OLIN" speed={250} />
                        </h1>
                        <div className="flex-grow h-[2px] bg-white/50 sm:ml-3 ml-1 sm:mr-[14%] animate-fade-right"></div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="flex-grow h-[2px] bg-white/50 sm:mr-3 mr-1 sm:ml-[14%] animate-fade-left"></div>
                        <h1 className="text-[24vw] sm:text-[12vw] font-bold text-center leading-none">
                            P
                            <TypingText text="ARK" speed={250} />
                        </h1>
                    </div>
                </div>
                {/* arrow down icon */}
                <div className="animate-fade-in-late">
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 animate-ping">
                        <svg
                            fill="#FFFFFF"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="30px"
                            height="30px"
                            viewBox="0 0 100 100"
                            enableBackground="new 0 0 100 100"
                            xmlSpace="preserve"
                        >
                            <g>
                                <path
                                    d="M78.466,35.559L50.15,63.633L22.078,35.317c-0.777-0.785-2.044-0.789-2.828-0.012s-0.789,2.044-0.012,2.827L48.432,67.58
                                    c0.365,0.368,0.835,0.563,1.312,0.589c0.139,0.008,0.278-0.001,0.415-0.021c0.054,0.008,0.106,0.021,0.16,0.022
                                    c0.544,0.029,1.099-0.162,1.515-0.576l29.447-29.196c0.785-0.777,0.79-2.043,0.012-2.828S79.249,34.781,78.466,35.559z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
