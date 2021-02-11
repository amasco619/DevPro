import React, { useState } from "react";

function Counter() {
    const [count, setcount] = useState(0)
    return(
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => setcount(count+1)}>Plus</button>
            <br></br>
            <button onClick={() => setcount(count-1)}>Minus</button>
        </div>
    )
}

export default Counter