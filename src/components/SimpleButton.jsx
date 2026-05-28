import React from "react"

function SimpleButton({label,onClick,color}){

    return(
        <>
            <button onClick={onClick} style={{backgroundColor:color}}>{label}</button>
        </>
    )
}
export default SimpleButton