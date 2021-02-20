import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from 'react-spring'
import Request from './Request'

function ReqPage() {
    const [req, setReq] = useState(false)

    const maskTransitions = useTransition(req, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(req, null, {
        from: { opacity: 0, transform: 'translateY(-100%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(-100%)' },
    })
    return (
        <nav>
            <spam className="text-xl">
                <FontAwesomeIcon icon={faBars}
                    onClick={() => setReq(!req)}
                />
            </spam>

            {
                maskTransitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        key={key} style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setReq(false)}>
                    </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        key={key} style={props}
                        className="fixed bg-white top-0 left-0 w-10/12 h-full z-50 shadow p-3">
                        <Request closeMenu={() => setReq(false)} />
                    </animated.div>
                )
            }

        </nav>
    )
}

export default ReqPage
