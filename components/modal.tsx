import React from 'react';

export interface ModalProps {
    title: string;
    year: number;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ title, year, children, isOpen, onClose }: ModalProps) {

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') onClose();
    });

    if (!isOpen) {
        document.body.style.overflow = "";
        return null;
    }
    document.body.style.overflow = "hidden";

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content shadow borders" onClick={(e) => e.stopPropagation()}>
                <h2 style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <div style={{ marginTop: '4px' }}>{year} - {title}</div>
                    <button className='button-project shadow clickable' style={{ height: '2rem' }} onClick={onClose}>X</button>
                </h2>
                {children}
            </div>
        </div>
    );
}