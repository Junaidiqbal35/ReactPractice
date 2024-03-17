// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
function ToDoList(){
    const [tasks, setTasks] = useState("")
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addTask(){

    }
    function deleteTask(index){

    }

    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }
    return(
        <div className="to-do-list">

        </div>
    )

}