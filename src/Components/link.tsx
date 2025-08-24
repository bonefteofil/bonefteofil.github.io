export default function Link({ text, href }: { text: string; href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {text}
        </a>
    );
}