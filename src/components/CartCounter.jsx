import React, { useState } from "react"

function CartCounter(){

    const [currentCount , setCount] = useState(0);
    return(
        <>
            <button onClick={()=> setCount(prev => prev +1)}>Dodaj</button>
            <button onClick={()=> setCount(prev => prev +5)}>Dodaj 5</button>
            <button onClick={()=> setCount(prev => prev *2)}>Podwój</button>
            <button onClick={()=> setCount(prev => prev -1)}>Usuń</button>
            <p>{currentCount}</p>
        </>
    )
}
export default CartCounter