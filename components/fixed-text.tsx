import React from "react";


export default function FixedText({ text }: { text: string }) {
    return (
        <span className="inline-flex">
            {text}&nbsp;
        </span>
    );
}