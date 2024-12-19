import { useState } from "react";
import Navlink from "../Navlink";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="links" className="bg-[#cae4da] text-center py-1 px-2">
            <button
                className="text-2xl text-[#737373] font-bold md:hidden"
                id="menu-button"
                onClick={toggleMenu}>
                {menuOpen ? "Close Menu" : "Open Menu"}
            </button>

            <div
                id="nav-links"
                className={`${
                    menuOpen ? "flex" : "hidden"
                } flex-col justify-start items-center py-1 px-2 sm:text-xl md:flex md:flex-row md:justify-around`}>
                <Navlink id="About me" link="#about-me" text="About me"/>
                <Navlink id="Portfolio" link="#portfolio-of-work" text="Portfolio"/>
                <Navlink id="Contact me" link="#contact-me" text="Contact me"/>
                <Navlink id="View CV" link="https://rxresu.me/vivhayles/viv-hayles-cv" text="View CV"/>
            </div>
        </nav>
    );
}

export default Navbar;
