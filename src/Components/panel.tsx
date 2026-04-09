import React from 'react';

export default function Panel({ title, children }: { title?: string, children: React.ReactNode }) {
    return (
        <div className="p-3 bg-(--panel-transparent-bg-color) panel w-full">
            {title && <div className='text-2xl text-center mb-1'>{title}</div>}
            {children}
        </div>
    );
}