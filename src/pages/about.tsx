export default function AboutPage() {
    return(
        <>
            <h1 className="text-2xl">About</h1>
            <p>Thanks for being interested in the project! If you want to integrate speech recognition into a project, the easiest way is to use Extraneous Speak, our service that lets you upload audio and transcribe it quickly.</p>
            <h2 className="text-2xl">Tech Stack</h2>
            <p>Create-T3-App was used to make the frontend of this website - it allows for rapid prototyping in this. The backend is made with Whisper-rs, Rust, and SQLx. </p>
        </>
    )
}