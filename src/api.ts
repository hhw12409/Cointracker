const BASE_URL = "https://api.coinpaprika.com/v1";

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
