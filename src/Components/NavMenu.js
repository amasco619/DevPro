import React from 'react'
import { Link } from 'react-router-dom'

//Here to change any Menu Item
function NavMenu(props) {
    return (
        <div>
            <div className="text-gray-600 font-black py-3">
                Category
            </div>
            <ul>
                <li>
                    <Link to="/"
                        className="text-gray-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/request"
                        className="text-gray-500 py-3 border-b block"
                        onClick={props.closeMenu}>iWant</Link>
                </li>
                <li>
                    <Link to="/about"
                        className="text-gray-500 py-3 border-b block"
                        onClick={props.closeMenu}>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu
