import React from 'react';
import "./Category.css"
const Category = ({ categories, onSelectCategory }) => {
  return (
    <ul className="nav-tabs">
      {categories.map((category, index) => (
        <li
          key={index}
          className={`tab ${category.isActive ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          <img src={category.icon} alt={category.name} className="" />
          <span>{category.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Category;
