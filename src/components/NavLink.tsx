type Props = {
    children?: string,
    link?: string,
}

function NavLink ( { children, link = "_blank" }: Readonly<Props> ) {
    return (
        <a href={link} className="text-violet-300 text-2xl hover:text-yellow-100 font-light ">
            {children}
        </a>
    )
}

export default NavLink