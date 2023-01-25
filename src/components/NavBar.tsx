import Link from "next/link";
type NavItemProps = {
    name: string,
    to: string
}

function NavItem({name, to}: NavItemProps) {
    return(
        <li className="hover:bg-blue-400 p-1 rounded-sm"><Link href={to}>{name}</Link></li>
    )
}
export default function NavBar() {
    return(
        <nav className="bg-blue-600 text-white p-4" >
            <ul className="flex flex-row space-x-3">
            <NavItem to="/" name="PoggersChamp" />
            <NavItem to="/about" name="About" />
            </ul>
        </nav>
    )
}