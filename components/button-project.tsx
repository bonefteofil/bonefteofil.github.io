import React from "react";
import { useState } from "react";
import Button from "./button";

export interface ButtonProjectProps {
    title: string;
    github?: string;
    href?: string;
    children: React.ReactNode;
    images?: number;
}

export default function ButtonProject({ title, children, github, href, images }: ButtonProjectProps) {

    const BASE_URL = (import.meta as any).env.BASE_URL;

    const [modalOpen, setModalOpen] = useState(false);

    document.body.style.overflow = modalOpen ? "hidden" : ""; // disable background scrolling when modal is open
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setModalOpen(false); // close modal on ESC key
    });

    return (
        <>
            {/* PROJECT BUTTON */}
            <Button onClick={() => { setModalOpen(true) }}>{title}</Button>

            {/* MODAL */}
            {modalOpen && <div
                className="fixed inset-0 flex items-start justify-center bg-black/50 py-10 overflow-y-auto transition-all duration-200"
                onClick={() => setModalOpen(false)}
            >
                <div
                    className="m-3 md:m-0 md:w-4/5 max-w-200 p-3 bg-[var(--panel-background-color)] panel"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* HEADER */}
                    <div>
                        <div className="height-2 ml-2 float-right" >
                            <Button onClick={() => setModalOpen(false)}>X</Button>
                        </div>
                        <p className='text-xl/5 mb-3'>{title}</p>
                    </div>

                    {/* CONTENT */}
                    <div>
                        {/* WEBSITE & GITHUB BUTTONS */}
                        <div className="flex gap-2 float-left mr-2">
                            {!!href && <Button href={href}>Live</Button>}
                            {!!github && <Button href={github}>Github</Button>}
                        </div>

                        {!!images && images > 0 && <>
                            {/* add padding */}
                            {(!!href || !!github) && <div className="w-full p-5" />}

                            {/* IMAGES */}
                            {Array.from({ length: images }, (_, i) => (
                                <div className="flex justify-center" key={i}>
                                    <img
                                        key={i}
                                        className="panel w-fit mb-2"
                                        src={`${BASE_URL}projects/${title}/${i + 1}.jpg`}
                                        alt={`Image ${i + 1}`}
                                    />
                                </div>
                            ))}
                        </>}

                        {/* indent first row if there are no buttons or it's a image */}
                        {(!github && !href || images) &&
                            <div className="w-10 h-1 float-start" />}
                        {children}
                    </div>
                </div>
            </div>}
        </>
    );
}