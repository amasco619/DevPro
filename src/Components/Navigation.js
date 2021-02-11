import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useTransition, animated} from 'react-spring'

function Navigation() {
    const [showMenu, setshowMenu] = useState(false)
    const transitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav>
            <spam className="text-xl">
                <FontAwesomeIcon icon={faBars} 
                    onClick={() => setshowMenu(!showMenu)}
                />
            </spam>
            
            {
                transitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} style={props} 
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setshowMenu(false)}>
                    </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} style={props} className="fixed bg-white top-0 left-0 w-10/12 h-full z-50 shadow p-3">
                        
                        <span className="font-bold">
                            Category
                        </span>
                        <ul className="p-3">
                            <li>Handout</li>
                            <li>Electronics</li>
                        </ul>
                    </animated.div>
                )
            }
            
        </nav>
    )
}

export default Navigation
