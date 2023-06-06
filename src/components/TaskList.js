import React, { useState, useEffect } from "react";
import Task from "./Task.js";

function TaskList({ tasks }) {
  const [newTasks, setNewTasks] = useState(tasks);

  function handleClick(index) {
    setNewTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  useEffect(() => {
    setNewTasks(tasks);
  }, [tasks]);

  return (
    <div className="tasks">
      {newTasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
