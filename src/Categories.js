import React from 'react';

const Categories = ({setCategory}) => {
  return (
    <div className="btn-container">
      <button onClick={() => setCategory("")} className="filter-btn">
        All
      </button>
      <button onClick={() => setCategory("breakfast")} className="filter-btn">
        Breakfast
      </button>
      <button onClick={() => setCategory("lunch")} className="filter-btn">
        Lunch
      </button>
      <button onClick={() => setCategory("shakes")} className="filter-btn">
        Shakes
      </button>
    </div>
  );
};

export default Categories;