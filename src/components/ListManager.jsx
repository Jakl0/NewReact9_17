import React, { useState } from "react"

function ListManager(){

    const [List , setList] = useState([]);
    const [newTask,setNewTask] = useState();

    function handleChange(event){
        setNewTask(event.target.value);
    }
    return(
        <>
            <input onChange={handleChange}/>
            <button onClick={() => setList(prev => [... prev , newTask])}>Dodaj losowe zadanie</button>
            <button onClick={() => setList(prev => [... prev , newTask , newTask , newTask])}>Dodaj 3 zadania</button>
            <ul>
            {
                List.map((item,index) => (
                    <li key={index}>{item}</li>
                ))
            }
            </ul>
        </>
    )
}
export default ListManager