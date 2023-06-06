import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [updatedTasks, setUpdatedTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  //const [filteredTasks, setFilteredTasks] = useState(updatedTasks);

  // useEffect(() => {
  //   if (selectedCategory === "All") {
  //     setFilteredTasks(updatedTasks);
  //   } else {
  //     const filtered = updatedTasks.filter(
  //       (task) => task.category === selectedCategory
  //     );
  //     setFilteredTasks(filtered);
  //   }
  // }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setUpdatedTasks(TASKS);
    } else {
      const filtered = TASKS.filter(
        (task) => task.category === selectedCategory
      );
      setUpdatedTasks(filtered);
    }
  }, [selectedCategory]);

  function handleCategoryButton(category) {
    setSelectedCategory(category);
  }

  function onTaskFormSubmit(newTask) {
    const newArray = [...updatedTasks, newTask];
    setUpdatedTasks(newArray);
    console.log(newArray);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleButton={handleCategoryButton}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={updatedTasks} />
    </div>
  );
}

export default App;
