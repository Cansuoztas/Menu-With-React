import React from 'react';

const filterButtons = [
  {
    text: "All",
    changeTrigger: "",
  },
  {
    text: "Breakfast",
    changeTrigger: "breakfast",
  },
  {
    text: "Lunch",
    changeTrigger: "lunch",
  },
  {
    text: "Shakes",
    changeTrigger: "shakes",
  }
]

export const Categories = ({ setCategory }) => {
  return (
    <div className="btn-container">
      {filterButtons.map((button, i) => (
        <button key={i + 1} onClick={() => setCategory(button.changeTrigger)} className="filter-btn">
          {button.text}
        </button>
      ))}
    </div>
  )
}
