import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"

function TaskLIst(){
    const [Task, setTask] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/api/tasks", {
            method= "GET",
            headers = {
                'Content-Type': 'application/json',
                "x-student-id": "23WH1A05XX"
            }

        })
        .then(res => res.json())
        .then(data => setTask(data))
        .catch(err => console.log(err))
    ,[];

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/tasks/${id}`, {
            method= "DELETE",
            headers = {
                'Content-Type': 'application/json',
                "x-student-id": "23WH1A05XX"
            }
        })
        .then(res => res.json())
        .then(data => {
            setTask(Task.filter(task => task._id !== id));
        })
        .catch(err => console.log(err))
    };
    const filteredTasks = Task.filter(task => task.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <h1>Task List</h1>
            <button onClick = {() => navigate("/tasks")}>Add Task</button>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map(task => (
                        <tr key={task._id}>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default TaskList;


        

