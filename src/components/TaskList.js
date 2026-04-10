import React from "react";
import { Link } from "react-router-dom";

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>

      {/* Navigation to /add-task */}
      <Link to="/add-task">
        <button>Add Task</button>
      </Link>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;