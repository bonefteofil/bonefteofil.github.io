
export default function Card({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="p-2 bg-(--panel-bg-color) panel">
            {title && <div className='text-lg text-center mb-1'>{title}</div>}
            <div className="flex flex-wrap gap-2 justify-center">
                {children}
            </div>
        </div>
    )
}