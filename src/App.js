import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} />} />
        <Route
          path="/add-task"
          element={<AddTask onTaskAdded={handleTaskAdded} />}
        />
      </Routes>
    </Router>
  );
}

export default App;