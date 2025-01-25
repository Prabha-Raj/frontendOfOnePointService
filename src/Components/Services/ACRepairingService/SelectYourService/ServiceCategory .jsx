import React, { useEffect, useState } from 'react';
import "./Category.css"
const Category = ({ categories, onSelectCategory }) => {
  const [count, setCount] = useState(false);
useEffect(()=>{
    if(!count){
      onSelectCategory(categories[0]);
      setCount(true)
    }
})  
  return (
    <ul className="nav-tabs">
      {/* {onSelectCategory(categories[0])} */}
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
