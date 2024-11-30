import React, { useState } from "react";
import metaAggregator from "../utils/metaAggregator"; // Importing the centralized aggregator

const Staking = () => {
  const [pairName, setPairName] = useState("ETH/USDT");
  const [userAddress, setUserAddress] = useState("");
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await metaAggregator.execute(
        "../services",
        "fetchStakingDetails",
        { pairName, userAddress }
      );
      setDetails(result);
    } catch (err) {
      console.error("Error fetching staking details:", err.message);
      setError("Failed to fetch staking details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Staking Page</h1>
      <div className="mb-4">
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          placeholder="Enter Wallet Address"
          className="border p-2 rounded w-full mb-2"
        />
        <select
          value={pairName}
          onChange={(e) => setPairName(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="ETH/USDT">ETH/USDT</option>
          <option value="BTC/USDT">BTC/USDT</option>
          <option value="DAI/USDT">DAI/USDT</option>
        </select>
      </div>
      <button
        onClick={handleFetchDetails}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Fetching..." : "Fetch Staking Details"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {details && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold">Staking Details</h3>
          <p>Staked Amount: {details.stakeAmount}</p>
          <p>Rewards: {details.rewards}</p>
        </div>
      )}
    </div>
  );
};

export default Staking;
