import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import SocialLinks from "./components/SocialLinks";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="overflow-hidden font-montserrat">
            <div className="h-[auto] w-full bg-[#020617] relative z-0">
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background: "#020617",
                        backgroundImage: `
                            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
                    }}
                />
                <NavBar />
                <SocialLinks />
                <Hero />
                <About />
            </div>
        </div>
    );
}

export default App;
