import { useState } from "react"; 

 

function ListaZadan() { 

 // TODO: Dodaj stan dla listy zadań 
    const [lista , setLista] = useState([]);
    const [newTask , setNewTask] = useState("");

 // TODO: Dodaj funkcję dodawającą nowe zadanie 
    function AddNewTask(zadanie){
        const newId = Math.max(...lista.map(r => r.id),0)+1;
        setLista(prev => [...prev , {task:zadanie , id:newId}])
    }
 

 // TODO: Dodaj funkcję usuwającą zadanie 
    function handleDelete(identyfikator){
        setLista(lista.filter(r=> r.id !==identyfikator))
    }

    return ( 

        <div> 
        <h1>Moja lista zadań</h1> 
        <input type="text" id="zadanieinput" onChange={() =>setNewTask(zadanieinput.value)}/>
        <button onClick={newTask.length >0? () => AddNewTask(newTask) : () => alert("Napisz treść zadania")}>
            Dodaj
        </button>
        <ul>
        {
            lista.map((item) =>(
                <>
                    <li key={item.id}>{item.task}</li>
                    <button onClick={() => handleDelete(item.id)}>Usuń</button>
                </>
            ))
            }                                  
        </ul>
        </div> 

 ); 

} 
export default ListaZadan