import React from "react";
import { useState } from "react";

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
            <div className="button-project shadow clickable borders" onClick={() => { setModalOpen(true) }}>
                <h3>{title}</h3>
            </div>

            {/* MODAL */}
            {modalOpen && <div className="modal" onClick={() => setModalOpen(false)}>
                <div className="modal-content shadow borders" onClick={(e) => e.stopPropagation()}>

                    {/* HEADER */}
                    <div style={{ marginBottom: '14px' }}>
                        <button
                            className='button-project shadow clickable borders'
                            style={{ height: '2rem', marginLeft: '14px', float: 'right' }}
                            onClick={() => setModalOpen(false)}
                        >
                            X
                        </button>
                        <h2>{title}</h2>
                    </div>

                    {/* CONTENT */}
                    <div>
                        {href && <a href={href} target="_blank"
                            className="button-project shadow clickable borders"
                            style={{ marginRight: '14px', float: 'left' }}>Live
                        </a>}
                        {github && <a href={github} target="_blank"
                            className="button-project shadow clickable borders"
                            style={{ marginRight: '14px', float: 'left' }}>Github
                        </a>}

                        {/* IMAGES */}
                        {!!images && images > 0 && <>
                            {(!!href || !!github) && <div style={{ height: '60px' }}></div>}
                            {Array.from({ length: images }, (_, i) => (
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        key={i}
                                        className="shadow borders"
                                        src={`${BASE_URL}projects/${title}/${i + 1}.jpg`}
                                        alt={`Image ${i + 1}`}
                                        style={{ width: '100%', marginBottom: '14px' }}
                                    />
                                </div>
                            ))}
                        </>}

                        {/* indent first row if there are no buttons or it's a image */}
                        {(!github && !href || images) &&
                            <div style={{ width: '50px', height: '10px', float: 'left' }} />}
                        {children}
                    </div>
                </div>
            </div>}
        </>
    );
}