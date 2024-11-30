import metaAggregator from "./metaAggregator"; // Ensure this file exists in the utils directory

const dataFetcher = async (requirements) => {
  const result = {};

  try {
    // Example for fetching staking details
    if (requirements.stakingDetails) {
      result.stakingDetails = await metaAggregator.execute(
        "../services",
        "fetchStakingDetails",
        requirements.stakingDetails
      );
    }
    return result;
  } catch (error) {
    console.error("Error in dataFetcher:", error.message);
    throw error;
  }
};

export default dataFetcher;
