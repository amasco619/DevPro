import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
    return(
        <header className="App-header flex justify-between items-center">
            <span className="font-bold">
                <Link to="/">
                    Find Items
                </Link>
            </span>
            
            <Navigation />
        </header>
    )
}
export default Header