import React, { useState } from "react";
import Task from "./Task.js";

function TaskList({ tasks }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [newTasks, setNewTasks] = useState(tasks);

  function handleClick(index) {
    setIsDeleted(isDeleted === true);
    setNewTasks(newTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="tasks">
      {newTasks.map((task, index) => {
        return (
          <Task
            key={index}
            text={task.text}
            category={task.category}
            handleClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
