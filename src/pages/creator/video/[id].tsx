import CaptionItem from "../../../components/CaptionItem";

type VideoCaption = {
    startTime: number,
    content: string
}

export default function ViewVideoPage() {
    const transcript: VideoCaption[] = [
        {startTime: 0, content: 'AAAAA'},
        {startTime: 0, content: 'AAAAA'},
        {startTime: 0, content: 'AAAAA'},
        {startTime: 0, content: 'AAAAA'},
        {startTime: 0, content: 'AAAAA'},
        {startTime: 0, content: 'AAAAA'}
    ];
    return(
        <div className="flex flex-row justify-between gap-3">
            <div className="space-y-3">
                <h1 className="text-xl font-bold">STEVEN CROWDER DRAMA UPDATES!! DOCUDRAMA SAGA CONTINUES</h1>
                <div className="w-96 h-96 bg-black"></div>
            </div>
            <div>
                <h2 className="font-bold text-lg">Transcript</h2>
                <p>Click on a line of text to jump to the video's position.</p>
                <div className="shadow-lg p-3">
                    {transcript.map(({startTime, content}: VideoCaption) => (
                        <CaptionItem time={startTime} content={content} onClick={() => {}}/>
                    ))}
                </div>
            </div>
        </div>
    )
}