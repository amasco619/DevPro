import React from "react";
import Navigation from "./Navigation";

function Header() {
    return(
        <header className="App-header flex justify-between items-center">
            <span className="font-bold">
                Find Items
            </span>
            
            <Navigation />
        </header>
    )
}
export default Header