const fetchTokenPrice = async (tokens) => {
    // Mock logic to fetch token prices
    return tokens.map((token) => ({ token, price: Math.random() * 1000 }));
  };
  
  export default fetchTokenPrice;
  