import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function FadeInOnScroll({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 600,
    threshold = 0.1,
}) {
    const [elementRef, isIntersecting, hasIntersected] =
        useIntersectionObserver({
            threshold,
        });

    const getTransform = () => {
        if (direction === "up") return "translateY(30px)";
        if (direction === "down") return "translateY(-30px)";
        if (direction === "left") return "translateX(30px)";
        if (direction === "right") return "translateX(-30px)";
        return "none";
    };

    const animationStyles = {
        opacity: hasIntersected ? 1 : 0,
        transform: hasIntersected ? "translate(0)" : getTransform(),
        transition: `all ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
    };

    return (
        <div ref={elementRef} className={className} style={animationStyles}>
            {children}
        </div>
    );
}
