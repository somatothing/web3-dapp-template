const fetchStakingDetails = async ({ pairName, userAddress }) => {
  if (!userAddress) throw new Error("User address is required");
  
  // Mock data for demonstration
  const mockData = {
    "ETH/USDT": { stakeAmount: "100 ETH", rewards: "10 USDT" },
    "BTC/USDT": { stakeAmount: "50 BTC", rewards: "5 USDT" },
    "DAI/USDT": { stakeAmount: "200 DAI", rewards: "20 USDT" },
  };

  // Simulate API call delay
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockData[pairName]), 1000)
  );
};

export default fetchStakingDetails;
