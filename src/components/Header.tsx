type HeaderProps = {
    headline: string
}

export default function Header({headline}: HeaderProps) {
    return(
        <section className="h-96 mb-3 rounded bg-blue-600 shadow-lg text-white flex items-center justify-center">
        <h1 className="text-3xl">{headline}</h1>
      </section>
    )
}