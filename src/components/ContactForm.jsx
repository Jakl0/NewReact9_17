import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'; 

function ContactForm(){

    const [text1 ,settext1] = useState();
    const [text2 ,settext2] = useState();
    return(
        <>
        <form>
            <input type="text" name="mail" className="form-control" />
            <textarea name="message" className="form-control" />
            <button type="submit" className="btn btn-primary" ></button>
            </form>
        </>
    )
}
export default ContactForm