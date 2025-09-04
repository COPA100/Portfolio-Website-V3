export default function NavBar() {
    return (
        // Mobile hamburger menu with glassmorphism
        <div className="absolute top-4 right-4 md:hidden z-50">
            <button className="focus:rotate-90 transition-all opacity-75">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 8H13.75M5 12H19M10.25 16L19 16"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}
