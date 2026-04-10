import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Home />

      {/* TODO: Replace this placeholder with Routes */
      <BrowserRouter>
      <Routes>
        <Route path = "api/tasks" element = {<TaskList/>}/>
        <Route path = "api/add-tasks" element = {<AddTask/>}/>
      </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
