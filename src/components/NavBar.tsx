import { useState, useEffect } from "react";
import useScreenSize from "../useScreenSize"
import NavLink from "./NavLink"

function NavBar () {
    const screenSize = useScreenSize();
    const isWidthSmall = screenSize.width < 1000;

    useEffect(() => {
        setAboutMe(isWidthSmall ? "🎒" : "About Me")
    }, [isWidthSmall])

    const [aboutMe, setAboutMe] = useState("About Me");

    return (
        <nav className="bg-[#00000080] text-white h-20 w-full flex items-center justify-center p-7 shadow-md">
            <ul className="flex space-x-10">
                <NavLink>{aboutMe}</NavLink>
                <NavLink>Game Projects</NavLink>
                <NavLink>Web Projects</NavLink>
                <NavLink>Illustrations</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar