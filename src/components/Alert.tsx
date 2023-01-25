type AlertProps = {
    text: string
}


export default function Alert({text}: AlertProps) {
    return(
        <div className="bg-yellow-300 shadow p-2 my-3">{text}</div>
    )
}