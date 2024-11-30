import React, { useEffect, useState } from 'react';  

const Market = () => {  
  const [marketData, setMarketData] = useState([]);  

  useEffect(() => {  
    const fetchMarketData = async () => {  
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');  
      const data = await response.json();  
      setMarketData(data);  
    };  

    fetchMarketData();  
  }, []);  

  return (  
    <div>  
      <h3>Market Information</h3>  
      <ul>  
        {marketData.map((coin) => (  
          <li key={coin.id}>  
            {coin.name}: ${coin.current_price}  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default Market;