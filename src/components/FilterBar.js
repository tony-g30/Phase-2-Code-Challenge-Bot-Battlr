import React from 'react';

const FilterBar = ({ onFilter }) => {
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  
  return (
    <div className="filter-bar">
      {classes.map(botClass => (
        <button key={botClass} onClick={() => onFilter(botClass)}>
          {botClass}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
