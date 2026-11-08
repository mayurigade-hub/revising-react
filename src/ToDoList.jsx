import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function ToDoList() {
    let [todos, setTodos] = useState([{task: "Sample-task", id: uuidv4()}]);
    let [newTask, setNewTask] = useState("");// To store the value of the input field, In the first render, it will be empty, ""

    const addTask = () => {
        setTodos([...todos, {}, {task: newTask, id: uuidv4()}]);
        setNewTask("");//To refresh the input field after adding a task
    }

    const updatevalue = (event) => {
        setNewTask(event.target.value);
    }

    return(
        <div>
            <input placeholder="Add a new task..." value={newTask} onChange = { updatevalue } ></input>
            <br></br><br></br>
            <button onClick={addTask}> Add Task</button>
            <br></br>
            <hr></hr>
            <h4>Task to do</h4>
            <ul>
                {
                todos.map((todo) => 
                <li key = {todo.id}> 
                    {todo.task}
                </li>
                )}
            </ul>
        </div>
    )
}