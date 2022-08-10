import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../../apis/api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atoms";

interface IHistorical {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

const Chart = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useParams<string>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <h1>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) as number[],
            },
          ]}
          options={{
            chart: { height: 500, width: 500, toolbar: { show: false } },
            theme: { mode: isDark ? "dark" : "light" },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              categories: data?.map((data) => {
                const timestamp = data.time_close * 1000;
                const date = new Date(timestamp);
                return (
                  date.getFullYear() +
                  "/" +
                  (date.getMonth() + 1) +
                  "/" +
                  date.getDate()
                );
              }),
            },
          }}
        />
      )}
    </h1>
  );
};

export default Chart;
