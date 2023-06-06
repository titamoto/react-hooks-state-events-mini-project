import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");

  function handleDetailsChange(event) {
    setDetails(event.target.value);
  }
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { text: details, category: category };
    onTaskFormSubmit(newTask);
    setDetails("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleDetailsChange}
          value={details}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={handleCategoryChange}
          value={category}
        >
          {categories
            .filter((category) => category !== "All")
            .map((category) => {
              return <option key={category}>{category}</option>;
            })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
