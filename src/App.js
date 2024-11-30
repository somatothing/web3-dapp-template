import React from "react";
import { Routes, Route } from "react-router-dom";
import lazyLoaderEnhanced from "./utils/lazyLoaderEnhanced";
import SidePanel from "./components/SidePanel";
import ErrorBoundary from "./components/ErrorBoundary";
import FooterWrapper from "./components/FooterWrapper"; // Dynamically loaded Footer




// Lazy-loaded pages
const Home = lazyLoaderEnhanced(() => import("./pages/Home"));
const AlgoBot = lazyLoaderEnhanced(() => import("./pages/AlgoBot"));
const Arbitrage = lazyLoaderEnhanced(() => import("./pages/Arbitrage"));
const Browser = lazyLoaderEnhanced(() => import("./pages/Browser"));
const Events = lazyLoaderEnhanced(() => import("./pages/Events"));
const LiquidityPools = lazyLoaderEnhanced(() => import("./pages/LiquidityPools"));
const Market = lazyLoaderEnhanced(() => import("./pages/Market"));
const MultiCompound = lazyLoaderEnhanced(() => import("./pages/MultiCompound"));
const ComputingStorage = lazyLoaderEnhanced(() => import("./pages/ComputingStorage"));
const NewsFeed = lazyLoaderEnhanced(() => import("./pages/NewsFeed"));
const Staking = lazyLoaderEnhanced(() => import("./pages/Staking"));
const SupplyBorrow = lazyLoaderEnhanced(() => import("./pages/SupplyBorrow"));

const App = () => (
  <ErrorBoundary>
      <div className="app-layout">
        <SidePanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Algobot" element={<AlgoBot />} />
          <Route path="/Arbitrage" element={<Arbitrage />} />
          <Route path="/Browser" element={<Browser />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/LiquidityPools" element={<LiquidityPools />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/MultiCompound" element={<MultiCompound />} />
          <Route path="/ComputingStorage" element={<ComputingStorage />} />
          <Route path="/NewsFeed" element={<NewsFeed />} />
          <Route path="/Staking" element={<Staking />} />
          <Route path="/SupplyBorrow" element={<SupplyBorrow />} />
        </Routes>
      </div>
  </ErrorBoundary>
);
console.log("Routes configured!");

export default App;
