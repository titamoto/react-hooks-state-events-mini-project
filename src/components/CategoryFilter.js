import React from "react";

function CategoryFilter({ categories, handleButton, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => handleButton(category)}
            className={category === selectedCategory ? "selected" : ""}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
