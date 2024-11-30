import React from 'react';

// Define the type of a pool
interface Pool {
  id: string;
  name: string;
  liquidity: number;
}

// Define props for the JoinPool component
interface JoinPoolProps {
  pools: Pool[];
}

const JoinPool: React.FC<JoinPoolProps> = ({ pools }) => {
  const handleJoinPool = (poolId: string) => {
    // Logic to join pool
    console.log(`Joined pool with ID: ${poolId}`);
  };

  return (
    <div>
      <h2>Join a Pool</h2>
      <ul>
        {pools.map((pool) => (
          <li key={pool.id}>
            {pool.name} (Liquidity: {pool.liquidity})
            <button onClick={() => handleJoinPool(pool.id)}>Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinPool;
