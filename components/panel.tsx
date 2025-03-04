import React from 'react';

export default function Panel({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="panel shadow borders">
            <center><h2>{title}</h2></center>
            {children}
        </div>
    );
}