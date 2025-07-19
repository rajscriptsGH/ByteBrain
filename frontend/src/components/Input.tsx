
interface InputProps {
    placeholder: string;
    reference?: React.RefObject<HTMLInputElement>;
    type: string;
}

export function Input({ placeholder, reference, type }: InputProps) {
    return (
        <div>
            <input
                className="px-6 py-3 border rounded-lg outline-none"
                placeholder={placeholder}
                ref={reference}
                type={type}
            />
        </div>
    )
}