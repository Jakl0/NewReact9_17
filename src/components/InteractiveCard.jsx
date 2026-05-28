import React, { useState } from "react"

function InteractiveCard(){

    const [mouseOn , setMouseOn] = useState(false);
    return(
        <div className="es" style={{padding:"10",backgroundColor:mouseOn?"blue":"green"}}
        onClick={() => alert("Tytuł")}
        onMouseEnter={()=> setMouseOn(true) 
        }
        onMouseLeave={()=> setMouseOn(false)}
        >
            <h2>Tytuł</h2>
            <h4>opis</h4>

        </div>
    )
}
export default InteractiveCard