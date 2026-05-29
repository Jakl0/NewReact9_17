import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'; 

function Formularz(){

    const [text1 ,settext1] = useState("");
    const [text2 ,settext2] = useState("");
    const [text3 ,settext3] = useState("");
    const [message , setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setMessage(e.target.message.value);
        
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="mailinput" className="form-control" onChange={() =>settext1(mailinput.value)} />
            {}
            <input type="text" id="messageinput" className="form-control" onChange={() =>settext2(passwordinput.value)} />
            {}
            <input type="text" id="confirminput" className="form-control" onChange={() =>settext3(confirminput.value)} />
            {}
            <button type="submit" className="btn btn-primary" disabled={!(text1.length >0 &&text2.length >0)} >Zarejestruj</button>
            </form>
            <p>{message}</p>
        </>
    )
}
export default Formularz