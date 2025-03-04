import React from "react";

export default function ButtonProject({ href, name }: { href?: string, name: string }) {
    return (
        <a href={href || "#"} className="button_project shadow clickable borders">
            {name}
        </a>
    );
}