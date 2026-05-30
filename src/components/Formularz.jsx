import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'; 

function Formularz(){

    const [text1 ,settext1] = useState("");
    const [text2 ,settext2] = useState("");
    const [text3 ,settext3] = useState("");

    return(
        <>
        <form>
            <input type="text" id="mailinput" className="form-control" onChange={() =>settext1(mailinput.value)} />

            <div style={{visibility:text1.length > 0?"visible":"hidden",
                color:text1.includes('@')?"green":"red"
            }}>{text1.includes('@')?"OK":"Email musi zawierać @"}</div>

            <input type="password" id="passwordinput" className="form-control" onChange={() =>settext2(passwordinput.value)} />
            <div style={{visibility:text2.length > 0?"visible":"hidden",
                color:text2.length >=8?"green":"red"
            }}>{text2.length >=8?"OK":"hasło musi mieć przynajmniej 8 znaków"}</div>

            <input type="password" id="confirminput" className="form-control" onChange={() =>settext3(confirminput.value)} />

            <div style={{visibility:text3.length > 0?"visible":"hidden",
                color:text3==text2?"green":"red"
            }}>{text2 == text3?"OK":"Hasła muszą się zgadzać"}</div>

            <button type="submit" className="btn btn-primary" disabled={!(text1.includes('@') >0 &&text2.length >=8 && text3 == text2)} >Zarejestruj</button>
            </form>
            <p>{message}</p>
        </>
    )
}
export default Formularz