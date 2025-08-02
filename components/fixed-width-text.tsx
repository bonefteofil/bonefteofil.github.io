
export default function FixedWidthText({ text }: { text: string }) {
    return (
        <span className="inline-flex">
            {text}&nbsp;
        </span>
    );
}