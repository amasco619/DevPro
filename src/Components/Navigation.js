import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    const [showMenu, setshowMenu] = useState(false)
    let menu
    let menuMask 

    if (showMenu) {
        menu = <div className="fixed bg-white top-0 left-0 w-10/12 h-full z-50 shadow">The Menu</div>
        menuMask = 
        <div 
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={() => setshowMenu(false)}
        >

        </div>
    }

    return (
        <nav>
            <spam className="text-xl">
                <FontAwesomeIcon icon={faBars} 
                    onClick={() => setshowMenu(!showMenu)}
                />
            </spam>
            {menuMask}
            {menu}
            
        </nav>
    )
}

export default Navigation
