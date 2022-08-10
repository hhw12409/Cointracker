const BASE_URL = "https://api.coinpaprika.com/v1";
const OHLCV_URL = "https://ohlcv-api.nomadcoders.workers.dev/";

export const fetchCoins = async () => {
  const response = await fetch(`${BASE_URL}/coins/`);
  return await response.json();
};

export const fetchCoinInfo = async (coinId: string | undefined) => {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  return await response.json();
};

export const fetchCoinTickers = async (coinId: string | undefined) => {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  return await response.json();
};

export const fetchCoinHistory = async (coinId: string | undefined) => {
  const response = await fetch(`${OHLCV_URL}?coinId=${coinId}`);
  return await response.json();
};
