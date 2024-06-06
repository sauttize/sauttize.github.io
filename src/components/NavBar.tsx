import { useState, useEffect } from "react";
import useScreenSize from "../useScreenSize"
import NavLink from "./NavLink"

function NavBar () {
    const screenSize = useScreenSize();
    const isWidthSmall = screenSize.width < 1000;

    useEffect(() => {
        setAboutMe(isWidthSmall ? "🧑🏻" : "About Me");
        setGameProjects(isWidthSmall ? "🎮" : "Game Projects");
        setWebProjects(isWidthSmall ? "💻" : "Web Projects");
        setIllustrations(isWidthSmall ? "🖼️" : "Illustrations");
    }, [isWidthSmall])

    const [aboutMe, setAboutMe] = useState("About Me");
    const [gameProjects, setGameProjects] = useState("Game Projects");
    const [webProjects, setWebProjects] = useState("Web Projects");
    const [illustrations, setIllustrations] = useState("Illustrations");

    return (
        <nav className="bg-[#00000080] text-white h-20 w-full flex items-center justify-center p-7 shadow-md">
            <ul className="flex space-x-10">
                <NavLink>{aboutMe}</NavLink>
                <NavLink>{gameProjects}</NavLink>
                <NavLink>{webProjects}</NavLink>
                <NavLink>{illustrations}</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar