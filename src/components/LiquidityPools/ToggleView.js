import React, { useState } from 'react';

const ToggleView = ({ onToggle }) => {
  const [isGridView, setIsGridView] = useState(true);

  const handleToggle = () => {
    setIsGridView(!isGridView);
    onToggle(!isGridView);
  };

  return (
    <div className="toggle-view">
      <button onClick={handleToggle}>
        {isGridView ? 'Switch to Analytics View' : 'Switch to Grid View'}
      </button>
    </div>
  );
};

export default ToggleView;
