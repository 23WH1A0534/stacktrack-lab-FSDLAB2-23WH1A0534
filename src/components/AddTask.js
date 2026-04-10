import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      title,
      description,
      status: "pending",
    };

    try {
      const response = await fetch("https://bvrithcloud.com/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      const data = await response.json();

      // update UI without reload
      onTaskAdded(data);

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("API not working");
    }
  };

  return (
    <div>
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br />

        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;