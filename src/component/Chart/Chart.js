import { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import style from "./Chart.module.css";

const Chart = (props) => {
  const [currencyData, setCurrencyData] = useState();
  const name = props.currency.split("").slice(0, 3).join("");

  useEffect(() => {
    if (name !== "Wyb") {
      axios
        .get(
          `https://api.nbp.pl/api/exchangerates/rates/a/${name.toLowerCase()}/last/10/?format=json`
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.rates);
            dataSet(res.data.rates);
          }
        });
    }
  }, [name]);

  const dataSet = (data) => {
    setCurrencyData(data);
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={88}>
        <AreaChart data={currencyData}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#2451B7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area dataKey="mid" stroke="#2451B7" fill="url(#gradient)" />
          <XAxis
            dataKey="effectiveDate"
            axisLine={false}
            tick={false}
            tickLine={false}
          />
          <YAxis
            dataKey="mid"
            axisLine={false}
            tick={false}
            tickLine={false}
            domain={["datamin - 0.1", "datamax + 0.1"]}
          />
          <Tooltip content={<CustomToolTip />} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
