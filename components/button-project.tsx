import React from "react";
import { useState } from "react";
import Modal from "./modal";

export interface ButtonProjectProps {
    title: string;
    year: number;
    github?: string;
    href?: string;
    children: React.ReactNode;
}

export default function ButtonProject({ year, title, children, github, href }: ButtonProjectProps) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <button className="button-project shadow clickable borders" onClick={() => { setModalOpen(true) }}>
                <h3>{year} - {title}</h3>
            </button>
            <Modal title={title} year={year} isOpen={modalOpen} onClose={() => setModalOpen(false)} >
                {github && <a href={github} target="_blank" className="button-project shadow clickable borders" style={{ marginRight: '14px' }}>Github</a>}
                {href && <a href={href} target="_blank" className="button-project shadow clickable borders" style={{ marginRight: '14px' }}>Live</a>}
                {!github && !href && <>&nbsp;&nbsp;&nbsp;</>}{children}
            </Modal>
        </>
    );
}