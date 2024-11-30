import React, { useState } from 'react';

const SearchPools = ({ pools, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredPools = pools.filter((pool) =>
      pool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredPools);
  };

  return (
    <div className="search-pools">
      <input 
        type="text" 
        placeholder="Search pools..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPools;
