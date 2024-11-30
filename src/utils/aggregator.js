import { ethers } from "ethers";
import axios from "axios";
import { StakingABI, StakingAddress } from "../config";

/**
 * Initialize the provider and signer for smart contract interactions.
 */
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const stakingContract = new ethers.Contract(StakingAddress, StakingABI, signer);

/**
 * Fetch staking details for a specific pair and user.
 * @param {Object} params - { pairName, userAddress }
 */
const fetchStakingDetails = async ({ pairName, userAddress }) => {
  try {
    const stakeDetails = await stakingContract.getStakeDetails(pairName, userAddress);
    const rewards = await stakingContract.claimRewards(pairName);
    return {
      pairName,
      stakeAmount: ethers.utils.formatEther(stakeDetails.amount),
      rewards: ethers.utils.formatEther(rewards),
    };
  } catch (error) {
    console.error("Error fetching staking details:", error.message);
    throw error;
  }
};

/**
 * Fetch token price from CoinGecko.
 * @param {Object} params - { tokenId }
 */
const fetchTokenPrice = async ({ tokenId }) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`
    );
    return response.data[tokenId].usd;
  } catch (error) {
    console.error("Error fetching token price:", error.message);
    throw error;
  }
};

/**
 * General-purpose aggregator for dynamic calls.
 * @param {string} functionName - The name of the function to execute.
 * @param {Object} params - Parameters required for the function.
 */
const aggregator = async (functionName, params) => {
  const functions = {
    fetchStakingDetails,
    fetchTokenPrice,
    // Add more functions here as needed
  };

  if (!functions[functionName]) {
    throw new Error(`Function "${functionName}" is not defined in the aggregator.`);
  }

  return await functions[functionName](params);
};

export { aggregator, fetchStakingDetails, fetchTokenPrice };
