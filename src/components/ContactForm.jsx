import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'; 

function ContactForm(){

    const [text1 ,settext1] = useState("");
    const [text2 ,settext2] = useState("");
    const [message , setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setMessage(e.target.message.value);
        
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="mail" id="mailinput" className="form-control" onChange={() =>settext1(mailinput.value)} />
            <textarea name="message" id="messageinput" className="form-control" onChange={() =>settext2(messageinput.value)} />
            <button type="submit" className="btn btn-primary" disabled={!(text1.length >0 &&text2.length >0)} >Wyślij</button>
            </form>
            <p>{message}</p>
        </>
    )
}
export default ContactForm