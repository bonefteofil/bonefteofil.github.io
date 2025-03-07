import React from 'react';

interface ButtonProps {
    href?: string;
    icon?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Button({ href, icon, onClick, children }: ButtonProps) {

    const BASE_URL = (import.meta as any).env.BASE_URL;

    return (
        <a className={`panel clickable text-center flex flex-row gap-1 grow
            ${icon ? "px-1 py-1" : "px-3 py-1.5"}
            bg-[var(--button-background-color)]
            hover:bg-[var(--button-hover-color)]
            active:bg-[var(--button-click-color)]`}
            {...(href ? { href: href, target: '_blank' } : {})}
            {...(onClick ? { onClick: onClick } : {})}
        >
            {icon && <img
                className="w-8 h-8"
                src={BASE_URL + "icons/" + icon + ".svg"}
                alt={icon}
            />}
            <div className='m-auto'>
                {children}
            </div>
        </a>
    );
}