import React from "react";
import { NavLink } from "react-router-dom";

const SidePanel = () => (
  <aside className="side-panel">
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/algobot">AlgoBot</NavLink></li>
        <li><NavLink to="/arbitrage">Arbitrage Swapper</NavLink></li>
        <li><NavLink to="/browser">dApp Browser</NavLink></li>
        <li><NavLink to="/events">Events Board</NavLink></li>
        <li><NavLink to="/liquidity-pools">Liquidity Pools</NavLink></li>
        <li><NavLink to="/market">Market</NavLink></li>
        <li><NavLink to="/multi-compound">Multi-Compound</NavLink></li>
        <li><NavLink to="/computing-storage">Computing & Storage</NavLink></li>
        <li><NavLink to="/news-feed">News Feed</NavLink></li>
        <li><NavLink to="/staking">Staking</NavLink></li>
        <li><NavLink to="/supply-borrow">Supply/Borrow</NavLink></li>
      </ul>
    </nav>
  </aside>
);

export default SidePanel;
