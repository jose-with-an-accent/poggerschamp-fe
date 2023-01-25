type ButtonProps = {
    content: string
}

export default function Button({content}: ButtonProps) {
    return(
        <button className="bg-green-700 text-white px-2 py-1 rounded-sm shadow">{content}</button>
    )
}