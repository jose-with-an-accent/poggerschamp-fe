type CaptionItemProps = {
    time: number, 
    content: string,
    onClick: Function
}

export default function CaptionItem({time, content, onClick}: CaptionItemProps) {
    return(
        <div className="space-x-3 px-2 py-3 hover:bg-gray-200 rounded">
            <span className="text-gray-500">{time}</span>
            <span>{content}</span>
        </div>
    )
}