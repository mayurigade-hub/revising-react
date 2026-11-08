import { useState } from 'react';

export default function ToDoList() {
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTask, setNewTask] = useState("");

    const addTask = () => {
        setTodos([...todos, newTask]);
        setNewTask("");
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
                <li> 
                    {todo}
                </li>
                )}
            </ul>
        </div>
    )
}