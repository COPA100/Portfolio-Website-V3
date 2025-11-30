import React from "react";

export default function Footer() {
    return (
        <div className="h-40">
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <p className="text-white/50 text-sm text-center">
                    © {new Date().getFullYear()} Colin Park. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
}
