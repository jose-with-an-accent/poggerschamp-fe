import Link from "next/link"
import Button from "./Button"

type CardProps = {
heading: string,
description: string,
to: string
}
export default function Card({heading, description, to}: CardProps) {
    return(
        <div className="shadow-md space-y-2 rounded h-48 w-96 p-4">
            <h1 className="text-lg">{heading}</h1>
            <p>{description}</p>
            <Link href={to}><Button content="View More" /></Link>
        </div>
    )
}