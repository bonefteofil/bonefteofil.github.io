import React from 'react';

export default function Panel({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="panel shadow borders">
            <h4>{title}</h4>
            {children}
        </div>
    );
}