import React from 'react';

export default function Panel({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-wrap flex-col m-3 p-3 max-w-150 bg-[var(--panel-background-color)] panel">
            <div className='text-2xl text-center mb-1'>{title}</div>
            {children}
        </div>
    );
}