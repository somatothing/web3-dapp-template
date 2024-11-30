import React, { useState } from 'react';
import AddLiquidity from '../components/LiquidityPools/AddLiquidity';
import JoinPool from '../components/LiquidityPools/JoinPool';
import SearchPools from '../components/LiquidityPools/SearchPools';
import ToggleView from '../components/LiquidityPools/ToggleView';
import Analytics from '../components/LiquidityPools/Analytics';

const LiquidityPools = () => {
  const [pools, setPools] = useState([
    { id: 1, name: 'ETH/USDT', volume: 1000 },
    { id: 2, name: 'BTC/ETH', volume: 800 },
  ]);

  const [filteredPools, setFilteredPools] = useState(pools);
  const [analytics, setAnalytics] = useState([
    { metric: 'Total Volume', value: '10,000' },
    { metric: 'Active Pools', value: 5 },
  ]);

  const handleSearch = (results) => {
    setFilteredPools(results);
  };

  const handleToggle = (isGridView) => {
    console.log(`Toggled to ${isGridView ? 'Grid View' : 'Analytics View'}`);
  };

  return (
    <div>
      <h1>Liquidity Pools</h1>
      <SearchPools pools={pools} onSearch={handleSearch} />
      <ToggleView onToggle={handleToggle} />
      <AddLiquidity />
      <JoinPool pools={filteredPools} />
      <Analytics analytics={analytics} />
    </div>
  );
};

export default LiquidityPools;
