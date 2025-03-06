
import React from 'react';

interface ButtonProps {
    text: string;
    href?: string;
    icon?: string;
    onClick?: () => void;
}

export default function Button({ text, href, icon, onClick }: ButtonProps) {

    return (
        <a className="panel clickable
         bg-[var(--button-background-color)]
         hover:bg-[var(--button-hover-color)]
         active:bg-[var(--button-click-color)]
         text-center px-3 py-1.5 inline-block"
            {...(href ? { href: href, target: '_blank' } : {})}
            {...(onClick ? { onClick: onClick } : {})}
        >
            {text}
        </a>
    );
}