import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="">
            <NavBar />
            <Hero />
        </div>
    );
}

export default App;
