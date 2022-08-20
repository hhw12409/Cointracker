import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./pages/Coins/Coins";
import Coin from "./pages/Coin/Coin";
import Chart from "./pages/Chart/Chart";
import Price from "../src/pages/Price";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
