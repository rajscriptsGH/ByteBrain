

interface InputProps {
    placeholder: string;
    reference?: any
}

export function Input({ placeholder }: InputProps) {
    return (
        <div>
            <input
                className="px-6 py-3 border rounded-lg outline-none"
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}