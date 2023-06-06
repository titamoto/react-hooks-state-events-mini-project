import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //const [filteredTasks, setFilteredTasks] = useState(TASKS);

  function handleCategoryButton(category) {
    setSelectedCategory(category);
    console.log(TASKS.filter((task) => task.category === selectedCategory));

    // setFilteredTasks(
    //   TASKS.filter((task) => {
    //     if (category === "All") return true;
    //     return task.category === category;
    //   })
    // );
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleButton={handleCategoryButton}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm />
      <TaskList
        tasks={
          selectedCategory === "All"
            ? TASKS
            : TASKS.filter((task) => task.category === selectedCategory)
        }
      />
    </div>
  );
}

export default App;
