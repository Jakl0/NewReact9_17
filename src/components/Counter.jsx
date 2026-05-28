import React, { useState } from "react"

function Counter(){

    const [currentCount , setCount] = useState(0);
    return(
        <>
            <p>{currentCount}</p>
            <button onClick={()=> setCount(currentCount+1) }>+1</button>
            <button onClick={()=> setCount(currentCount-1)}>-1</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </>
    )
}
export default Counter