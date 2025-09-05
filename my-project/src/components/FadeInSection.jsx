import { useEffect, useRef, useState } from "react";

function FadeInSection({ children }) {
    const ref = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 } // adjust for how early animation triggers
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`fade-in ${isVisible ? "show" : ""}`}>
            {children}
        </div>
    );
}

export default FadeInSection;
