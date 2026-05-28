import React, { useState } from "react"

function LoginForm(){

    const [isPassword , setIsPassword] = useState(false);
    return(
        <>
            <input type={isPassword?"password":"text"}/>
            <button onClick={() => setIsPassword(!isPassword)}>{isPassword?"Pokaż hasło":"Ukryj hasło"}</button>
        </>
    )
}
export default LoginForm