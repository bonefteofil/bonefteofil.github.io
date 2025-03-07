import React from "react";

export default function TechnologyLogo({ text, src }: { text: string, src: string }) {

    const BASE_URL = (import.meta as any).env.BASE_URL;

    return (
        <center className="flex flex-col items-center">
            <img
                className="w-10 h-10"
                src={BASE_URL + "icons/" + src + ".svg"}
                alt={src}
            />
            <p className="text-sm">{text}</p>
        </center>
    );
}