export default function Hero() {
    return (
        <div className="font-montserrat relative h-screen w-full flex flex-col items-center justify-center bg-gray-900">
            <div
                className="sm:w-[60vw] w-[95vw] bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500
         bg-clip-text text-transparent animate-gradient-x"
            >
                <div className="flex">
                    <h2 className="text-[5vw] sm:text-[2vw] text-white opacity-50">
                        Fullstack Engineer
                    </h2>
                </div>

                <div className="flex items-center">
                    <h1 className="text-[18vw] sm:text-[12vw] font-bold text-center leading-none">
                        COLIN
                    </h1>
                    <div className="flex-grow h-[2px] bg-white/50 ml-3 sm:mr-[14%]"></div>
                </div>

                <div className="flex items-center justify-end">
                    <div className="flex-grow h-[2px] bg-white/50 mr-3 sm:ml-[14%]"></div>
                    <h1 className="text-[18vw] sm:text-[12vw] font-bold text-center leading-none">
                        PARK
                    </h1>
                </div>
            </div>
        </div>
    );
}
